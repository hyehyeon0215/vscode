const header_gnb = document.querySelectorAll('.header-menu > li');

header_gnb.forEach((el)=>{
    el.addEventListener(("click"),(e)=>{
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