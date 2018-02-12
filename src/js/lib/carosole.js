/**
 * Note to the reader. There were many carosole library that's already available, but when bulding it commercially
 * not all the library would work. There are times we would need to build our own library. The project tries to 
 * exercise that scenario of given a need how can we create a library that can be used within various part of the
 * product.
 */

var carosole = {};

/**
 * Helper method that builds the carosole for a given wrapper element and list of images.
 * @param {*} wrapperDiv wrapper div within which all the items would be displayed in carosole look and feel 
 * @param {*} items list of images that will be cycled upon. The first item will be treated as a hero image
 */
carosole.buildCarosole = function (wrapperDiv, items) {
  var carosoleDiv = $j('<div>', { class: 'carosole' });
  var ul = $j('<ul>');
  carosoleDiv.append(ul);
  var isHero = true;

  // create the carosole div that contains all the items to be carosoled
  items.forEach(function (image, index) {
    if (index > 0) {
      isHero = false;
    }
    ul.append(carosole.buildCarosoleImageList(image, isHero));
  });

  // append the carosole div to the wrapper div
  wrapperDiv.append(carosoleDiv);

  // create leftArrow
  var leftArrowDiv = $j(('<div>'), { name: 'left', class: 'leftarrow hidden' });
  leftArrowDiv.on('click', this.animateCarosole);
  wrapperDiv.append(leftArrowDiv);

  // create rightArrow
  var rightArrowDiv = $j(('<div>'), { name: 'right', class: 'rightarrow hidden' });
  rightArrowDiv.on('click', this.animateCarosole);
  wrapperDiv.append(rightArrowDiv);
};

/**
 * Helper method that builds an image element to be added inside carosole 
 * @param {*} image - an image json object that contain a href property 
 */
carosole.buildCarosoleImageList = function (image, isHero) {
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
 * And based on if the carosole is started or stopped, it
 * re-adjusts the hero image to be at the top. 
 * 
 */
carosole.triggerToggleArrow = function () {
  var carosole = $j(this).closest('.carosole');
  if (carosole.siblings('.leftarrow').hasClass('hidden')) {
    carosole.siblings('.leftarrow').removeClass('hidden');
    carosole.siblings('.rightarrow').removeClass('hidden');
  } else {
    carosole.siblings('.leftarrow').addClass('hidden');
    carosole.siblings('.rightarrow').addClass('hidden');
    var carosoleItems = carosole.children('ul');
    var heroImage = carosoleItems.children('li[name=heroimage]').detach();
    carosoleItems.prepend(heroImage);
  }
}

/**
 * Function that animates carosole as the user clicks the next icon on the screen
 * 
 * Based on user action it either rotates the item in clockwise or anti-clockwise direction
 *  
 */
carosole.animateCarosole = function () {
  var arrow = $j(this);
  if (arrow.attr('name').toUpperCase() === 'LEFT') {
    carosole.rotateAntiClockwise($j(this).parent().find('.carosole'));
    // user clicked left arrow do something
  } else {
    // user clicked right arrow do something
    carosole.rotateClockwise($j(this).parent().find('.carosole'));
  }
}

/**
 * Given the carosole element rotates the item inside in clockwise direction
 * 
 * @param {*} carosole - carosole element that contains items embeded inside in it.
 */
carosole.rotateClockwise = function (carosole) {
  var carosoleList = carosole.find('ul');
  var firstElement = carosoleList.children().first().detach();
  carosoleList.append(firstElement);
}

/**
 * Given the carosole element rotates the item inside in anti-clockwise direction
 * 
 * @param {*} carosole - carosole element that contains items embeded inside in it.
 */
carosole.rotateAntiClockwise = function (carosole) {
  var carosoleList = carosole.find('ul');
  var lastElement = carosoleList.children().last().detach();
  carosoleList.prepend(lastElement);
}
