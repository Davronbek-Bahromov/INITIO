var relitem = document.querySelector('.relitem');
var menu2 = document.querySelector('.menu2');
var bba = document.querySelector('.bba');
var menu = document.querySelector('.menu'); 

relitem.addEventListener('click', function(){
    menu2.classList.toggle('showmenu2');
});

bba.addEventListener('click', function(){
    menu.classList.toggle('menushow');
    bba.classList.toggle('bba2');
    bba.querySelector('i').classList.toggle('fa-times');
});