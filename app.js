$(function () {
  emailjs.init('01vCxUMKXY1hiZEq7')
})

$('.navbar-burger').click(function () {
  $(this).toggleClass('is-active')
  $('.navbar-menu').toggleClass('is-active')
  $('.navbar-start').css({
    display: 'flex',
    'align-items': 'center',
    position: 'initial',
    width: '100%'
  })
  $('.navbar-start').height(
    $(window).height() - $('.navbar-brand').height() - 20
  )
  $('.navbar-start a').css('font-size', '1.5rem')
})

$('.navbar-start a').click(function () {
  $('.navbar-burger').removeClass('is-active')
  $('.navbar-menu').removeClass('is-active')
})

$(document).scroll(function () {
  if ($(document).scrollTop() > 5) {
    $('.navbar').addClass('is-fixed-top')
    $('.navbar').css({ width: '100%', 'border-radius': '0px 0px 0px 0px' })
  } else {
    $('.navbar').removeClass('is-fixed-top')
    $('.navbar').css({ 'max-width': '1440px' })
  }
})

$('#btn-email').click(function () {
  var templateParams = {
    name: document.getElementById('input-text').value,
    email: document.getElementById('input-email').value,
    mensagem: document.getElementById('input-mensagem-footer').value
  }

  if (
    templateParams.name === '' ||
    templateParams.email === '' ||
    templateParams.mensagem === ''
  ) {
    alert('Preencha todos os campos')
  } else {
    emailjs.send('gmail-message', 'template_gydeqlc', templateParams).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
    $('#btn-email').css('background', '#282828')
    $('#btn-email').text('Enviado!')

    document.getElementById('input-text').value = ''
    document.getElementById('input-email').value = ''
    document.getElementById('input-mensagem-footer').value = ''
  }
})

$('.columns-portfolio img').mouseenter(function () {
  $(this).css('-webkit-filter', 'grayscale(0%)')
  $(this).css('transform', 'scale(1.05)')
})
$('.columns-portfolio .column').mouseenter(function () {
  $(this).find('p').css('transform', 'scale(1.05)')
  $(this).find('button').css('transform', 'scale(1.05)')
  $(this)
    .find('img')
    .css({ filter: 'grayscale(0%) blur(0px)', transform: 'scale(1.05)' })
})

$('.columns-portfolio .column').mouseleave(function () {
  $(this).find('p').css('transform', 'scale(1.00)')
  $(this).find('button').css('transform', 'scale(1.00)')
  $(this)
    .find('img')
    .css({ filter: 'grayscale(100%) blur(2px)', transform: 'scale(1.00)' })
})

$('.home a').mouseenter(function () {
  $(this).css('color', '#282828')
  $('#home_esquerda button').css('transform', 'scale(1.1)')
})
$('.home a').mouseleave(function () {
  $('#home_esquerda button').css('transform', 'scale(1.0)')
  $(this).css('color', '#fff')
})
//is-fixed-top
