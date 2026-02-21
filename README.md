<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>蔚蓝电竞 · 全局可改价目表（GitHub 持久化）</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* 完全保留之前的 CSS，此处省略以节省篇幅，实际使用时请粘贴完整样式 */
        /* 您可以直接复制上一轮回复中的完整 CSS 部分 */
    </style>
</head>
<body>
    <!-- HTML 结构与之前完全相同，此处省略，请复制上一轮回复中的完整 HTML 结构 -->
    <!-- 但需要在 modal-buttons 内增加一个按钮：<button id="saveToGitHubBtn" class="tool-btn">💾 保存到 GitHub</button> -->

    <script>
        (function() {
            // ==================== 配置 ====================
            const ADMIN_PASSWORD = 'admin123';
            const STORAGE_KEY = 'fullPageData';
            const MAX_IMAGE_SIZE_MB = 10;
            // GitHub 配置
            const GITHUB_USER = '您的GitHub用户名';      // 例如 'xhz001'
            const GITHUB_REPO = '您的仓库名';            // 例如 'xhz001.github.io'
            const GITHUB_TOKEN = '您的个人访问令牌';      // 例如 'ghp_xxxxxxxxxxxx'
            const DATA_FILE_PATH = 'cards.json';          // 数据文件路径

            // ... 其余代码与之前相同（defaultPageTexts、defaultCards、loadData、saveData 等）
            // 注意：loadData 应优先从 GitHub 加载，失败时使用默认值

            // ==================== 新增：从 GitHub 加载数据 ====================
            async function loadDataFromGitHub() {
                const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${DATA_FILE_PATH}`;
                try {
                    const response = await fetch(url, {
                        headers: { Authorization: `token ${GITHUB_TOKEN}` }
                    });
                    if (!response.ok) throw new Error('无法获取数据');
                    const data = await response.json();
                    // 文件内容是 base64 编码的
                    const content = atob(data.content);
                    cardsData = JSON.parse(content);
                } catch (e) {
                    console.warn('从 GitHub 加载失败，使用默认数据', e);
                    cardsData = [...defaultCards];
                }
                // 确保卡片格式正确
                cardsData = cardsData.map(c => ({
                    id: c.id || 'card_' + Date.now() + Math.random().toString(36).substr(2, 4),
                    title: c.title || '未命名',
                    desc: c.desc || '',
                    img: c.img || ''
                }));
                renderAll();
            }

            // ==================== 新增：保存到 GitHub ====================
            async function saveToGitHub() {
                const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${DATA_FILE_PATH}`;
                // 先获取当前文件的 SHA（用于更新）
                let sha = null;
                try {
                    const response = await fetch(url, {
                        headers: { Authorization: `token ${GITHUB_TOKEN}` }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        sha = data.sha;
                    }
                } catch (e) { /* 文件可能不存在 */ }

                // 准备新内容
                const newContent = btoa(JSON.stringify(cardsData, null, 2));
                const body = {
                    message: '更新卡片数据',
                    content: newContent,
                    branch: 'main' // 如果您的主分支是 master，请改为 'master'
                };
                if (sha) body.sha = sha;

                const response = await fetch(url, {
                    method: 'PUT',
                    headers: {
                        Authorization: `token ${GITHUB_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
                if (response.ok) {
                    alert('数据已成功保存到 GitHub！');
                } else {
                    const error = await response.json();
                    alert('保存失败：' + error.message);
                }
            }

            // ==================== 修改初始化 ====================
            // 原 loadData() 替换为 loadDataFromGitHub()
            loadDataFromGitHub();

            // ==================== 绑定新按钮 ====================
            document.getElementById('saveToGitHubBtn').addEventListener('click', async () => {
                if (!verifyAdmin()) return;
                await saveToGitHub();
            });

            // ... 其余事件绑定保持不变
        })();
    </script>
</body>
</html>
