<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>蔚蓝电竞 · 治愈系价目卡</title>
    <style>
        /* 样式保持不变，与之前相同 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Microsoft YaHei', 'Segoe UI', 'Helvetica Neue', sans-serif;
        }

        body {
            background: linear-gradient(145deg, #e1f0fa, #c9e3f5);
            min-height: 100vh;
            padding: 20px;
            color: #2c4c6b;
        }

        body.admin-mode .editable {
            outline: 2px dashed #7fb7d9;
            cursor: pointer;
            background: rgba(127, 183, 217, 0.1);
            border-radius: 8px;
        }

        body.admin-mode .card {
            position: relative;
            border: 2px dashed #7fb7d9;
        }

        body.user-mode .card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(5px);
            box-shadow: 0 10px 25px rgba(100, 150, 200, 0.1);
        }

        .delete-card-btn {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #ff8a8a;
            color: white;
            border: 2px solid white;
            font-size: 18px;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(255,0,0,0.3);
            z-index: 50;
        }

        body.admin-mode .delete-card-btn {
            display: flex;
        }

        .container {
            max-width: 1300px;
            margin: 0 auto;
        }

        .top-nav {
            position: sticky;
            top: 10px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 60px;
            padding: 12px 30px;
            margin-bottom: 30px;
            box-shadow: 0 8px 30px rgba(100, 150, 200, 0.2);
            border: 1px solid rgba(127, 183, 217, 0.5);
            z-index: 100;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            align-items: center;
        }

        .nav-item {
            position: relative;
            display: inline-flex;
            align-items: center;
        }

        .nav-link {
            color: #3a6792;
            text-decoration: none;
            padding: 8px 22px;
            border-radius: 40px;
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid #aac9e5;
            display: inline-block;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(100, 150, 200, 0.1);
        }

        body.admin-mode .nav-link {
            padding-right: 40px;
        }

        .nav-edit-group {
            display: none;
            position: absolute;
            right: -5px;
            top: -5px;
            gap: 5px;
            z-index: 20;
        }

        body.admin-mode .nav-edit-group {
            display: flex;
        }

        .nav-edit-btn, .nav-delete-btn {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }

        .nav-edit-btn {
            background: #7fb7d9;
            color: white;
        }

        .nav-delete-btn {
            background: #ff8a8a;
            color: white;
        }

        .add-nav-btn {
            background: #8fc5e9;
            color: #1e3a5f;
            border: none;
            padding: 8px 22px;
            border-radius: 40px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            display: none;
            box-shadow: 0 4px 12px rgba(100, 150, 200, 0.2);
        }

        body.admin-mode .add-nav-btn {
            display: inline-block;
        }

        .auth-btn {
            background: #8fc5e9;
            color: #1e3a5f;
            border: none;
            padding: 8px 28px;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(100, 150, 200, 0.2);
        }

        .auth-btn.admin-mode {
            background: #a8d5ba;
            color: #1e4a3a;
        }

        .hero {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(8px);
            border-radius: 50px;
            padding: 50px 40px;
            margin-bottom: 40px;
            text-align: center;
            border: 1px solid rgba(127, 183, 217, 0.5);
            box-shadow: 0 20px 40px rgba(100, 150, 200, 0.15);
        }

        .hero h1 {
            font-size: 3.2rem;
            color: #1e4a7a;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .hero p {
            color: #3a6792;
            font-size: 1.2rem;
        }

        .admin-toolbar {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border-radius: 60px;
            padding: 15px 25px;
            border: 2px solid #7fb7d9;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            display: none;
            z-index: 1000;
            gap: 15px;
            align-items: center;
        }

        body.admin-mode .admin-toolbar {
            display: flex;
        }

        .toolbar-btn {
            background: #8fc5e9;
            color: #1e3a5f;
            border: none;
            padding: 8px 20px;
            border-radius: 40px;
            cursor: pointer;
            font-weight: 500;
            font-size: 14px;
        }

        .toolbar-btn.danger {
            background: #ff8a8a;
            color: white;
        }

        .toolbar-separator {
            width: 1px;
            height: 30px;
            background: #b8d6f0;
            margin: 0 10px;
        }

        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .card {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(5px);
            border-radius: 40px;
            padding: 28px;
            border: 1px solid rgba(127, 183, 217, 0.5);
            transition: 0.3s;
            position: relative;
            box-shadow: 0 15px 30px rgba(100, 150, 200, 0.15);
            display: flex;
            flex-direction: column;
        }

        .card-content {
            flex: 1;
        }

        .card-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }

        .card-title {
            font-size: 2rem;
            font-weight: 600;
            color: #1e4a7a;
            margin-bottom: 12px;
        }

        .card-desc {
            color: #3a6792;
            margin-bottom: 20px;
            line-height: 1.5;
        }

        .price-tag {
            background: rgba(127, 183, 217, 0.3);
            color: #1e4a7a;
            padding: 8px 22px;
            border-radius: 40px;
            display: inline-block;
            font-weight: 600;
            font-size: 1.2rem;
            margin-bottom: 20px;
        }

        /* 图片容器 - 修复版 */
        .image-preview-btn {
            background: rgba(127, 183, 217, 0.2);
            border: 2px dashed #7fb7d9;
            border-radius: 30px;
            padding: 10px;
            text-align: center;
            cursor: pointer;
            margin-top: 10px;
            transition: 0.2s;
            color: #3a6792;
            min-height: 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .image-preview-btn:hover {
            background: rgba(127, 183, 217, 0.4);
        }

        .image-preview-btn.has-image {
            background: rgba(255, 255, 255, 0.8);
            border: 2px solid #7fb7d9;
            padding: 10px;
        }

        .image-preview-btn img {
            max-width: 100%;
            max-height: 120px;
            border-radius: 20px;
            object-fit: cover;
            display: block;
            margin-bottom: 5px;
        }

        .preview-icon {
            font-size: 2.5rem;
            margin-bottom: 5px;
        }

        .preview-text {
            font-size: 0.9rem;
        }

        .image-actions {
            display: none;
            margin-top: 10px;
            gap: 8px;
            flex-wrap: wrap;
            justify-content: center;
        }

        body.admin-mode .image-actions {
            display: flex;
        }

        .image-action-btn {
            background: #8fc5e9;
            color: #1e3a5f;
            border: none;
            padding: 6px 15px;
            border-radius: 30px;
            cursor: pointer;
            font-size: 0.85rem;
        }

        .image-action-btn.danger {
            background: #ff8a8a;
            color: white;
        }

        /* 图片预览模态框 */
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 3000;
            display: none;
        }

        .image-modal.show {
            display: flex;
        }

        .image-modal-content {
            max-width: 90vw;
            max-height: 90vh;
            position: relative;
        }

        .image-modal-content img {
            max-width: 100%;
            max-height: 90vh;
            border-radius: 30px;
            box-shadow: 0 30px 60px rgba(0,0,0,0.5);
            border: 3px solid white;
        }

        .close-image-modal {
            position: absolute;
            top: -40px;
            right: -40px;
            background: white;
            color: #333;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            font-size: 30px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .contact-section {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(8px);
            border-radius: 50px;
            padding: 40px;
            margin-top: 60px;
            margin-bottom: 80px;
            border: 1px solid #aac9e5;
            box-shadow: 0 20px 40px rgba(100, 150, 200, 0.15);
        }

        .contact-section h3 {
            font-size: 2rem;
            color: #1e4a7a;
            margin-bottom: 25px;
            text-align: center;
        }

        .contact-content {
            display: flex;
            justify-content: space-between;
            gap: 30px;
            flex-wrap: wrap;
        }

        .contact-info {
            flex: 1;
            min-width: 250px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .contact-item {
            padding: 15px 20px;
            border-radius: 40px;
            background: rgba(255, 255, 255, 0.4);
            color: #2c4c6b;
            font-size: 1.1rem;
        }

        .hours {
            padding: 15px 20px;
            border-radius: 40px;
            background: rgba(255, 255, 255, 0.4);
            color: #5a7f9f;
        }

        .contact-image-container {
            flex: 1;
            min-width: 280px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .contact-image-btn {
            background: rgba(255, 255, 255, 0.4);
            border: 2px dashed #7fb7d9;
            border-radius: 30px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: 0.2s;
            color: #3a6792;
            min-height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .contact-image-btn.has-image {
            background: rgba(255, 255, 255, 0.7);
            border: 2px solid #7fb7d9;
        }

        .contact-image-btn img {
            max-width: 100%;
            max-height: 180px;
            border-radius: 20px;
            margin-bottom: 10px;
            object-fit: cover;
        }

        .contact-image-actions {
            display: none;
            gap: 10px;
            justify-content: center;
        }

        body.admin-mode .contact-image-actions {
            display: flex;
        }

        .auth-hint {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.3);
            backdrop-filter: blur(5px);
            padding: 4px 12px;
            border-radius: 30px;
            border: 1px solid rgba(127, 183, 217, 0.3);
            color: #5a7f9f;
            font-size: 12px;
            cursor: pointer;
            z-index: 900;
        }

        .save-status {
            position: fixed;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            background: #a8d5ba;
            color: #1e4a3a;
            padding: 8px 20px;
            border-radius: 40px;
            display: none;
            z-index: 1000;
            font-size: 14px;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(150, 180, 210, 0.5);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            display: none;
        }

        .modal.show {
            display: flex;
        }

        .modal-content {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(15px);
            border-radius: 50px;
            padding: 45px;
            width: 90%;
            max-width: 500px;
            border: 1px solid #aac9e5;
            box-shadow: 0 30px 60px rgba(70, 120, 170, 0.3);
        }

        .modal-title {
            font-size: 2rem;
            color: #1e4a7a;
            margin-bottom: 25px;
            font-weight: 600;
        }

        .modal-buttons {
            display: flex;
            gap: 10px;
            margin-top: 25px;
            flex-wrap: wrap;
        }

        .modal-buttons .btn {
            flex: 1;
            min-width: 120px;
            background: #8fc5e9;
            color: #1e3a5f;
            border: none;
            padding: 12px 20px;
            border-radius: 40px;
            cursor: pointer;
        }

        .modal-buttons .btn-danger {
            background: #ff8a8a;
            color: white;
        }

        .modal-buttons .btn-success {
            background: #a8d5ba;
            color: #1e4a3a;
        }

        .delete-options {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px dashed #7fb7d9;
            text-align: center;
        }
    </style>
</head>
<body id="mainBody" class="user-mode">

<div class="save-status" id="saveStatus">✨ 已保存</div>

<nav class="top-nav">
    <div class="nav-links" id="navLinks"></div>
    <div style="display: flex; gap: 10px;">
        <button class="add-nav-btn" id="addNavBtn">➕ 添加导航</button>
        <button class="auth-btn" id="authBtn">🔐 管理员</button>
    </div>
</nav>

<div class="container">
    <div class="hero">
        <h1 class="editable" data-type="hero" data-field="title" id="heroTitle">蔚蓝电竞 · 治愈系价目卡</h1>
        <p class="editable" data-type="hero" data-field="subtitle" id="heroSubtitle">图片预览已修复 · 点击小图看大图</p>
    </div>

    <div id="sectionsContainer"></div>

    <div class="contact-section" id="contact">
        <h3 class="editable" data-type="contact" data-field="title" id="contactTitle">📞 联系我们</h3>
        <div class="contact-content">
            <div class="contact-info">
                <div class="contact-item editable" data-type="contact" data-field="phone" id="contactPhone">📞 400-888-XXXX</div>
                <div class="contact-item editable" data-type="contact" data-field="wechat" id="contactWechat">💬 AzurE_Sports</div>
                <div class="contact-item editable" data-type="contact" data-field="address" id="contactAddress">📍 XX市电竞产业园A座3楼</div>
                <div class="hours editable" data-type="contact" data-field="hours" id="contactHours">营业时间：周一至周日 10:00 - 22:00</div>
            </div>
            <div class="contact-image-container">
                <div class="contact-image-btn" id="contactImageBtn" onclick="previewContactImage()"></div>
                <div class="contact-image-actions" id="contactImageActions">
                    <button class="image-action-btn" onclick="uploadContactImage()">📤 上传</button>
                    <button class="image-action-btn" onclick="setContactImageUrl()">🔗 URL</button>
                    <button class="image-action-btn danger" onclick="clearContactImage()">🗑️ 清除</button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="admin-toolbar" id="adminToolbar">
    <span style="color:#1e4a7a; font-weight:500;">🔧 管理工具</span>
    <div class="toolbar-separator"></div>
    <button class="toolbar-btn" id="quickAddCardBtn">➕ 快速添加卡片</button>
    <button class="toolbar-btn" id="ocrToolbarBtn">📸 OCR导入</button>
    <button class="toolbar-btn" id="exportToolbarBtn">📤 导出数据</button>
    <button class="toolbar-btn danger" id="resetToolbarBtn">🔄 重置</button>
</div>

<div class="image-modal" id="imageModal" onclick="if(event.target===this) closeImageModal()">
    <div class="image-modal-content">
        <img id="previewImage" src="" alt="预览图片">
        <button class="close-image-modal" onclick="closeImageModal()">✕</button>
    </div>
</div>

<div class="auth-hint" id="authHint">🔑</div>

<div class="modal" id="editModal">
    <div class="modal-content">
        <div class="modal-title" id="modalTitle">编辑内容</div>
        <div id="modalFields"></div>
        <div class="delete-options">
            <div class="delete-options-title">🗑️ 请选择删除方式：</div>
            <div class="modal-buttons">
                <button class="btn btn-danger" id="deleteFieldOnlyBtn" style="flex:1;">只删除这段文字</button>
                <button class="btn btn-danger" id="deleteWholeCardBtn" style="flex:1;">删除整个卡片</button>
            </div>
        </div>
        <div class="modal-buttons">
            <button class="btn btn-success" id="saveEditBtn" style="flex:2;">保存修改</button>
            <button class="btn" id="cancelEditBtn" style="flex:1;">取消</button>
        </div>
    </div>
</div>

<input type="file" id="fileInput" accept="image/*" style="display: none;">
<input type="file" id="importFile" accept=".json" style="display: none;">

<script>
    const ADMIN_PASSWORD = '678678';
    let isAdmin = false;
    const STORAGE_KEY = 'esports_final_fixed';
    const DEFAULT_DATA = {
        nav: [
            { id: 'nav1', text: '🎮 Steam', target: 'steam' },
            { id: 'nav2', text: '🪖 绝地求生', target: 'pubg' },
            { id: 'nav3', text: '🎲 租号玩', target: 'rent' },
            { id: 'nav4', text: '📺 影音', target: 'video' },
            { id: 'nav5', text: '🎨 显示', target: 'display' },
            { id: 'nav6', text: '📞 联系', target: 'contact' }
        ],
        sections: [
            { id: 'steam', title: '🎮 Steam游戏 · 治愈时光' },
            { id: 'pubg', title: '🪖 绝地求生 · 轻松竞技' },
            { id: 'rent', title: '🎲 租号玩 · 快乐分享' },
            { id: 'video', title: '📺 影音娱乐 · 悠闲时刻' },
            { id: 'display', title: '🎨 显示设置 · 温柔视界' }
        ],
        cards: {
            steam: [
                { id: 's1', icon: '🔫', title: '使命召唤22', desc: '现代战争 · 温馨陪伴', price: '免费畅玩', image: '' },
                { id: 's2', icon: '⚔️', title: '战地风云6', desc: '大规模战场 · 轻松对战', price: '免费畅玩', image: '' },
                { id: 's3', icon: '🏎️', title: '地平线5', desc: '开放世界 · 治愈极光', price: '免费畅玩', image: '' }
            ],
            pubg: [
                { id: 'p1', icon: '🪖', title: '标准版账号', desc: '畅玩梅利包', price: '¥29.9/天', image: '' },
                { id: 'p2', icon: '🎟️', title: '黑货券', desc: '特价开箱', price: '6折', image: '' }
            ],
            rent: [
                { id: 'r1', icon: '🎲', title: '租号玩', desc: '荔枝平移A / 栗子娱乐', price: '¥1/小时', image: '' }
            ],
            video: [
                { id: 'v1', icon: '▶️', title: '腾讯视频', desc: 'VIP畅享', price: '免费体验', image: '' }
            ],
            display: [
                { id: 'd1', icon: '🎨', title: '色调', desc: '温柔色调', value: '0', image: '' },
                { id: 'd2', icon: '📊', title: '数字振动', desc: '舒适模式', value: '50', image: '' }
            ]
        },
        hero: {
            title: '蔚蓝电竞 · 治愈系价目卡',
            subtitle: '图片预览已修复 · 点击小图看大图'
        },
        contact: {
            title: '📞 联系我们',
            phone: '📞 400-888-XXXX',
            wechat: '💬 AzurE_Sports',
            address: '📍 XX市电竞产业园A座3楼',
            hours: '营业时间：周一至周日 10:00 - 22:00',
            image: ''
        }
    };

    let siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    let currentEditElement = null;

    function loadData() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                siteData = JSON.parse(saved);
            } catch (e) {}
        }
    }

    function saveData(showTip = true) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
        if (showTip && isAdmin) {
            const tip = document.getElementById('saveStatus');
            tip.style.display = 'block';
            setTimeout(() => tip.style.display = 'none', 1500);
        }
    }

    function setMode(admin) {
        isAdmin = admin;
        const body = document.getElementById('mainBody');
        const authBtn = document.getElementById('authBtn');
        const authHint = document.getElementById('authHint');
        if (admin) {
            body.className = 'admin-mode';
            authBtn.textContent = '✅ 管理员';
            authHint.textContent = '🔑 点击退出';
        } else {
            body.className = 'user-mode';
            authBtn.textContent = '🔐 管理员';
            authHint.textContent = '🔑';
        }
        renderAll();
    }

    document.getElementById('authBtn').addEventListener('click', () => {
        if (isAdmin) {
            if (confirm('退出管理员模式？')) setMode(false);
        } else {
            const pwd = prompt('请输入管理员密码：');
            if (pwd === ADMIN_PASSWORD) setMode(true);
            else if (pwd) alert('密码错误');
        }
    });

    document.addEventListener('dblclick', (e) => {
        if (e.target.closest('.btn') || ['INPUT','TEXTAREA','BUTTON'].includes(e.target.tagName)) return;
        if (isAdmin) {
            if (confirm('退出管理员模式？')) setMode(false);
        } else {
            const pwd = prompt('请输入管理员密码：');
            if (pwd === ADMIN_PASSWORD) setMode(true);
            else if (pwd) alert('密码错误');
        }
    });

    document.getElementById('authHint').addEventListener('click', () => {
        if (isAdmin) {
            if (confirm('退出管理员模式？')) setMode(false);
        }
    });

    // 图片预览函数
    window.previewImage = function(imageUrl) {
        if (!imageUrl) {
            alert('暂无图片');
            return;
        }
        const modal = document.getElementById('imageModal');
        const img = document.getElementById('previewImage');
        img.src = imageUrl;
        modal.classList.add('show');
    };

    window.closeImageModal = function() {
        document.getElementById('imageModal').classList.remove('show');
    };

    // 联系区图片操作
    window.previewContactImage = function() {
        if (siteData.contact.image) previewImage(siteData.contact.image);
        else alert('暂无图片');
    };

    window.uploadContactImage = function() {
        if (!isAdmin) return alert('请先登录管理员');
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                siteData.contact.image = ev.target.result;
                saveData();
                renderContact();
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };

    window.setContactImageUrl = function() {
        if (!isAdmin) return alert('请先登录管理员');
        const url = prompt('请输入图片URL链接');
        if (url) {
            siteData.contact.image = url;
            saveData();
            renderContact();
        }
    };

    window.clearContactImage = function() {
        if (!isAdmin) return alert('请先登录管理员');
        if (confirm('确定清除图片吗？')) {
            siteData.contact.image = '';
            saveData();
            renderContact();
        }
    };

    // 卡片图片操作
    window.uploadCardImage = function(cardId, sectionId) {
        if (!isAdmin) return alert('请先登录管理员');
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const card = siteData.cards[sectionId]?.find(c => c.id === cardId);
                if (card) {
                    card.image = ev.target.result;
                    saveData();
                    renderAll();
                }
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };

    window.setCardImageUrl = function(cardId, sectionId) {
        if (!isAdmin) return;
        const url = prompt('请输入图片URL链接');
        if (url) {
            const card = siteData.cards[sectionId]?.find(c => c.id === cardId);
            if (card) {
                card.image = url;
                saveData();
                renderAll();
            }
        }
    };

    window.clearCardImage = function(cardId, sectionId) {
        if (!isAdmin) return;
        const card = siteData.cards[sectionId]?.find(c => c.id === cardId);
        if (card && confirm('确定清除图片吗？')) {
            card.image = '';
            saveData();
            renderAll();
        }
    };

    window.deleteWholeCard = function(cardId, sectionId) {
        if (!isAdmin || !confirm('确定删除整个卡片吗？')) return;
        if (siteData.cards[sectionId]) {
            siteData.cards[sectionId] = siteData.cards[sectionId].filter(c => c.id !== cardId);
            saveData();
            renderAll();
        }
    };

    window.editNavItem = function(navId) {
        if (!isAdmin) return;
        const navItem = siteData.nav.find(n => n.id === navId);
        if (!navItem) return;
        const newText = prompt('编辑导航文字', navItem.text);
        if (newText !== null) {
            navItem.text = newText;
            saveData();
            renderAll();
        }
    };

    window.deleteNavItem = function(navId) {
        if (!isAdmin || !confirm('确定删除这个导航项？')) return;
        const navItem = siteData.nav.find(n => n.id === navId);
        if (navItem && navItem.target.startsWith('section')) {
            if (confirm('是否同时删除对应的卡片分区？')) {
                const sectionId = navItem.target;
                siteData.sections = siteData.sections.filter(s => s.id !== sectionId);
                delete siteData.cards[sectionId];
            }
        }
        siteData.nav = siteData.nav.filter(n => n.id !== navId);
        saveData();
        renderAll();
    };

    function renderAll() {
        renderNav();
        renderSections();
        renderHero();
        renderContact();
        if (isAdmin) attachEditListeners();
    }

    function renderNav() {
        const navContainer = document.getElementById('navLinks');
        navContainer.innerHTML = '';
        siteData.nav.forEach(item => {
            const navItem = document.createElement('div');
            navItem.className = 'nav-item';
            const link = document.createElement('a');
            link.href = `#${item.target}`;
            link.className = 'nav-link';
            link.textContent = item.text;
            link.onclick = (e) => {
                e.preventDefault();
                document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
            };
            const editGroup = document.createElement('div');
            editGroup.className = 'nav-edit-group';
            const editBtn = document.createElement('button');
            editBtn.className = 'nav-edit-btn';
            editBtn.textContent = '✎';
            editBtn.onclick = (e) => { e.stopPropagation(); editNavItem(item.id); };
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'nav-delete-btn';
            deleteBtn.textContent = '🗑️';
            deleteBtn.onclick = (e) => { e.stopPropagation(); deleteNavItem(item.id); };
            editGroup.appendChild(editBtn);
            editGroup.appendChild(deleteBtn);
            navItem.appendChild(link);
            navItem.appendChild(editGroup);
            navContainer.appendChild(navItem);
        });
    }

    function renderSections() {
        const container = document.getElementById('sectionsContainer');
        container.innerHTML = '';
        siteData.sections.forEach(section => {
            container.innerHTML += `
                <h2 class="section-title" id="${section.id}">
                    <span class="title-text ${isAdmin ? 'editable' : ''}" data-type="section" data-section-id="${section.id}" data-field="title">${section.title}</span>
                    ${isAdmin ? `<button class="add-card-to-section" onclick="addCardToSection('${section.id}')">➕ 添加卡片</button>` : ''}
                </h2>
                <div class="cards-grid" id="${section.id}Cards"></div>
            `;
        });
        siteData.sections.forEach(section => {
            const cardsContainer = document.getElementById(`${section.id}Cards`);
            if (cardsContainer && siteData.cards[section.id]) {
                cardsContainer.innerHTML = siteData.cards[section.id].map(card => {
                    const priceOrValue = card.price || card.value || '';
                    const hasImage = card.image && card.image.trim() !== '';
                    return `
                        <div class="card" data-card-id="${card.id}" data-section="${section.id}">
                            ${isAdmin ? `<button class="delete-card-btn" onclick="deleteWholeCard('${card.id}', '${section.id}')">🗑️</button>` : ''}
                            <div class="card-content">
                                <div class="card-icon ${isAdmin ? 'editable' : ''}" data-type="card" data-section="${section.id}" data-card-id="${card.id}" data-field="icon">${card.icon}</div>
                                <div class="card-title ${isAdmin ? 'editable' : ''}" data-type="card" data-section="${section.id}" data-card-id="${card.id}" data-field="title">${card.title}</div>
                                <div class="card-desc ${isAdmin ? 'editable' : ''}" data-type="card" data-section="${section.id}" data-card-id="${card.id}" data-field="desc">${card.desc}</div>
                                <div class="price-tag ${isAdmin ? 'editable' : ''}" data-type="card" data-section="${section.id}" data-card-id="${card.id}" data-field="price">${priceOrValue}</div>
                            </div>
                            <div class="image-preview-btn ${hasImage ? 'has-image' : ''}" onclick="previewImage('${card.image}')">
                                ${hasImage ? `<img src="${card.image}" alt="卡片图片" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=preview-icon>🖼️</div><div class=preview-text>图片加载失败</div>';">` : `
                                    <div class="preview-icon">🖼️</div>
                                    <div class="preview-text">暂无图片</div>
                                `}
                            </div>
                            ${isAdmin ? `
                                <div class="image-actions">
                                    <button class="image-action-btn" onclick="uploadCardImage('${card.id}', '${section.id}')">📤 上传</button>
                                    <button class="image-action-btn" onclick="setCardImageUrl('${card.id}', '${section.id}')">🔗 URL</button>
                                    <button class="image-action-btn danger" onclick="clearCardImage('${card.id}', '${section.id}')">🗑️</button>
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('');
            }
        });
    }

    function renderHero() {
        document.getElementById('heroTitle').textContent = siteData.hero.title;
        document.getElementById('heroSubtitle').textContent = siteData.hero.subtitle;
    }

    function renderContact() {
        document.getElementById('contactTitle').textContent = siteData.contact.title;
        document.getElementById('contactPhone').textContent = siteData.contact.phone;
        document.getElementById('contactWechat').textContent = siteData.contact.wechat;
        document.getElementById('contactAddress').textContent = siteData.contact.address;
        document.getElementById('contactHours').textContent = siteData.contact.hours;
        const contactImageBtn = document.getElementById('contactImageBtn');
        const hasImage = siteData.contact.image && siteData.contact.image.trim() !== '';
        if (hasImage) {
            contactImageBtn.innerHTML = `<img src="${siteData.contact.image}" alt="联系图片" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=contact-image-icon>🖼️</div><div class=contact-image-text>图片加载失败</div>';"> <div class="contact-image-text">点击预览大图</div>`;
            contactImageBtn.classList.add('has-image');
        } else {
            contactImageBtn.innerHTML = `<div class="contact-image-icon">🖼️</div><div class="contact-image-text">暂无图片</div><div class="contact-image-hint">点击预览</div>`;
            contactImageBtn.classList.remove('has-image');
        }
    }

    window.addCardToSection = function(sectionId) {
        if (!isAdmin) return;
        const newCard = {
            id: sectionId[0] + Date.now() + Math.random().toString(36).substr(2, 4),
            icon: '📌',
            title: '新卡片',
            desc: '点击编辑内容',
            price: '咨询网管',
            image: ''
        };
        if (!siteData.cards[sectionId]) siteData.cards[sectionId] = [];
        siteData.cards[sectionId].push(newCard);
        saveData();
        renderAll();
    };

    document.getElementById('addNavBtn').addEventListener('click', () => {
        if (!isAdmin) return alert('请先登录管理员');
        const newSectionId = 'section' + Date.now();
        const newNavText = prompt('请输入导航名称', '新分区');
        if (!newNavText) return;
        siteData.sections.push({ id: newSectionId, title: newNavText });
        siteData.nav.push({ id: 'nav' + Date.now(), text: newNavText, target: newSectionId });
        siteData.cards[newSectionId] = [];
        saveData();
        renderAll();
        setTimeout(() => {
            if (confirm(`已创建分区「${newNavText}」，现在添加卡片吗？`)) addCardToSection(newSectionId);
        }, 100);
    });

    document.getElementById('quickAddCardBtn').addEventListener('click', () => {
        if (!isAdmin) return;
        const sectionOptions = siteData.sections.map(s => `${s.id} (${s.title})`).join('\n');
        const sectionId = prompt(`输入分区ID添加卡片\n\n可用分区:\n${sectionOptions}\n\n例如: steam`, 'steam');
        if (sectionId && siteData.sections.find(s => s.id === sectionId)) addCardToSection(sectionId);
        else alert('分区不存在');
    });

    document.getElementById('ocrToolbarBtn').addEventListener('click', () => {
        if (!isAdmin) return alert('请先登录管理员');
        alert('OCR功能演示：可对接真实API识别图片中的文字并自动创建卡片');
    });

    document.getElementById('exportToolbarBtn').addEventListener('click', () => {
        if (!isAdmin) return alert('请先登录管理员');
        const dataStr = JSON.stringify(siteData, null, 2);
        const blob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '蔚蓝电竞数据.json';
        a.click();
    });

    document.getElementById('resetToolbarBtn').addEventListener('click', () => {
        if (!isAdmin) return alert('请先登录管理员');
        if (confirm('重置所有数据到默认状态？')) {
            siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
            saveData();
            renderAll();
        }
    });

    document.getElementById('importFile').addEventListener('change', (e) => {
        if (!isAdmin) return;
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const imported = JSON.parse(ev.target.result);
                if (imported.nav && imported.sections && imported.cards) {
                    siteData = imported;
                    saveData();
                    renderAll();
                    alert('✨ 导入成功');
                } else alert('文件格式不正确');
            } catch { alert('文件解析失败'); }
        };
        reader.readAsText(file);
    });

    function attachEditListeners() {
        document.querySelectorAll('.editable').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                openEditModal(el);
            });
        });
    }

    function openEditModal(element) {
        currentEditElement = element;
        const type = element.dataset.type;
        const field = element.dataset.field;
        const labels = { icon:'图标', title:'标题', desc:'描述', price:'价格', subtitle:'副标题', phone:'电话', wechat:'微信', address:'地址', hours:'营业时间' };
        document.getElementById('modalFields').innerHTML = `
            <div style="margin-bottom:20px;">
                <label style="color:#1e4a7a;">${labels[field] || '内容'}</label>
                <input class="edit-input" id="editField0" value="${element.textContent.replace(/"/g, '&quot;')}">
            </div>
        `;
        document.getElementById('modalTitle').textContent = `编辑${labels[field] || ''}`;
        document.getElementById('editModal').classList.add('show');
    }

    document.getElementById('saveEditBtn').addEventListener('click', () => {
        if (!currentEditElement || !isAdmin) return;
        const type = currentEditElement.dataset.type;
        const field = currentEditElement.dataset.field;
        const newValue = document.getElementById('editField0')?.value || '';
        if (type === 'hero') siteData.hero[field] = newValue;
        else if (type === 'section') {
            const sectionId = currentEditElement.dataset.sectionId;
            const section = siteData.sections.find(s => s.id === sectionId);
            if (section) {
                section.title = newValue;
                const navItem = siteData.nav.find(n => n.target === sectionId);
                if (navItem) navItem.text = newValue;
            }
        } else if (type === 'card') {
            const sectionId = currentEditElement.dataset.section;
            const cardId = currentEditElement.dataset.cardId;
            const card = siteData.cards[sectionId]?.find(c => c.id === cardId);
            if (card) {
                if (field === 'price' && sectionId === 'display') card.value = newValue;
                else card[field] = newValue;
            }
        } else if (type === 'contact') siteData.contact[field] = newValue;
        saveData();
        renderAll();
        document.getElementById('editModal').classList.remove('show');
    });

    document.getElementById('deleteFieldOnlyBtn').addEventListener('click', () => {
        if (!currentEditElement || !isAdmin || !confirm('确定只删除这段文字吗？')) return;
        const type = currentEditElement.dataset.type;
        const field = currentEditElement.dataset.field;
        if (type === 'hero') siteData.hero[field] = '';
        else if (type === 'section') {
            const sectionId = currentEditElement.dataset.sectionId;
            const section = siteData.sections.find(s => s.id === sectionId);
            if (section) section.title = '';
        } else if (type === 'card') {
            const sectionId = currentEditElement.dataset.section;
            const cardId = currentEditElement.dataset.cardId;
            const card = siteData.cards[sectionId]?.find(c => c.id === cardId);
            if (card) {
                if (field === 'price' && sectionId === 'display') card.value = '';
                else card[field] = '';
            }
        } else if (type === 'contact') siteData.contact[field] = '';
        saveData();
        renderAll();
        document.getElementById('editModal').classList.remove('show');
    });

    document.getElementById('deleteWholeCardBtn').addEventListener('click', () => {
        if (!currentEditElement || !isAdmin) return;
        if (currentEditElement.dataset.type === 'card') {
            const sectionId = currentEditElement.dataset.section;
            const cardId = currentEditElement.dataset.cardId;
            if (confirm('确定删除整个卡片吗？')) {
                siteData.cards[sectionId] = siteData.cards[sectionId].filter(c => c.id !== cardId);
                saveData();
                renderAll();
            }
        } else alert('这不是卡片内容');
        document.getElementById('editModal').classList.remove('show');
    });

    document.getElementById('cancelEditBtn').addEventListener('click', () => {
        document.getElementById('editModal').classList.remove('show');
    });

    loadData();
    setMode(false);
</script>
</body>
</html>
