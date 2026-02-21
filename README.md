<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>蔚蓝电竞 · 全局可改价目表</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        *{margin:0;padding:0;box-sizing:border-box;font-family:system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue',sans-serif;}
        body{background:linear-gradient(145deg,#f0f7ff 0%,#dae8f5 100%);min-height:100vh;padding:20px;display:flex;flex-direction:column;align-items:center;position:relative;}
        .container{max-width:1200px;width:100%;margin:0 auto;}
        .glass-nav{background:rgba(255,255,255,0.3);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border-radius:60px;padding:12px 20px;margin-bottom:30px;box-shadow:0 10px 25px rgba(0,40,70,0.15);border:1px solid rgba(255,255,255,0.7);display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px 15px;position:sticky;top:15px;z-index:10;}
        .nav-btn{background:rgba(255,255,255,0.4);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,0.6);padding:10px 20px;border-radius:40px;font-size:1rem;font-weight:500;color:#1e3f62;cursor:pointer;transition:0.2s;white-space:nowrap;box-shadow:0 4px 10px rgba(0,0,0,0.05);}
        .nav-btn:hover{background:rgba(255,255,255,0.8);border-color:#a0c4e5;transform:translateY(-2px);box-shadow:0 8px 18px rgba(0,60,100,0.15);}
        .add-btn{background:rgba(160,210,255,0.5);font-weight:600;font-size:1.3rem;padding:8px 22px;}
        .add-btn:hover{background:rgba(180,225,255,0.9);}
        h1{font-size:clamp(1.8rem,6vw,2.8rem);color:#1f4973;text-align:center;margin-bottom:30px;font-weight:300;letter-spacing:1px;}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;padding:10px;}
        .card{background:rgba(255,255,255,0.7);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-radius:30px;padding:24px 20px;box-shadow:0 15px 30px rgba(0,30,60,0.1);border:1px solid rgba(255,255,255,0.7);transition:transform 0.2s,box-shadow 0.2s;scroll-margin-top:80px;}
        .card:hover{transform:translateY(-5px);box-shadow:0 20px 35px rgba(30,80,130,0.15);}
        .card h3{font-size:1.6rem;color:#245e8f;margin-bottom:10px;border-bottom:1px dashed #aac7e2;padding-bottom:8px;}
        .card p{color:#1e3b5a;line-height:1.5;font-size:1rem;margin-bottom:15px;white-space:pre-line;}
        .card-img{width:100%;max-height:200px;object-fit:cover;border-radius:20px;margin-top:10px;border:1px solid rgba(255,255,255,0.5);background:rgba(200,220,240,0.3);cursor:pointer;transition:opacity 0.2s;}
        .card-img:hover{opacity:0.9;}
        .img-placeholder{width:100%;height:120px;border-radius:20px;background:rgba(200,220,240,0.5);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;color:#366e9e;font-size:0.9rem;border:1px solid rgba(255,255,255,0.5);margin-top:10px;}
        .admin-btn{position:fixed;bottom:30px;right:30px;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,0.5);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.8);box-shadow:0 8px 20px rgba(0,40,70,0.2);display:none;align-items:center;justify-content:center;font-size:28px;color:#1f4973;cursor:pointer;z-index:100;transition:0.2s;}
        .admin-btn:hover{background:rgba(255,255,255,0.9);transform:scale(1.05);}
        .modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.2);backdrop-filter:blur(5px);z-index:200;align-items:center;justify-content:center;padding:20px;}
        .modal.show{display:flex;}
        .modal-content{background:rgba(255,255,255,0.8);backdrop-filter:blur(20px);border-radius:40px;width:100%;max-width:800px;max-height:85vh;overflow-y:auto;padding:30px;box-shadow:0 30px 50px rgba(0,30,60,0.3);border:1px solid rgba(255,255,255,0.8);}
        .modal-content h2{color:#1f4973;margin-bottom:20px;border-bottom:1px dashed #aac7e2;padding-bottom:10px;}
        .tab-buttons{display:flex;gap:10px;margin-bottom:20px;}
        .tab-btn{background:rgba(255,255,255,0.5);border:1px solid rgba(255,255,255,0.6);padding:10px 20px;border-radius:40px;color:#1f4973;cursor:pointer;transition:0.2s;font-weight:500;}
        .tab-btn.active{background:white;border-color:#7cb0d5;}
        .tab-pane{display:none;}
        .tab-pane.active{display:block;}
        .global-tools{background:rgba(255,255,255,0.5);border-radius:30px;padding:20px;margin-bottom:25px;border:1px solid rgba(255,255,255,0.6);}
        .global-tools h3{color:#245e8f;margin-bottom:15px;font-size:1.2rem;}
        .tool-buttons{display:flex;gap:15px;flex-wrap:wrap;margin-bottom:15px;}
        .tool-btn{background:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.8);padding:10px 20px;border-radius:40px;color:#1f4973;cursor:pointer;transition:0.2s;font-size:0.95rem;}
        .tool-btn:hover{background:rgba(255,255,255,0.9);}
        .import-area{margin-top:15px;}
        .import-area textarea{width:100%;height:120px;padding:15px;border-radius:30px;border:1px solid rgba(255,255,255,0.8);background:rgba(255,255,255,0.6);font-family:monospace;font-size:0.9rem;resize:vertical;margin-bottom:10px;}
        .card-edit{background:rgba(255,255,255,0.4);border-radius:30px;padding:20px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.6);position:relative;}
        .card-edit h3{color:#245e8f;margin-bottom:15px;font-size:1.2rem;display:flex;align-items:center;justify-content:space-between;}
        .delete-card{background:rgba(255,120,120,0.6);border:1px solid rgba(255,100,100,0.8);border-radius:30px;padding:5px 15px;font-size:0.9rem;color:#631e1e;cursor:pointer;transition:0.2s;}
        .delete-card:hover{background:rgba(255,80,80,0.8);color:white;}
        .form-group{margin-bottom:15px;}
        .form-group label{display:block;color:#1e3b5a;font-weight:500;margin-bottom:5px;}
        .form-group input,.form-group textarea{width:100%;padding:12px 18px;border-radius:30px;border:1px solid rgba(255,255,255,0.8);background:rgba(255,255,255,0.6);font-size:1rem;color:#1a385c;outline:none;transition:0.2s;}
        .form-group input:focus,.form-group textarea:focus{border-color:#7cb0d5;background:white;}
        .form-group textarea{min-height:80px;resize:vertical;}
        .image-control{display:flex;gap:10px;align-items:center;flex-wrap:wrap;}
        .image-control input{flex:1;min-width:200px;}
        .image-control button{background:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.8);padding:10px 18px;border-radius:40px;color:#1f4973;cursor:pointer;transition:0.2s;white-space:nowrap;}
        .image-control button:hover{background:rgba(255,255,255,0.9);}
        .preview-img{max-width:100px;max-height:60px;border-radius:12px;margin-top:10px;border:1px solid #ccc;}
        .page-text-edit{display:grid;grid-template-columns:1fr 1fr;gap:15px;}
        .page-text-edit .full-width{grid-column:span 2;}
        .modal-buttons{display:flex;gap:15px;justify-content:flex-end;margin-top:20px;flex-wrap:wrap;}
        .modal-buttons button{padding:12px 28px;border-radius:40px;border:none;background:rgba(255,255,255,0.7);backdrop-filter:blur(5px);border:1px solid rgba(255,255,255,0.8);color:#1f4973;font-weight:600;cursor:pointer;transition:0.2s;}
        .modal-buttons button:hover{background:white;}
        .reset-btn{background:rgba(220,230,245,0.7)!important;}
        .add-card-btn{background:rgba(140,200,255,0.5)!important;margin-right:auto;}
        .preview-modal{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);backdrop-filter:blur(10px);z-index:300;align-items:center;justify-content:center;}
        .preview-modal.show{display:flex;}
        .preview-content{background:rgba(255,255,255,0.1);border-radius:30px;padding:20px;max-width:90vw;max-height:90vh;display:flex;flex-direction:column;align-items:center;}
        .preview-image-container{overflow:auto;max-width:80vw;max-height:70vh;text-align:center;cursor:grab;}
        .preview-image-container img{max-width:100%;max-height:100%;object-fit:contain;transition:transform 0.2s;transform-origin:center;}
        .preview-controls{margin-top:20px;display:flex;gap:15px;flex-wrap:wrap;justify-content:center;}
        .preview-btn{background:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.8);padding:10px 20px;border-radius:40px;color:#1f4973;cursor:pointer;transition:0.2s;font-size:1rem;font-weight:500;}
        .preview-btn:hover{background:rgba(255,255,255,0.9);}
        @media(max-width:600px){body{padding:10px;}.glass-nav{border-radius:40px;padding:10px 12px;gap:8px;}.nav-btn{padding:6px 14px;font-size:0.9rem;}.admin-btn{bottom:20px;right:20px;}.page-text-edit{grid-template-columns:1fr;}.page-text-edit .full-width{grid-column:span 1;}}
        html{scroll-behavior:smooth;}
    </style>
</head>
<body>
    <div class="container">
        <div class="glass-nav" id="dynamicNav"></div>
        <h1 id="pageMainTitle">📱 蔚蓝电竞 · 全局可改价目表</h1>
        <div class="grid" id="cardGrid"></div>
    </div>
    <div class="admin-btn" id="adminBtn">⚙️</div>
    <!-- 管理模态框 -->
    <div class="modal" id="adminModal">
        <div class="modal-content">
            <h2 id="modalTitle">⚙️ 全局管理 · 蔚蓝电竞</h2>
            <div class="tab-buttons">
                <button class="tab-btn active" data-tab="cards">📋 卡片管理</button>
                <button class="tab-btn" data-tab="texts">📝 页面文字</button>
            </div>
            <div class="tab-pane active" id="tabCards">
                <div class="global-tools">
                    <h3 id="globalOpsTitle">🌐 全局操作</h3>
                    <div class="tool-buttons">
                        <button class="tool-btn" id="exportBtn">📤 导出所有数据</button>
                        <button class="tool-btn" id="importBtn">📥 导入数据</button>
                        <button class="tool-btn" id="batchEditBtn">✏️ 批量替换文本</button>
                    </div>
                    <div class="import-area" id="importArea" style="display:none;">
                        <textarea id="importJson" placeholder="在此粘贴JSON数据..."></textarea>
                        <button class="tool-btn" id="confirmImport">确认导入（将覆盖现有卡片）</button>
                        <button class="tool-btn" id="cancelImport">取消</button>
                    </div>
                    <div class="import-area" id="batchArea" style="display:none;">
                        <textarea id="batchReplace" placeholder='输入要替换的文本，格式：旧词1=新词1;旧词2=新词2&#10;例如：卡片=Card;价格=Price'></textarea>
                        <button class="tool-btn" id="confirmBatch">执行替换</button>
                        <button class="tool-btn" id="cancelBatch">取消</button>
                    </div>
                </div>
                <div style="margin-bottom:20px; text-align:right;"><button class="add-card-btn" id="addCardInModal">➕ 添加新卡片</button></div>
                <div id="editForms"></div>
            </div>
            <div class="tab-pane" id="tabTexts">
                <div class="global-tools">
                    <h3 id="pageTextsTitle">📝 修改页面静态文字</h3>
                    <div class="page-text-edit" id="pageTextsContainer"></div>
                    <div style="margin-top:20px; display:flex; gap:10px; justify-content:flex-end;"><button class="tool-btn" id="resetPageTexts">↺ 重置默认</button></div>
                </div>
            </div>
            <div class="modal-buttons">
                <button class="reset-btn" id="resetBtn">↺ 重置卡片为默认</button>
                <button id="saveBtn">💾 保存修改</button>
                <button id="closeBtn">✖ 关闭</button>
            </div>
            <p style="color:#666; margin-top:15px; font-size:0.85rem;" id="modalFooterNote">图片支持URL或Base64（单张≤10MB）。导入数据需为包含id,title,desc,img字段的JSON数组。</p>
        </div>
    </div>
    <!-- 图片预览模态框 -->
    <div class="preview-modal" id="previewModal">
        <div class="preview-content">
            <div class="preview-image-container" id="previewImageContainer"><img id="previewImage" src="" alt="预览图"></div>
            <div class="preview-controls">
                <button class="preview-btn" id="zoomInBtn">🔍+ 放大</button>
                <button class="preview-btn" id="zoomOutBtn">🔍- 缩小</button>
                <button class="preview-btn" id="resetZoomBtn">🔄 重置</button>
                <button class="preview-btn" id="closePreviewBtn">✖ 关闭</button>
            </div>
        </div>
    </div>
    <script>
        (function(){
            const ADMIN_PASSWORD='admin123',STORAGE_KEY='fullPageData',MAX_IMAGE_SIZE_MB=10;
            const defaultPageTexts={
                mainTitle:"📱 蔚蓝电竞 · 全局可改价目表",modalTitle:"⚙️ 全局管理 · 蔚蓝电竞",tabCardsLabel:"📋 卡片管理",tabTextsLabel:"📝 页面文字",globalOpsTitle:"🌐 全局操作",exportBtn:"📤 导出所有数据",importBtn:"📥 导入数据",batchEditBtn:"✏️ 批量替换文本",importPlaceholder:"在此粘贴JSON数据...",confirmImport:"确认导入（将覆盖现有卡片）",cancelImport:"取消",batchPlaceholder:"输入要替换的文本，格式：旧词1=新词1;旧词2=新词2\n例如：卡片=Card;价格=Price",confirmBatch:"执行替换",cancelBatch:"取消",addCardBtn:"➕ 添加新卡片",pageTextsTitle:"📝 修改页面静态文字",resetPageTexts:"↺ 重置默认",resetCardsBtn:"↺ 重置卡片为默认",saveBtn:"💾 保存修改",closeBtn:"✖ 关闭",modalFooterNote:"图片支持URL或Base64（单张≤10MB）。导入数据需为包含id,title,desc,img字段的JSON数组。"
            };
            const defaultCards=[
                {id:'card1',title:'0元购 · 首通自营',desc:'每个金+2r，小红1格+10r，大红按格数递增，非洲之心+150r，海洋之泪+200r。预存500r起，老板需听指挥。',img:''},
                {id:'card2',title:'男护小时',desc:'娱乐60H，A级100，S级120，SS级150，明星300。体验单168R保300W/266R保1314W。累积保底多种。',img:''},
                {id:'card3',title:'清图·角色扮演',desc:'角色单520R起，全家福3688R起，勇气之挺1288R，三红连连看6888R，单局大红串3888R。',img:''},
                {id:'card4',title:'情感剧本',desc:'598保1520W，988保2588W，1314保3588W。好感度投喂机制，撤离成功增加好感。',img:''},
                {id:'card5',title:'三角洲女陪玩',desc:'娱乐60，A级80，S级100，SS级140，SSS级180，明星260。体验单168R保666w/288R保1000w。',img:''},
                {id:'card6',title:'趣味单合集',desc:'扑克/刀皮、喵叫单、彩礼单、对赌大红等多样玩法。详情请咨询客服。',img:''}
            ];
            let isAdmin=false,cardsData=[],pageTexts={...defaultPageTexts};
            const modal=document.getElementById('adminModal'),dynamicNav=document.getElementById('dynamicNav'),cardGrid=document.getElementById('cardGrid'),editForms=document.getElementById('editForms'),pageTextsContainer=document.getElementById('pageTextsContainer'),adminBtn=document.getElementById('adminBtn'),previewModal=document.getElementById('previewModal'),previewImage=document.getElementById('previewImage'),zoomInBtn=document.getElementById('zoomInBtn'),zoomOutBtn=document.getElementById('zoomOutBtn'),resetZoomBtn=document.getElementById('resetZoomBtn'),closePreviewBtn=document.getElementById('closePreviewBtn');
            let currentZoom=1;
            const escapeHtml=str=>String(str).replace(/[&<>"]/g,m=>m==='&'?'&amp;':m==='<'?'&lt;':m==='>'?'&gt;':m==='"''?'&quot;':m);
            function isStorageAvailable(data){try{localStorage.setItem('__test__','test');localStorage.removeItem('__test__');return new Blob([JSON.stringify(data)]).size<=4*1024*1024;}catch(e){return false;}}
            function saveData(){const dataToSave={cards:cardsData,texts:pageTexts};if(!isStorageAvailable(dataToSave)){alert('数据过大，可能无法保存。');return false;}try{localStorage.setItem(STORAGE_KEY,JSON.stringify(dataToSave));return true;}catch(e){alert('保存失败');return false;}}
            function loadData(){const stored=localStorage.getItem(STORAGE_KEY);if(stored){try{const parsed=JSON.parse(stored);cardsData=Array.isArray(parsed.cards)?parsed.cards:[...defaultCards];pageTexts=parsed.texts?{...defaultPageTexts,...parsed.texts}:{...defaultPageTexts};}catch(e){cardsData=[...defaultCards];pageTexts={...defaultPageTexts};}}else{cardsData=[...defaultCards];pageTexts={...defaultPageTexts};}
                cardsData=cardsData.map(c=>({id:c.id||'card_'+Date.now()+Math.random().toString(36).substr(2,4),title:c.title||'未命名',desc:c.desc||'',img:c.img||''}));}
            function renderCards(){if(!cardGrid)return;cardGrid.innerHTML=cardsData.map(card=>{const imgHtml=card.img?`<img src="${escapeHtml(card.img)}" class="card-img" data-img="${escapeHtml(card.img)}" onerror="this.style.display='none'">`:`<div class="img-placeholder">🖼️ 暂无图片</div>`;return `<div id="${card.id}" class="card"><h3>${escapeHtml(card.title)}</h3><p>${escapeHtml(card.desc).replace(/\n/g,'<br>')}</p>${imgHtml}</div>`;}).join('');
                document.querySelectorAll('.card-img').forEach(img=>img.addEventListener('click',function(e){e.stopPropagation();const src=this.getAttribute('src');if(src){previewImage.src=src;currentZoom=1;previewImage.style.transform=`scale(${currentZoom})`;previewModal.classList.add('show');}}));}
            function renderNav(){if(!dynamicNav)return;let buttonsHtml=cardsData.map(card=>{let btnText=card.title.length>8?card.title.substring(0,6)+'…':card.title;return `<button class="nav-btn" data-target="${card.id}">${escapeHtml(btnText)}</button>`;}).join('');buttonsHtml+=`<button class="nav-btn add-btn" id="addCardBtn">➕</button>`;dynamicNav.innerHTML=buttonsHtml;document.querySelectorAll('.nav-btn[data-target]').forEach(btn=>btn.addEventListener('click',e=>{const id=btn.getAttribute('data-target');document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}));document.getElementById('addCardBtn')?.addEventListener('click',handleAddCard);}
            function renderAll(){renderCards();renderNav();}
            function renderEditForms(){if(!editForms)return;editForms.innerHTML=cardsData.map((card,idx)=>`
                <div class="card-edit" data-index="${idx}">
                    <h3>📌 卡片 ${idx+1} (${card.id.substring(0,6)}...) <span class="delete-card" data-id="${card.id}">🗑️ 删除</span></h3>
                    <div class="form-group"><label>标题</label><input type="text" class="edit-title" value="${escapeHtml(card.title)}"></div>
                    <div class="form-group"><label>描述</label><textarea class="edit-desc">${escapeHtml(card.desc)}</textarea></div>
                    <div class="form-group"><label>图片</label>
                        <div class="image-control"><input type="text" class="edit-img" value="${escapeHtml(card.img||'')}" placeholder="URL或Base64"><button type="button" class="upload-btn">📤 上传</button><button type="button" class="clear-img">✖ 清除</button></div>
                        <div class="preview-img-container">${card.img?`<img src="${escapeHtml(card.img)}" class="preview-img">`:''}</div>
                        <input type="file" accept="image/*" style="display:none;" class="file-input">
                    </div>
                </div>`).join('');
                document.querySelectorAll('.delete-card').forEach(btn=>btn.addEventListener('click',e=>{e.stopPropagation();const id=btn.getAttribute('data-id');if(id&&confirm('确定删除此卡片吗？')){cardsData=cardsData.filter(c=>c.id!==id);if(saveData()){renderAll();renderEditForms();}}}));
                document.querySelectorAll('.card-edit').forEach(editDiv=>{const fileInput=editDiv.querySelector('.file-input'),uploadBtn=editDiv.querySelector('.upload-btn'),imgInput=editDiv.querySelector('.edit-img'),clearBtn=editDiv.querySelector('.clear-img'),previewContainer=editDiv.querySelector('.preview-img-container');
                    uploadBtn.addEventListener('click',()=>fileInput.click());
                    fileInput.addEventListener('change',e=>{const file=e.target.files[0];if(!file)return;if(file.size>MAX_IMAGE_SIZE_MB*1024*1024){alert(`图片不能超过${MAX_IMAGE_SIZE_MB}MB`);fileInput.value='';return;}const reader=new FileReader();reader.onload=ev=>{imgInput.value=ev.target.result;previewContainer.innerHTML=`<img src="${ev.target.result}" class="preview-img">`;};reader.readAsDataURL(file);fileInput.value='';});
                    clearBtn.addEventListener('click',()=>{imgInput.value='';previewContainer.innerHTML='';});
                    imgInput.addEventListener('input',function(){const val=this.value;previewContainer.innerHTML=val?`<img src="${escapeHtml(val)}" class="preview-img" onerror="this.style.display='none'">`:'';});});}
            function collectCardForms(){document.querySelectorAll('.card-edit').forEach((editDiv,idx)=>{if(idx>=cardsData.length)return;cardsData[idx].title=editDiv.querySelector('.edit-title')?.value||'';cardsData[idx].desc=editDiv.querySelector('.edit-desc')?.value||'';cardsData[idx].img=editDiv.querySelector('.edit-img')?.value||'';});if(saveData()){renderAll();return true;}return false;}
            function renderPageTextsEdit(){if(!pageTextsContainer)return;let html='';for(let[key,value]of Object.entries(pageTexts)){const full=key.includes('Note')||key.includes('Placeholder');html+=`<div class="form-group${full?' full-width':''}"><label>${key}</label><input type="text" class="page-text-input" data-key="${key}" value="${escapeHtml(value)}"></div>`;}pageTextsContainer.innerHTML=html;}
            function collectPageTexts(){document.querySelectorAll('.page-text-input').forEach(input=>{const key=input.getAttribute('data-key');if(key)pageTexts[key]=input.value;});saveData();applyPageTexts();}
            function applyPageTexts(){document.getElementById('pageMainTitle').textContent=pageTexts.mainTitle;document.getElementById('modalTitle').textContent=pageTexts.modalTitle;const tabBtns=document.querySelectorAll('.tab-btn');if(tabBtns[0])tabBtns[0].textContent=pageTexts.tabCardsLabel;if(tabBtns[1])tabBtns[1].textContent=pageTexts.tabTextsLabel;document.getElementById('globalOpsTitle').textContent=pageTexts.globalOpsTitle;document.getElementById('exportBtn').textContent=pageTexts.exportBtn;document.getElementById('importBtn').textContent=pageTexts.importBtn;document.getElementById('batchEditBtn').textContent=pageTexts.batchEditBtn;document.getElementById('importJson').placeholder=pageTexts.importPlaceholder;document.getElementById('confirmImport').textContent=pageTexts.confirmImport;document.getElementById('cancelImport').textContent=pageTexts.cancelImport;document.getElementById('batchReplace').placeholder=pageTexts.batchPlaceholder;document.getElementById('confirmBatch').textContent=pageTexts.confirmBatch;document.getElementById('cancelBatch').textContent=pageTexts.cancelBatch;document.getElementById('addCardInModal').innerHTML=pageTexts.addCardBtn;document.getElementById('pageTextsTitle').textContent=pageTexts.pageTextsTitle;document.getElementById('resetPageTexts').textContent=pageTexts.resetPageTexts;document.getElementById('resetBtn').innerHTML='↺ '+pageTexts.resetCardsBtn;document.getElementById('saveBtn').innerHTML='💾 '+pageTexts.saveBtn;document.getElementById('closeBtn').innerHTML='✖ '+pageTexts.closeBtn;document.getElementById('modalFooterNote').textContent=pageTexts.modalFooterNote;}
            function resetPageTextsToDefault(){pageTexts={...defaultPageTexts};saveData();applyPageTexts();renderPageTextsEdit();}
            function resetCardsToDefault(){cardsData=[...defaultCards];if(saveData()){renderAll();renderEditForms();}}
            function handleAddCard(){if(!isAdmin&&!verifyAdmin())return;const newId='card_'+Date.now()+'_'+Math.random().toString(36).substr(2,6);cardsData.push({id:newId,title:'新卡片 '+(cardsData.length+1),desc:'编辑内容',img:''});if(saveData()){renderAll();openAdminModal('cards');setTimeout(()=>document.querySelector('.card-edit:last-child')?.scrollIntoView({behavior:'smooth',block:'center'}),200);}}
            function verifyAdmin(){if(isAdmin)return true;const pwd=prompt('请输入管理员密码：');if(pwd===ADMIN_PASSWORD){isAdmin=true;return true;}else{alert('密码错误');return false;}}
            function openAdminModal(tab='cards'){if(!verifyAdmin())return;renderEditForms();renderPageTextsEdit();document.querySelectorAll('.tab-btn').forEach(btn=>btn.classList.remove('active'));document.querySelectorAll('.tab-pane').forEach(pane=>pane.classList.remove('active'));document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');document.getElementById(`tab${tab.charAt(0).toUpperCase()+tab.slice(1)}`).classList.add('active');document.getElementById('importArea').style.display='none';document.getElementById('batchArea').style.display='none';modal.classList.add('show');}
            function exportData(){const blob=new Blob([JSON.stringify(cardsData,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='weilan_cards_backup.json';a.click();URL.revokeObjectURL(a.href);}
            function importData(jsonStr){try{let newData=JSON.parse(jsonStr);if(!Array.isArray(newData))throw new Error('必须是数组');newData=newData.map((item,idx)=>({id:item.id||'imported_'+Date.now()+'_'+idx,title:item.title||'未命名',desc:item.desc||'',img:item.img||''}));cardsData=newData;if(saveData()){renderAll();renderEditForms();alert('导入成功！');}}catch(e){alert('导入失败：'+e.message);}}
            function batchReplace(oldStr,newStr){if(!oldStr)return;cardsData.forEach(c=>{if(c.title.includes(oldStr))c.title=c.title.split(oldStr).join(newStr);if(c.desc.includes(oldStr))c.desc=c.desc.split(oldStr).join(newStr);});if(saveData()){renderAll();renderEditForms();alert(`已将“${oldStr}”替换为“${newStr}”`);}}
            if(window.location.hash==='#admin'||window.location.search.includes('admin=1'))adminBtn.style.display='flex';else adminBtn.style.display='none';
            document.body.addEventListener('dblclick',function(e){if(e.target.closest('.admin-btn'))return;const pwd=prompt('请输入管理员密码：');if(pwd===ADMIN_PASSWORD){isAdmin=true;adminBtn.style.display='flex';openAdminModal('cards');}else if(pwd!==null)alert('密码错误');});
            zoomInBtn.addEventListener('click',()=>{currentZoom+=0.2;previewImage.style.transform=`scale(${currentZoom})`;});
            zoomOutBtn.addEventListener('click',()=>{if(currentZoom>0.2){currentZoom-=0.2;previewImage.style.transform=`scale(${currentZoom})`;}});
            resetZoomBtn.addEventListener('click',()=>{currentZoom=1;previewImage.style.transform=`scale(${currentZoom})`;});
            closePreviewBtn.addEventListener('click',()=>previewModal.classList.remove('show'));
            previewModal.addEventListener('click',e=>{if(e.target===previewModal)previewModal.classList.remove('show');});
            adminBtn.addEventListener('click',()=>openAdminModal('cards'));
            document.getElementById('closeBtn').addEventListener('click',()=>modal.classList.remove('show'));
            modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show');});
            document.getElementById('saveBtn').addEventListener('click',()=>{collectCardForms();collectPageTexts();modal.classList.remove('show');alert('所有修改已保存');});
            document.getElementById('resetBtn').addEventListener('click',()=>{if(confirm('重置所有卡片为默认内容？这将删除您添加的卡片。'))resetCardsToDefault();});
            document.getElementById('addCardInModal').addEventListener('click',handleAddCard);
            document.getElementById('exportBtn').addEventListener('click',()=>{if(!verifyAdmin())return;exportData();});
            document.getElementById('importBtn').addEventListener('click',()=>{if(!verifyAdmin())return;document.getElementById('importArea').style.display='block';document.getElementById('batchArea').style.display='none';});
            document.getElementById('cancelImport').addEventListener('click',()=>{document.getElementById('importArea').style.display='none';document.getElementById('importJson').value='';});
            document.getElementById('confirmImport').addEventListener('click',()=>{const json=document.getElementById('importJson').value.trim();if(json)importData(json);document.getElementById('importArea').style.display='none';document.getElementById('importJson').value='';});
            document.getElementById('batchEditBtn').addEventListener('click',()=>{if(!verifyAdmin())return;document.getElementById('batchArea').style.display='block';document.getElementById('importArea').style.display='none';});
            document.getElementById('cancelBatch').addEventListener('click',()=>{document.getElementById('batchArea').style.display='none';document.getElementById('batchReplace').value='';});
            document.getElementById('confirmBatch').addEventListener('click',()=>{const rule=document.getElementById('batchReplace').value.trim();if(!rule){alert('请输入规则');return;}const pairs=rule.split(';').filter(p=>p.includes('='));if(pairs.length===0){alert('格式错误，使用 旧词=新词 格式，多条用分号');return;}pairs.forEach(pair=>{const [oldStr,newStr]=pair.split('=').map(s=>s.trim());if(oldStr&&newStr!==undefined)batchReplace(oldStr,newStr);});document.getElementById('batchArea').style.display='none';document.getElementById('batchReplace').value='';});
            document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',e=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const tab=btn.getAttribute('data-tab');document.querySelectorAll('.tab-pane').forEach(pane=>pane.classList.remove('active'));document.getElementById(`tab${tab.charAt(0).toUpperCase()+tab.slice(1)}`).classList.add('active');}));
            document.getElementById('resetPageTexts').addEventListener('click',()=>{if(confirm('重置所有页面文字为默认？'))resetPageTextsToDefault();});
            loadData();renderAll();applyPageTexts();
            if(window.location.hash){setTimeout(()=>{const id=window.location.hash.substring(1);document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});},200);}
        })();
    </script>
</body>
</html>
