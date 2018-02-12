/**
 * Note to the reader. There were many carousel library that's already available, but when bulding it commercially
 * not all the library would work. There are times we would need to build our own library. The project tries to 
 * exercise that scenario of given a need how can we create a library that can be used within various part of the
 * product.
 * 
 * One of the requirement was to have the carousle displayed on a overlay. Based on the planning capacity of the sprint
 * we have to take it as an user improvement story.
 * 
 */

var carousel = {};

/**
 * Helper method that builds the carousel for a given wrapper element and list of images.
 * @param {*} wrapperDiv wrapper div within which all the items would be displayed in carousel look and feel 
 * @param {*} items list of images that will be cycled upon. The first item will be treated as a hero image
 */
carousel.buildCarousel = function (wrapperDiv, items) {
  var carouselDiv = $j('<div>', { class: 'carousel' });
  var ul = $j('<ul>');
  carouselDiv.append(ul);
  var isHero = true;

  // create the carousel div that contains all the items to be carouseld
  items.forEach(function (image, index) {
    if (index > 0) {
      isHero = false;
    }
    ul.append(carousel.buildCarouselImageList(image, isHero));
  });

  // append the carousel div to the wrapper div
  wrapperDiv.append(carouselDiv);

  // create leftArrow
  var leftArrowDiv = $j(('<div>'), { name: 'left', class: 'leftarrow hidden' });
  leftArrowDiv.on('click', this.animateCarousel);
  wrapperDiv.append(leftArrowDiv);

  // create rightArrow
  var rightArrowDiv = $j(('<div>'), { name: 'right', class: 'rightarrow hidden' });
  rightArrowDiv.on('click', this.animateCarousel);
  wrapperDiv.append(rightArrowDiv);
};

/**
 * Helper method that builds an image element to be added inside carousel 
 * @param {*} image - an image json object that contain a href property 
 */
carousel.buildCarouselImageList = function (image, isHero) {
  var li = $j('<li>');
  if (isHero) {
    li.attr('name', 'heroimage');
  }
  var img = $j('<img>', { src: image.href });
  img.on('click', this.triggerToggleArrow);
  return li.append(img);
}

/**
 * Function that toggles to display left and right arrow.
 * And based on if the carousel is started or stopped, it
 * re-adjusts the hero image to be at the top. 
 * 
 */
carousel.triggerToggleArrow = function () {
  var carousel = $j(this).closest('.carousel');
  if (carousel.siblings('.leftarrow').hasClass('hidden')) {
    carousel.siblings('.leftarrow').removeClass('hidden');
    carousel.siblings('.rightarrow').removeClass('hidden');
  } else {
    carousel.siblings('.leftarrow').addClass('hidden');
    carousel.siblings('.rightarrow').addClass('hidden');
    var carouselItems = carousel.children('ul');
    var heroImage = carouselItems.children('li[name=heroimage]').detach();
    carouselItems.prepend(heroImage);
  }
}

/**
 * Function that animates carousel as the user clicks the next icon on the screen
 * 
 * Based on user action it either rotates the item in clockwise or anti-clockwise direction
 *  
 */
carousel.animateCarousel = function () {
  var arrow = $j(this);
  if (arrow.attr('name').toUpperCase() === 'LEFT') {
    carousel.rotateAntiClockwise($j(this).parent().find('.carousel'));
    // user clicked left arrow do something
  } else {
    // user clicked right arrow do something
    carousel.rotateClockwise($j(this).parent().find('.carousel'));
  }
}

/**
 * Given the carousel element rotates the item inside in clockwise direction
 * 
 * @param {*} carousel - carousel element that contains items embeded inside in it.
 */
carousel.rotateClockwise = function (carousel) {
  var carouselList = carousel.find('ul');
  var firstElement = carouselList.children().first().detach();
  carouselList.append(firstElement);
}

/**
 * Given the carousel element rotates the item inside in anti-clockwise direction
 * 
 * @param {*} carousel - carousel element that contains items embeded inside in it.
 */
carousel.rotateAntiClockwise = function (carousel) {
  var carouselList = carousel.find('ul');
  var lastElement = carouselList.children().last().detach();
  carouselList.prepend(lastElement);
}
