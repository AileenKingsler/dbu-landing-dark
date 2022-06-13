$(function () {

  checkElementLocation();

  $(window).on('scroll', function () {
    checkElementLocation();
  });

  transformServiceContent();

  $(window).on('resize', function () {
    transformServiceContent();
  });

  $('.form').on('submit', function () {
    var th = $(this);

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      th.trigger('reset');
      $('#successModal').modal('show');
      setTimeout(function () {
        $('#successModal').modal('hide');
      }, 3000);
    });

    return false;
  });

  $('.modal-form').on('submit', function () {
    var th = $(this);

    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      th.trigger('reset');
      th.find('.send-success').show();
      setTimeout(function () {
        $('.modal').modal('hide');
        th.find('.send-success').hide();
      }, 3000);
    });

    return false;
  });

  $('#questionModal').on('hidden.bs.modal', function (event) {
    event.relatedTarget.blur();
  });

});

function transformServiceContent() {
  $('.service-item__text').each(function () {
    const shift = $(this).innerHeight() + parseInt($(this).css("marginTop"));
    $(this).parent('.service-item__content').css('transform', `translateY(${shift}px)`);
  });
}

function checkElementLocation() {
  const windowHeight = $(window).height();
  var bottomOfWindow = $(window).scrollTop() + windowHeight;

  $('[data-animation]').each(function () {
    $(this).addClass('opacity-0');
  });

  $('[data-animation]').each(function () {
    var topOfObject = $(this).offset().top + windowHeight / 6;

    if (bottomOfWindow > topOfObject) {
      $(this).addClass('fade-in');
    }
  });
}
