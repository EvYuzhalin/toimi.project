// placeholder появление/исчезновение
let input = document.querySelectorAll('.form__box_input');

input.forEach(el => {
    el.addEventListener('click', (e) => {
        el.children[0].classList.add('hide')
    })
    el.addEventListener('focusout', (e) => {
        if (el.children[1].value == '') {
            el.children[0].classList.remove('hide')
        }
    })
});



// проверка полей формы при отправке
let form_required = document.getElementById("form");
let form_username = document.getElementById("username");
let form_email = document.getElementById("usermail");
let form_comment = document.getElementById("comment");
let button_fly = document.getElementById("submitButton");

function sendForm (){
    if (!form_username.value || !form_email.value || !form_comment.value) {
        alert('Введите данные');
     
      } else {
          button_fly.classList.add("button_castom"); 
      }
}



// перенос блоков в header
document.addEventListener("DOMContentLoaded", ready);
function ready()
{
  // перенос блоков при загрузке экрана
  if ($(window).width() < 1025) {
    $('.header__navigation').prependTo('.mobile__menu_box');
   }
  else {
    $('.header__navigation').prependTo('.header__container');
  }
  if ($(window).width() < 768) {
    $('.header__toolbar_lng').prependTo('.mobile__menu_box');
    $('.header__toolbar_btn').prependTo('.mobile__menu_box');
   }
  else {
    $('.header__toolbar_lng').prependTo('.header__toolbar');
    $('.header__toolbar_btn').prependTo('.header__toolbar');
  }
    
  // перенос блоков при изменении ширины экрана 
  $(window).on('resize', function(){
    if ($(window).width() < 1025) {
      $('.header__navigation').prependTo('.mobile__menu_box');
    }
    else {
      $('.header__navigation').prependTo('.header__container');
    }
    if ($(window).width() < 768) {
        $('.header__toolbar_lng').prependTo('.mobile__menu_box');
        $('.header__toolbar_btn').prependTo('.mobile__menu_box');
       }
      else {
        $('.header__toolbar_lng').prependTo('.header__toolbar');
        $('.header__toolbar_btn').prependTo('.header__toolbar');
      }
    });

    // открытие меню в мобилке
    $('.header__toolbar_icon').on('click',function () {
        $('.mobile__menu_box').toggleClass('mobile__menu_active');
    });

}
