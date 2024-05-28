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

  function toggleManuPanal() {
    const menuToggle = document.querySelector(".toggle-btn");
    const search = document.querySelector("#search-icon");
    const setting = document.querySelector("#set-icon");

    if (window.innerWidth > 769) {

      menuToggle.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.toggle("expand");
        document.querySelector("#hamburger").classList.toggle("active");
      });
      search.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.add("expand");
        document.querySelector("#hamburger").classList.toggle("active");
      });
      setting.addEventListener("click", function () {
        document.querySelector("#sidebar").classList.add("expand");
        document.querySelector("#hamburger").classList.toggle("active");
      });
    } else {
      document.querySelector("#sidebar").classList.add("expand");
      document.querySelector("#hamburger").classList.remove("active");
      document.querySelector("#searchList").classList.add("close-menu");
      document.querySelector(".sidebar-nav").classList.add("close-menu");
      menuToggle.addEventListener("click", function () {
        document.querySelector("#hamburger").classList.toggle("active");
        document.querySelector("#searchList").classList.toggle("close-menu");
        document.querySelector("#searchList").classList.toggle("open-menu");
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


  // delete alert
  // alert add to favorite

  $(document).on('click', '.trash', function (e) {
    Swal.fire({
      title: 'هل انت متأكد؟',
      text: "لا يمكن التراجع عن هذا",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2E619E',
      cancelButtonColor: '#A61D21',
      confirmButtonText: 'نعم اريد المسح !',
      cancelButtonText: 'الغاء',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'مسح!',
          'تم مسح الملف.',
          'success',
        )
      }
    })

  });


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


});