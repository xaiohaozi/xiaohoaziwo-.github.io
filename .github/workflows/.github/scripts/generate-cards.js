
// .github/scripts/generate-cards.js
const fs = require('fs');
const path = require('path');

// 配置
const CARDS_FILE = 'cards.json';
const IMAGES_DIR = 'images';
const OUTPUT_FILE = 'cards_with_images.json';
// 默认图片（当找不到匹配图片时使用）
const DEFAULT_IMAGE = 'https://via.placeholder.com/300x180?text=No+Image';

// 辅助函数：规范化标题以匹配文件名
function normalizeTitle(title) {
    // 移除可能影响文件名的特殊字符，保留中文、字母、数字、空格、下划线、横线
    // 可根据需要调整，此处简单去除 windows 文件名非法字符
    return title.replace(/[\\/:*?"<>|]/g, '').trim();
}

// 主函数
async function main() {
    try {
        // 1. 读取 cards.json
        if (!fs.existsSync(CARDS_FILE)) {
            console.error(`❌ 未找到 ${CARDS_FILE}`);
            process.exit(1);
        }
        const cardsRaw = fs.readFileSync(CARDS_FILE, 'utf8');
        const cards = JSON.parse(cardsRaw);

        // 2. 获取 images 文件夹中的所有文件（递归可选，此处只处理直接子文件）
        let imageFiles = [];
        if (fs.existsSync(IMAGES_DIR)) {
            imageFiles = fs.readdirSync(IMAGES_DIR).map(file => ({
                name: file,
                ext: path.extname(file).toLowerCase(),
                base: path.basename(file, path.extname(file))
            }));
        } else {
            console.warn('⚠️  images 文件夹不存在，将全部使用默认图片');
        }

        // 3. 为每张卡片匹配图片
        const enrichedCards = cards.map(card => {
            const title = card.title || '';
            const normalized = normalizeTitle(title);

            // 在 imageFiles 中查找匹配的文件（忽略大小写）
            let matchedImage = imageFiles.find(img => 
                img.base.toLowerCase() === normalized.toLowerCase() &&
                ['.jpg', '.jpeg', '.png', '.gif'].includes(img.ext)
            );

            let imageUrl;
            if (matchedImage) {
                // 构建 raw 文件 URL（注意分支名，通常为 main 或 master）
                // 由于 Actions 运行在特定 commit，使用 raw.githubusercontent.com 的永久链接更安全
                // 这里我们假设仓库默认分支为 main，您可以根据需要调整
                const branch = process.env.GITHUB_REF_NAME || 'main'; // 当前分支名
                const repo = process.env.GITHUB_REPOSITORY; // 格式 'owner/repo'
                if (repo) {
                    imageUrl = `https://raw.githubusercontent.com/${repo}/${branch}/${IMAGES_DIR}/${matchedImage.name}`;
                } else {
                    // 后备：相对路径（如果最终文件与图片在同一服务器，可使用相对路径）
                    imageUrl = `./${IMAGES_DIR}/${matchedImage.name}`;
                }
            } else {
                imageUrl = DEFAULT_IMAGE;
            }

            return {
                ...card,
                image: imageUrl // 添加图片 URL 字段
            };
        });

        // 4. 写入输出文件
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(enrichedCards, null, 2), 'utf8');
        console.log(`✅ 成功生成 ${OUTPUT_FILE}，共处理 ${enrichedCards.length} 张卡片。`);

    } catch (error) {
        console.error('❌ 脚本执行出错:', error);
        process.exit(1);
    }
}

main();
