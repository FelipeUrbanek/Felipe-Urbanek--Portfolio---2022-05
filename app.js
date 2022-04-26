$('.navbar-burger').click(function () {
  var widthbody = $('.body').width()

  $(this).toggleClass('is-active')
  $('.navbar-menu').toggleClass('is-active')
  $('.navbar-start').css({
    display: 'flex',
    'align-items': 'center',
    position: 'initial',
    width: '100%'
  })
  $('.navbar-start a').css('font-size', '2rem')
  console.log('teste')
})

$(document).scroll(function () {
  if ($(document).scrollTop() > 5) {
    $('.navbar').addClass('is-fixed-top')
    $('.navbar').css({ 'max-width': '100%' })
  } else {
    $('.navbar').removeClass('is-fixed-top')
    $('.navbar').css({ 'max-width': '1440px' })
  }
})

//is-fixed-top
