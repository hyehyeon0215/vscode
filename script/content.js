const active_tab = document.querySelector('.active-tab');
const active_tabList = active_tab.querySelectorAll('li');
const active_route = document.querySelector('.active-route > span');
const content_list = document.querySelectorAll('.content');

const main_2depth = document.querySelectorAll('.menu_2depth > li > a');
const main_3depth = document.querySelectorAll('.menu_3depth > li');
const main_sub = [...main_2depth, ...main_3depth];


const header_sub = document.querySelectorAll('.header-sub > li')

header_sub.forEach((el, index)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        active_tabList.forEach((el)=>{
            el.classList.remove('active');
            if(el.dataset.route == header_sub[index].dataset.route) {
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
        main_sub.forEach((el)=>{
            el.classList.remove('open');

            if(header_sub[index].dataset.route == el.dataset.route) {
                main_sub[index].classList.add('open');
            }
        })
    })
})


main_2depth.forEach((el, index)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        active_tabList.forEach((el)=>{
            el.classList.remove('active');
            if(el.dataset.route == main_2depth[index].dataset.route) {
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
        main_sub.forEach((el)=>{
            el.classList.remove('open');
        })
    })
})


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
        main_sub.forEach((el)=>{
            el.classList.remove('open');
        })
    })
})

active_tabList.forEach((el, index)=>{
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

        if(el.classList.contains('active')) {
            main_sub.forEach((el)=>{
                el.classList.remove('open');
                if(active_tabList[index].dataset.route == el.dataset.route) {
                    main_sub[index].classList.add('open');
                }
            })
        }

    })

})

//토글키

const toggle_btn = document.querySelector('#switch');
const vs_wrap = document.querySelector('.vs-wrap');


toggle_btn.addEventListener("click", ()=>{
    if(vs_wrap.classList.contains('dark-theme')) {
        vs_wrap.classList.remove('dark-theme');
    } else {
        vs_wrap.classList.add('dark-theme');
    }
})