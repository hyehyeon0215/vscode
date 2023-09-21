const header_gnb = document.querySelectorAll('.header-menu > li');
const bar_icon = document.querySelectorAll('.bar-icon > li');
const gnb_1depth = document.querySelector('.menu_1depth > li > a ');

const menu_portfolioBtn = document.querySelector('.menu-portfolio > .bracket');
const menu_portfolioList = document.querySelector('.menu_3depth');

const menu_Btn = document.querySelector('.menu-btn > .bracket');
const menu_List = document.querySelector('.menu_2depth');

const menu_bottom = document.querySelector('.menu-bottom');

const main = document.querySelector('main');

header_gnb.forEach((el)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        if(el.classList.contains('on')) {
            el.classList.remove('on');      
        } else {

            header_gnb.forEach((el)=>{
                el.classList.remove('on');
            })
            el.classList.add('on');
        }
    })
})

main.addEventListener(("click"), ()=>{
    header_gnb.forEach((el)=>{
        el.classList.remove('on');
    })
})

bar_icon.forEach((el)=>{
    el.addEventListener(("click"),(e)=>{
        e.preventDefault();
        bar_icon.forEach((el)=>{
            el.classList.remove('on');
        })
        el.classList.add('on');
    })
})

menu_portfolioBtn.addEventListener(("click"), (e)=>{
    e.preventDefault();

    if(menu_portfolioBtn.classList.contains('off')) {
        menu_portfolioBtn.classList.remove('off');
        menu_portfolioList.classList.remove('off');
    } else {
        menu_portfolioBtn.classList.add('off');
        menu_portfolioList.classList.add('off');
    }
})

menu_Btn.addEventListener(("click"), (e)=>{
    e.preventDefault();

    if(menu_Btn.classList.contains('off')) {
        menu_Btn.classList.remove('off');
        menu_List.classList.remove('off');
        menu_bottom.classList.remove('gotop');
    } else {
        menu_Btn.classList.add('off');
        menu_List.classList.add('off');
        menu_bottom.classList.add('gotop');
    }
})

const menu_3depth = document.querySelector('.menu_3depth');
const menu_3depthList = document.querySelectorAll('.menu_3depth > li > a');
const menu_2depth = document.querySelector('.menu_2depth');
const menu_2depthList = document.querySelectorAll('.menu_2depth > li > a');

menu_3depthList.forEach((el)=>{
    el.addEventListener("focus", (e)=>{
        e.preventDefault();
        let line = menu_3depth.querySelector('.line2');
        line.classList.add('focusing');
    })
    el.addEventListener("blur", (e)=>{
        e.preventDefault();
        let line = menu_3depth.querySelector('.line2');
       line.classList.remove('focusing');
    })
})

menu_2depthList.forEach((el)=>{
    el.addEventListener("focus", (e)=>{
        e.preventDefault();
        let line = menu_2depth.querySelector('.line1');
        line.classList.add('focusing');
    })
    el.addEventListener("blur", (e)=>{
        e.preventDefault();
        let line = menu_2depth.querySelector('.line1');
        line.classList.remove('focusing');
    })
})