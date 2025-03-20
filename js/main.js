// 移动端菜单切换  
document.querySelector('.menu-toggle').addEventListener('click', () => {  
    document.querySelector('.nav-links').classList.toggle('active');  
});  

// 初始化Markdown解析器  
const md = marked.marked;  

// 加载Markdown内容  
document.querySelectorAll('.md-content').forEach(container => {  
    fetch(container.dataset.src)  
        .then(response => response.text())  
        .then(text => {  
            container.innerHTML = md(text);  
        });  
});  

// 滚动触发动画  
const observer = new IntersectionObserver(entries => {  
    entries.forEach(entry => {  
        if (entry.isIntersecting) {  
            entry.target.classList.add('visible');  
        }  
    });  
}, { threshold: 0.25 });  

document.querySelectorAll('.observe').forEach(el => observer.observe(el));  

// 关闭移动菜单当点击外部  
document.addEventListener('click', (e) => {  
    const nav = document.querySelector('.nav-links');  
    if (!e.target.closest('.nav-container') && nav.classList.contains('active')) {  
        nav.classList.remove('active');  
    }  
});
