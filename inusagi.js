$(document).ready(function() {
    // Mobile test
    var is_touch_device = 'ontouchstart' in document.documentElement;
    var boxapp = function() {
    var $subNav = $(".sub_panel"),
      $subItem = $("li[data-url]"),
      $header = $("#mast");
      $mNav = $(".mobile_navigation"),
      $burger = $(".burger"),
      clicktap = "touchend" in window ? "touchend" : "click",
      out = false,
      $menu = $(".main_navigation > ul"),
    // Add event handlers
    addHandlers = function() {
      $burger.on(clicktap, mobileNav);
      $(window).resize(menuReset);
    },
    // Reset menu on resize
    menuReset = function() {
      if ($(window).width() > 1024) {
        $mNav.removeAttr("style");
        $burger.removeClass("burger-toggle");
      }
    },
    // Mobile nav show/hide
    mobileNav = function(e) {
      $burger.toggleClass("burger-toggle");
      $mNav.stop().slideToggle();
    },
    activateSubmenu = function(row) {
        var $row = $(row),
            data = $row.data("url");
            $submenu = $("nav[data-url='" + data + "']")
            .show()
            .stop()
            .css("z-index", 200)
            .animate({
              "left": "280px"
            }, 250, "easeOutQuad");
    },
    deactivateSubmenu = function(row) {
        var $row = $(row),
            data = $row.data("url"),
            $nav = $("nav[data-url='" + data + "']");
        animateOut($nav)
    },
    animateOut = function($nav) {
        $nav.stop()
            .css("z-index", 199)
            .animate({
              "left": "0px"
            }, 250, "easeInQuad", function() {
                $(this).hide();
                });
    },
    touchTest = function() {
        is_touch_device ? $("body").addClass("touch") : $("body").addClass("no-touch");
    },
    init = function() {
      addHandlers();
      touchTest();
    };
    $menu.menuAim({
        activate: activateSubmenu,
        deactivate: deactivateSubmenu,
        tolerance: 400,
        submenuElement: $subNav,
        submenuAnimationOut: animateOut,
        exitOnMouseOut: false
    });
    return {
      init: init,
    }
  }();
  // Charge!
  boxapp.init();
  $('.product_list').not(".related_list").imagesLoaded(function() {
    var list = this,
      rearrange = function() {
        list.masonry({
          itemSelector: '.column',
          isFitWidth: true
        });
        list.css({'opacity': 1})
      };
    rearrange();
    $(window).resize(rearrange);
  });
});
$(window).load(function(){
  // Init Flexslider
    $('.flexslider').flexslider({
    "animation": "slide",
    "controlNav": false
  });
});
