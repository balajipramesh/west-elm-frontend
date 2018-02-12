describe("productlist", function () {

  /**
   * Reset the body each time before the next test case is executed
   * 
   */
  beforeEach(function() {
    $j('#productListingContainerId').remove();
  });

  it("Test function - triggerToogleArrow() Enable", function () {
    var template = $j('<div>', { id: "productListingContainerId", class: "container" });
    $j('body').append(template);
    init();
    // On page reload the carousel are disabled
    var firstHeroImage = $j('li[name=heroimage]').first().find('img');
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(true);
    firstHeroImage.trigger('click');
    // After a particular product heroimage is clicked carousel buttons shows up
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(false);
    firstHeroImage.trigger('click');
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(true);
  });

  it("Test function - animateCarousel() both clockwise and antiClockwise", function () {
    var template = $j('<div>', { id: "productListingContainerId", class: "container" });
    $j('body').append(template);
    init();
    var firstHeroImage = $j('li[name=heroimage]').first().find('img');
    firstHeroImage.trigger('click');
    // trigger carousel animation. By clicking right arrow the first hero image will be pushed to last
    var rightCarouselBtn = $j('li[name=heroimage]').first().parent().parent().parent().find('div[name=right]');
    rightCarouselBtn.trigger('click');
    // now validate if the last element within the carousel is our heroimage
    var attrName = $j('.carousel').first().children().first().children().last().attr('name');
    expect(attrName).toEqual('heroimage');
    // trigger carousel animation. By clicking left arrow the first hero image will be pushed to first back again
    var rightCarouselBtn = $j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]');
    rightCarouselBtn.trigger('click');
    // now validate if the first element within the carousel is our heroimage
    attrName = $j('.carousel').first().children().first().children().first().attr('name');
    expect(attrName).toEqual('heroimage');
  });
});