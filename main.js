var btnSelectTrigger = $(".btn-select-trigger");
btnSelectTrigger.on("click", function() {
  var total,
    prices = [],
    ids = [];
  $(this).toggleClass("active");

  btnSelectTrigger.each(function(i, e) {
    if ($(e).hasClass("active")) {
      prices.push(
        +$(e)
          .parent()
          .siblings(".product-price-block")
          .find("span")
          .text()
          .trim()
      );
      ids.push($(e).data("id"));
    }

    if (prices.length > 0) {
      total = Math.floor(prices.reduce(getSum) * 100) / 100;
      $("#total-price-counter").text("$" + total);
    } else {
      $("#total-price-counter").text("$0");
    }

    if (ids.length > 0) {
      $("#selected-prod-ids span").text(ids.reduce(getIds));
    } else {
      $("#selected-prod-ids span").text("");
    }
  });
});

function getSum(total, num) {
  return total + num;
}

function getIds(total, id) {
  return total + "," + id;
}
