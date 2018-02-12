describe("productlist", function () {

  /**
   * Reset the body each time before the next test case is executed
   * 
   */
  beforeEach(function() {
    $j('#productListingContainerId').remove();
  });

  it("Test function - getPrice()", function () {
    // Invoke the unit being tested as necessary
    var json = {
      "priceRange": {
        "selling": {
          "high": 159,
          "low": 34
        }
      }
    };
    var price = getPrice(json);
    expect(price).toEqual("$34 - $159");

    json = {
      "price": {
        "selling": {
          "high": 159,
          "low": 34
        }
      }
    };
    var price = getPrice(json);
    expect(price).toEqual("$34 - $159");

    json = {
      "priceRange": {
        "selling": 34
      }
    };
    var price = getPrice(json);
    expect(price).toEqual("$34");

    var json = {
      "price": {
        "selling": 34
      }
    };
    var price = getPrice(json);
    expect(price).toEqual("$34");
  });

  it("Test function - init()", function () {
    var template = $j('<div>', { id: "productListingContainerId", class: "container" });
    $j('body').append(template);
    init();
    var length = $j('.carousel').length;
    expect(length).toBe(24);
  });
});
