const header_gnb = document.querySelectorAll('.header-menu > li');
const bar_icon = document.querySelectorAll('.bar-icon > li');

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