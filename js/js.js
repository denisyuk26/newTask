var selector_font = document.querySelector('.choseTypeFace').addEventListener('click', setTextSetting),
    selector_style = document.querySelector('.choseStyling').addEventListener('click', setTextSetting),
    selector_background = document.querySelector('.chooseBackground').addEventListener('click', setTextSetting),
    font = document.getElementsByClassName('a'),
    style = document.getElementsByClassName('b'),
    background = document.getElementsByClassName('c'),
    out = document.getElementById('result'),
    bgc = document.getElementById('userbg'),
    arr_font = [],
    arr_style = [],
    arr_bg = [];


function setTextSetting(event) {
    var set_font = event.target.getAttribute('data-font'),
        set_style = event.target.getAttribute('data-style'),
        set_color = event.target.getAttribute('data-color'),
        i = 0;


    for(i = 0; i < font.length; i++) {
        arr_font.push(font[i]);
    }
    for(i = 0; i < style.length; i++) {
        arr_style.push(style[i]);
    }
    for(i = 0; i < background.length; i++) {
        arr_bg.push(background[i]);
    }
    switch(set_font){
        case '1':
            out.classList.add('font1');
            out.classList.remove('font2');
            out.classList.remove('font3');
            arr_font[0].classList.add('active-font');
            arr_font[1].classList.remove('active-font');
            arr_font[2].classList.remove('active-font');
            arr_style[2].classList.remove('disabled');
            style[2].setAttribute('data-style', 'italic');
            break;
        case '2':
            out.classList.add('font2');
            out.classList.remove('font1');
            out.classList.remove('font3');
            arr_font[0].classList.remove('active-font');
            arr_font[1].classList.add('active-font');
            arr_font[2].classList.remove('active-font');
            arr_style[2].classList.remove('disabled');
            style[2].setAttribute('data-style', 'italic');
            break;
        case '3':
            out.classList.add('font3');
            out.classList.remove('font2');
            out.classList.remove('font1');
            arr_font[2].classList.add('active-font');
            arr_font[1].classList.remove('active-font');
            arr_font[0].classList.remove('active-font');
            arr_style[2].classList.add('disabled');
            style[2].removeAttribute('data-style');
            out.classList.remove('style-italic');
            break;
    }
    switch(set_style){
        case 'norm':
            out.classList.add('style-normal');
            out.classList.remove('style-bold');
            out.classList.remove('style-italic');
            arr_style[0].classList.add('active-style');
            arr_style[1].classList.remove('active-style');
            arr_style[2].classList.remove('active-style');
            break;
        case 'bold':
            out.classList.add('style-bold');
            out.classList.remove('style-normal');
            out.classList.remove('style-italic');
            arr_style[0].classList.remove('active-style');
            arr_style[1].classList.add('active-style');
            arr_style[2].classList.remove('active-style');
            break;
        case 'italic':
            out.classList.add('style-italic');
            out.classList.remove('style-bold');
            out.classList.remove('style-normal');
            arr_style[0].classList.remove('active-style');
            arr_style[1].classList.remove('active-style');
            arr_style[2].classList.add('active-style');
            break;
    }
    switch(set_color){
        case "bl":
            bgc.classList.add('blue');
            bgc.classList.remove('green');
            bgc.classList.remove('yellow');
            bgc.classList.remove('black');
            bgc.classList.remove('darkWhite');
            arr_bg[0].classList.add('checked');
            arr_bg[1].classList.remove('checked');
            arr_bg[2].classList.remove('checked');
            arr_bg[3].classList.remove('checked');
            arr_bg[4].classList.remove('checked');

            break;
        case "grn":
            bgc.classList.add('green');
            bgc.classList.remove('blue');
            bgc.classList.remove('yellow');
            bgc.classList.remove('black');
            bgc.classList.remove('darkWhite');
            arr_bg[1].classList.add('checked');
            arr_bg[0].classList.remove('checked');
            arr_bg[2].classList.remove('checked');
            arr_bg[3].classList.remove('checked');
            arr_bg[4].classList.remove('checked');

            break;
        case "ylw":
            bgc.classList.add('yellow');
            bgc.classList.remove('blue');
            bgc.classList.remove('green');
            bgc.classList.remove('black');
            bgc.classList.remove('darkWhite');
            arr_bg[2].classList.add('checked');
            arr_bg[1].classList.remove('checked');
            arr_bg[0].classList.remove('checked');
            arr_bg[3].classList.remove('checked');
            arr_bg[4].classList.remove('checked');

            break;
        case "blc":
            bgc.classList.add('black');
            bgc.classList.remove('blue');
            bgc.classList.remove('yellow');
            bgc.classList.remove('green');
            bgc.classList.remove('darkWhite');
            arr_bg[3].classList.add('checked');
            arr_bg[1].classList.remove('checked');
            arr_bg[2].classList.remove('checked');
            arr_bg[0].classList.remove('checked');
            arr_bg[4].classList.remove('checked');

            break;
        case "dw":
            bgc.classList.add('darkWhite');
            bgc.classList.remove('blue');
            bgc.classList.remove('yellow');
            bgc.classList.remove('black');
            bgc.classList.remove('black');
            arr_bg[4].classList.add('checked');
            arr_bg[1].classList.remove('checked');
            arr_bg[2].classList.remove('checked');
            arr_bg[3].classList.remove('checked');
            arr_bg[0].classList.remove('checked');

            break;
    }
}

