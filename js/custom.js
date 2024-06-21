window.addEventListener('load', () => {
  // const loader = document.querySelector('.loader')
  // const body = document.querySelector('.main')

  // loader.classList.add('loader-hidden');
  // body.classList.remove('loader-hidden');
  // body.classList.add('test');

  // loader.addEventListener('transitionend', () => {
  //     document.body.removeChild("loader")
  // })
})

$(document).ready(function () {

  // $('.form-select').select2();

  function toggleManuPanal() {
    const menuToggle = document.querySelector(".toggle-btn");
    const setting = document.querySelector("#set-icon");
    if (window.innerWidth > 769) {

      menuToggle.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
        document.querySelector("#hamburger").classList.toggle("active");
      });
      setting.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.add("expand");
        document.querySelector("#hamburger").classList.toggle("active");
      });
    } else {
      document.querySelector("#sidebar").classList.add("expand");
      document.querySelector("#hamburger").classList.remove("active");
      document.querySelector(".sidebar-nav").classList.add("close-menu");
      menuToggle.addEventListener("click", function () {
        document.querySelector("#hamburger").classList.toggle("active");
        document.querySelector(".sidebar-nav").classList.toggle("close-menu");
        document.querySelector(".sidebar-nav").classList.toggle("open-menu");
      });
    }
  }

  toggleManuPanal()

  let isReloaded = false
  window.addEventListener('resize', (() => {
    const isSmallScreen = window.innerWidth <= 769
    if (isSmallScreen && !isReloaded) {
      document.querySelector("#sidebar").classList.add("expand");
      // window.location.reload()
      isReloaded = true;
    }
  }));


  $('.user-img').click(function (event) {
    console.log('test');
    window.location.href = '../settings-personalInfo.html'
  })

  // toggle nav sort
  $('.sort-menu').hide();
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.sort-by').length) {
      $('.sort-menu').fadeOut('fast');

    }
  });
  // filter menu
  $('.sort-by').click(function (event) {
    // event.preventDefault();
    $('.sort-menu').fadeToggle('fast');


  })

  // toggle nav filter
  // fliter menu
  $('.filter-menu').hide();
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.filter-by').length) {
      $('.filter-menu').fadeOut('fast');

    }
  });
  // filter menu
  $('.filter-by').click(function (event) {
    // event.preventDefault();
    $('.filter-menu').fadeToggle('fast');
  })

  // user status
  $('.activeUsers').click(function () {
    $('.template-kinds li').removeClass('active');
    $(this).addClass('active')
    $('.readed').parents('tr').fadeIn('slow');
    $('.not-readed').parents('tr').fadeOut('fast');

  })
  $('.deactiveUsers').click(function () {
    $('.template-kinds li').removeClass('active');
    $(this).addClass('active')
    $('.not-readed').parents('tr').fadeIn('slow');
    $('.readed').parents('tr').fadeOut('fast');
  })

  $('.all').click(function () {
    $('.template-kinds li').removeClass('active');
    $(this).addClass('active')
    $('.not-readed').parents('tr').fadeIn('fast');
    $('.readed').parents('tr').fadeIn('fast');
  })

  //select2
  // select2
  $('.form-select').select2({
    dir: 'rtl',
  })

  $('.smart-search-lib').select2({
    dropdownParent: $('#smart-search-lib')
  })

  $('.request-status-select').select2({
    dropdownParent: $('#smart-search-order')
  })

  $('.smart-search-task').select2({
    dropdownParent: $('#smart-search-task')
  })

  $('.create-part').select2({
    dropdownParent: $('#create-part')
  })
  $('.send-report').select2({
    dropdownParent: $('#send-report')
  })
  $('.add-auth').select2({
    dropdownParent: $('#add-auth')
  })
  $('.noti-auth').select2({
    dropdownParent: $('#noti-auth')
  })
  $('.add-leaves').select2({
    dropdownParent: $('#add-leaves')
  })
  $('.add-file').select2({
    dropdownParent: $('#add-file')
  })

  $('#mood').click(function () {
    $(this).toggleClass('dark');
    $('#sidebar').toggleClass('dark');
    $('.main-content').toggleClass('dark');
  })


});

$(document).ready(function () {

  $(document).on('click', '.trash', function (e) {
    Swal.fire({
      imageUrl: "images/delete.png",
      imageWidth: 80,
      imageHeight: 80,
      title: 'حذف ملف',
      text: "لقد انتهى الوقت المسموح والحذف يرجى إرسال طلب الى إدارة النظام",
      showCancelButton: true,
      confirmButtonColor: '#E2211C',
      cancelButtonColor: '#fff',
      confirmButtonText: 'إرسال طلب',
      cancelButtonText: 'تراجع',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          text: "حذف ملف : التجارة والصناعة",
          input: "textarea",
          inputLabel: "سبب الحذف",
          inputPlaceholder: "اكتب هنا",
          inputAttributes: {
            "aria-label": "Type your message here"
          },
          showCancelButton: true,
          confirmButtonText: 'إرسال طلب',
          cancelButtonText: 'تراجع',
          confirmButtonColor: '#E2211C',
          cancelButtonColor: '#fff',
        }
        )
      }
    })

  });
})
