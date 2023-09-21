const active_tab = document.querySelector('.active-tab');
const active_tabList = active_tab.querySelectorAll('li');
const active_route = document.querySelector('.active-route > span');
const content_list = document.querySelectorAll('.content');

const main_menu = document.querySelectorAll('.menu_3depth > li');

main_menu.forEach((el, index)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        active_tabList.forEach((el)=>{
            el.classList.remove('active');
            if(el.dataset.route == main_menu[index].dataset.route) {
                el.classList.add('on');
                el.classList.add('active');
                let route = el.dataset.route;
                let content = el.dataset.content;
                active_route.innerHTML = route;
        
                content_list.forEach((el)=>{
                    el.classList.remove('active');
                    if(el.classList.contains(content)) {
                        el.classList.add('active');
                    }
                })
            }
        })
    })
})

active_tabList.forEach((el)=>{
    el.addEventListener(("click"), (e)=>{
        e.preventDefault();
        active_tabList.forEach((el)=>{
            el.classList.remove('active');
        })
        el.classList.add('active');
        let route = el.dataset.route;
        let content = el.dataset.content;
        active_route.innerHTML = route;

        content_list.forEach((el)=>{
            el.classList.remove('active');
            if(el.classList.contains(content)) {
                el.classList.add('active');
            }
        })
    })
})

const portfolio_tab = document.querySelectorAll('.portfolio-tab');

portfolio_tab.forEach((el)=>{
    let close = el.querySelector('.tabclose');
    close.addEventListener(("click"),()=>{
        el.classList.remove('on');
        el.classList.remove('active');
    })
})