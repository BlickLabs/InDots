(function () {
  var modal = null,
    carousel = null;

  function getItemHTML(itemData, formInfo) {
    var htmlCode = '<div class="item">'
    + '<div class="flash-indots-modal-item-photo cover" style="background-image: ' + itemData.cover + '"></div>'
    + '<div class="flash-indots-modal-item-data">'
    + '<h3 class="flash-indots-modal-item-title flash-indots-icon-title">' + itemData.title + '</h3>'
    + '<div class="flash-indots-modal-item-description">' + itemData.description + '</div>'
    + '<div class="flash-indots-modal-item-info">'
    + '<div><span class="flash-indots-green-text">Formato</span>' + itemData.format + '</div>'
    + '<div><span class="flash-indots-green-text">Duración</span>' + itemData.duration + '</div>'
    + '<div><span class="flash-indots-green-text">Tiempo</span>' + itemData.lessonDuration + '</div>'
    + '<div><span class="flash-indots-green-text">Precio</span>' + itemData.price + '</div>'
    + '</div>'
    + '<form "' + itemData.index + '" class="flash-indots-modal-form" action="' + formInfo.sendTo + '" accept-charset="utf-8" method="post">'
    + '<div class="inputs-div">'
    + '<input type="hidden" name="' + formInfo.campaignName + '" value="' + itemData.campaignToken + '">'
    + '<input type="hidden" name="' + formInfo.thankName + '" value="' + itemData.thankUrl + '">'
    + '<input type="hidden" name="' + formInfo.fowardName + '" value="' + itemData.fowardData + '">'
    + '<div class="input-wrapper">'
    + '<input class="contact-input" type="text" id="name-flash-indots_' + itemData.index + '" name="' + formInfo.textName + '" placeholder="Nombre">'
    + '</div>'
    + '<div class="input-wrapper">'
    + '<input class="contact-input" type="email" id="email-flash-indots_' + itemData.index + '" name="' + formInfo.emailName + '" placeholder="Correo electrónico">'
    + '</div>'
    + '<div class="form-message"></div>'
    + '</div>'
    + '<div class="button-wrapper">'
    + '<button class="indots-button green" type="submit">Inscribirme</button>'
    + '<div class="loader indots-loader vertical-center">'
    + '<div class="ball-pulse-sync">'
    + '<div class="blue"></div>'
    + '<div class="blue"></div>'
    + '<div class="blue"></div>'
    + '</div>'
    + '</div>'
    + '</div>'
    + '</form>'
    + '</div>'
    + '</div>';
    return htmlCode;
  }

  function forEachItem(index) {
    var itemData = {
        cover: $(this).find('.flash-indots-item-photo').css('background-image').replace('\"', '\''),
        title: $(this).find('.flash-indots-item-name span').text(),
        description: $(this).attr('data-item-description'),
        format: $(this).attr('data-item-format'),
        duration: $(this).attr('data-item-duration'),
        lessonDuration: $(this).attr('data-item-lesson-duration'),
        price: $(this).attr('data-item-price'),
        index: index,
        campaignToken: $(this).attr('data-item-campaign-token'),
        thankUrl: $(this).attr('data-item-thank-url'),
        fowardData: $(this).attr('data-item-foward-data')
      },
      formInfo = {
        sendTo: 'https://app.getresponse.com/add_subscriber.html',
        textName: 'first_name',
        emailName: 'email',
        campaignName: 'campaign_token',
        thankName: 'thankyou_url',
        fowardName: 'forward_data'
      },
      validationRules = {};
    validationRules[formInfo.emailName] = {
      required: true,
      email: true
    };
    validationRules[formInfo.hidenName] = {
      required: true
    };
    validationRules[formInfo.textName] = {
      required: true
    };
    carousel.append(getItemHTML(itemData, formInfo));
    carousel.find('#flash-indots-modal-form_' + index + '').validate({
      rules: validationRules
    });
  }

  function createCarousel() {
    carousel.slick({
      prevArrow: '<span class="slick-prev circle fa fa-angle-left"></span>',
      nextArrow: '<span class="slick-next circle fa fa-angle-right"></span>'
    });
  }

  function carouselCallback() {
    modal.open();
    carousel.off('afterChange.slick', carouselCallback);
    carousel.resize();
  }

  function createModal() {
    var modalHTML = '<div class="remodal" data-remodal-id="flash-indots-modal">'
      + '<div class="flash-indots-modal-header">'
      + '<h2 class="flash-indots-modal-title flash-indots-icon-title">Flash InDots</h2>'
      + '<button data-remodal-action="close" class="remodal-close"></button>'
      + '</div>'
      + '<div class="flash-indots-modal-body">'
      + '<div class="flash-indots-carousel">'
      + '</div>'
      + '</div>'
      + '</div>';
    $('main').append(modalHTML);
    modal = $('[data-remodal-id="flash-indots-modal"]').remodal();
    carousel = $('[data-remodal-id="flash-indots-modal"] .flash-indots-carousel');
    $('.flash-indots-items .flash-indots-item').each(forEachItem);
    createCarousel();

    carousel.on('afterChange.slick', carouselCallback);
    $(document).on('opened', '[data-remodal-id="flash-indots-modal"]', function () {
      carousel.slick('setPosition');
    });
  }

  function onClick() {
    carousel.on('afterChange.slick', carouselCallback);
    carousel.slick('slickGoTo', $(this).index());
  }

  if ($('.flash-indots-items').length) {
    createModal();
    $('.flash-indots-items').on('click', '.flash-indots-item', onClick);
  }
})();
