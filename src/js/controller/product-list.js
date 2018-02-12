var $j = jQuery.noConflict();

/**
 * Initializer of the view controller 
 * Builds the template product listing html content
 */
function init() {
  // Get an instance of carousel library
  var carousel = this.carousel;

  var productContainerDiv = $j('#productListingContainerId');

  // Parse model object
  var productConditions = $j.parseJSON(productConditionModel);
  if (productConditions.hasOwnProperty('groups')) {
    productConditions.groups.forEach(function (product) {
      var productDiv = $j('<div>', { id: product.id, class: 'product' });

      // build carousel into productDiv wrapper element
      product.images.splice(0, 0, product.hero);
      carousel.buildCarousel(productDiv, product.images);

      // add a description to the product listing
      productDiv.append($j('<p>', { text: product.name, class: 'description' }));

      // get price for thee product listing
      var price = getPrice(product);
      productDiv.append($j('<p>', { text: price, class: 'price' }));

      // build add to cart for this product listing
      var productDetail = $j('<a>', { href: product.links.www, text: 'Product Detail', class: 'btn' });
      productDiv.append(productDetail);
      productContainerDiv.append(productDiv);
    });
  }
}

/**
 * Given a product object get the price to be displayed upon
 * 
 * @param {*} product object that contains price of the product
 * @returns cost of the product
 * 
 */
function getPrice(product) {
  if (product.hasOwnProperty('priceRange')) {
    if (product.priceRange.hasOwnProperty('selling')) {
      return getPriceFromSelling(product.priceRange.selling);
    }
  } else if (product.hasOwnProperty('price')) {
    if (product.price.hasOwnProperty('selling')) {
      return getPriceFromSelling(product.price.selling);
    }
  }
  return '';
}

/**
 * Supporting function for the getPrice()
 * 
 * Note: It is esential that the back and front end service decide on the standard
 * of how the data needs to be exchanged. Without that it leads to data invalidation
 * and essentially might lead to security issues. 
 * 
 * @param {*} selling object that contains price
 * @returns cost of the product 
 *  
 */
function getPriceFromSelling(selling) {
  var sellingPrice = '$';
  if (selling.hasOwnProperty('low')) {
    sellingPrice += selling.low;
  }
  if (selling.hasOwnProperty('high')) {
    sellingPrice += ' - $' + selling.high;
  }
  else {
    sellingPrice += selling;
  }
  return sellingPrice;
}
