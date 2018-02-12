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
    // On page reload the carosole are disabled
    var firstHeroImage = $j('li[name=heroimage]').first().find('img');
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(true);
    firstHeroImage.trigger('click');
    // After a particular product heroimage is clicked carosole buttons shows up
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(false);
    firstHeroImage.trigger('click');
    expect($j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]').hasClass('hidden')).toBe(true);
  });

  it("Test function - animateCarosole() both clockwise and antiClockwise", function () {
    var template = $j('<div>', { id: "productListingContainerId", class: "container" });
    $j('body').append(template);
    init();
    var firstHeroImage = $j('li[name=heroimage]').first().find('img');
    firstHeroImage.trigger('click');
    // trigger carosole animation. By clicking right arrow the first hero image will be pushed to last
    var rightCarosoleBtn = $j('li[name=heroimage]').first().parent().parent().parent().find('div[name=right]');
    rightCarosoleBtn.trigger('click');
    // now validate if the last element within the carosole is our heroimage
    var attrName = $j('.carosole').first().children().first().children().last().attr('name');
    expect(attrName).toEqual('heroimage');
    // trigger carosole animation. By clicking left arrow the first hero image will be pushed to first back again
    var rightCarosoleBtn = $j('li[name=heroimage]').first().parent().parent().parent().find('div[name=left]');
    rightCarosoleBtn.trigger('click');
    // now validate if the first element within the carosole is our heroimage
    attrName = $j('.carosole').first().children().first().children().first().attr('name');
    expect(attrName).toEqual('heroimage');
  });
});