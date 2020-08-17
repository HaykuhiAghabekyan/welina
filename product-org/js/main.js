$(document).ready(function () {

  setTimeout(() => {
    $('.modal.fade').css('display', 'block')
  }, 0)

  $(window).scroll(function () {
    if ($(this).scrollTop() > 550) {
      $('.toTop').fadeIn(300)
    } else {
      $('.toTop').fadeOut(300);
    }

  })

  $('.toTop').click(function () {
    $("html, body").animate({ scrollTop: "0" });
  })

  $('.see-more').click(function () {
    $(this).prev('.hide_txt').toggleClass('isOpen');
    $(this).prev('.hide_txt').slideToggle();
    $(this).prev('.hide_txt').hasClass('isOpen') ? $(this).html('  Свернуть') : $(this).html('Показать полностью')
  })

  $('.acc-card-title ').click(function () {
    $(this).next('.sub-catalog').slideToggle(300);
    $(this).toggleClass('isOpen');


  })

  $('.dec').click(function () {
    let targetCount = +$(this).siblings('input').val();
    targetCount--;
    targetCount >= 1 && $(this).siblings('input').val(targetCount - 1)
  })

  $('.inc').click(function () {
    let targetCount = +$(this).siblings('input').val();
    targetCount++;
    $(this).siblings('input').val(targetCount)
  })

  $('.btn-call').click(function () {
    $('.fade').addClass('show');
  })

  $('button.close').click(function () {
    $('.fade').removeClass('show');
  })

  $('.login').click(function () {

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = $('#exampleInputEmail1').val();
    let pass = $('#exampleInputPassword1').val();
    let emailValid, passValid;

    if (!email.match(mailformat)) {
      $('#exampleInputEmail1').next('small').html('Пожалуйста, укажите действующий адрес электронной почты.');
      $('#exampleInputEmail1').css('border-color', '#dd1919');
    } else {
      $('#exampleInputEmail1').next('small').html('');
      $('#exampleInputEmail1').css('border-color', '#ced4da');
      emailValid = true
    }

    if (pass.length < 6) {
      $('#exampleInputPassword1').next('small').html('Минимальное количество символов в пароле: 6. Пожалуйста, введите другой пароль.');
      $('#exampleInputPassword1').css('border-color', '#dd1919');
    } else {
      $('#exampleInputPassword1').next('small').html('');
      $('#exampleInputPassword1').css('border-color', '#ced4da');
      passValid = true
    }

    emailValid && passValid && $('.login-form').submit()
  })

  $('.register').click(function () {

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = $('#exampleInputEmail1').val();

    if (!email.match(mailformat)) {
      $('#exampleInputEmail2').next('small').html('Пожалуйста, укажите действующий адрес электронной почты.');
      $('#exampleInputEmail2').css('border-color', '#dd1919');
    } else {
      $('#exampleInputEmail2').next('small').html('');
      $('#exampleInputEmail2').css('border-color', '#ced4da');
      $('.reg-form').submit()
    }
  })

  $('.divel-accordion h2 span').click(function () {
    $(this).parent().next().slideToggle(300);
    $(this).toggleClass('active');
  })

  let stars = $('.stars span');

  for (let i = 0; i < stars.length; i++) {

    $(stars[i]).mouseover(function () {console.log()
      for (let j = 0; j <= i; j++) {
        $(stars[j]).css('color','#ff9d10');
      }
    })
    $(stars[i]).mouseleave(function () {console.log()
      for (let j = 0; j <= i; j++) {
        $(stars[j]).css('color','#9c9da0');
      }
    })

    stars[i].onclick = function () {
      for (let j = 0; j <= i; j++) {
        $(stars[j]).addClass('active');
        $('.rate').html(j + 1)

      }
    }

  }
  })

let x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      let y, i, k, s, h;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      h = this.parentNode.previousSibling;
      for (i = 0; i < s.length; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < y.length; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elmnt) {
  let x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);