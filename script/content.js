const active_tab = document.querySelector('.active-tab');
const active_tabList = active_tab.querySelectorAll('li');
const active_route = document.querySelector('.active-route > span');
const content_list = document.querySelectorAll('.content');

// const main_1depth = document.querySelectorAll('.menu_1depth > li');
// const main_2depth = document.querySelectorAll('.menu_2depth > li');
const main_3depth = document.querySelectorAll('.menu_3depth > li');


main_3depth.forEach((el, index)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        active_tabList.forEach((el)=>{
            el.classList.remove('active');
            if(el.dataset.route == main_3depth[index].dataset.route) {
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
        console.log(e.target);
        if(e.target.classList.contains('tabclose')) {
            el.classList.remove('on');
            el.classList.remove('active');

            active_tabList.forEach((el)=>{
                el.classList.remove('active');
            })
            active_tabList[0].classList.add('active');
            let route = active_tabList[0].dataset.route;
            let content = active_tabList[0].dataset.content;
            active_route.innerHTML = route;
            content_list.forEach((el)=>{
                el.classList.remove('active');
                if(el.classList.contains(content)) {
                    el.classList.add('active');
                }
            })
            
        } else {
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
        }

    })
})
