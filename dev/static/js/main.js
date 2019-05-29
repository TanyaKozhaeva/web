;
$('.js-slider').slick({
  infinite: true,
  dots: true,
  appendArrows: $('.custom-slide-arrows'),
  prevArrow: '<button id="prev" type="button" class="custom-slide-arrows__btn"><svg class="icon icon-arrow custom-slide-arrows__icon" aria-hidden="true"><use xlink:href="static/svg/symbol/sprite.svg#arrow"></use></svg></button>',
  nextArrow: '<button id="next" type="button" class="custom-slide-arrows__btn"><svg class="icon icon-arrow custom-slide-arrows__icon" aria-hidden="true"><use xlink:href="static/svg/symbol/sprite.svg#arrow"></use></svg></button>'
});


function controlDropdown(){
  var mainNav = $('.mobile-nav-panel'),
      subnav = $('.nav-main__subnav'),
      categories = $('.nav-main__subCategories'),
      backBtn = $('.nav-back-btn');
  $('#navCloseBtn').click(function() {
    $(mainNav).removeClass('mobile-nav-panel_open')
  });

  $(subnav).parent('.nav-main__item').click(function() {
    $(this).children('.nav-main__subnav').addClass('subnav-open')
  });

  $(categories).parent('.nav-main__subnav-item').click(function() {
    $(this).children('.nav-main__subCategories').addClass('subnav-open')
  });

  $(backBtn).click(function(){

    var parent = $(this).closest('.subnav-open');
    event.stopPropagation();
    $(parent).removeClass('subnav-open');
  });
}

controlDropdown();
