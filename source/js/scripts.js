$(function () {

  transformServiceContent();

  $(window).resize(function () {
    transformServiceContent();
  });

  $('.form').submit(function () {
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

  $('.modal-form').submit(function () {
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

});

function transformServiceContent() {
  $('.service-item__text').each(function () {
    const shift = $(this).innerHeight() + parseInt($(this).css("marginTop"));
    $(this).parent('.service-item__content').css('transform', `translateY(${shift}px)`);
  });
}
