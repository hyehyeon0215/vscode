const header_gnb = document.querySelectorAll('.header-menu > li');
const bar_icon = document.querySelectorAll('.bar-icon > li');
const gnb_1depth = document.querySelector('.menu_1depth > li > a ');

const menu_portfolio = document.querySelector('.menu-portfolio');
const menu_portfolioBtn = menu_portfolio.querySelector('.bracket');
const menu_portfolioList = menu_portfolio.querySelector('ul');

const menu_Btn = document.querySelector('.menu-btn > .bracket');
const menu_List = document.querySelector('.menu_2depth');

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
    } else {
        menu_Btn.classList.add('off');
        menu_List.classList.add('off');
    }
})