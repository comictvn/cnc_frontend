'use strict';
$(document).ready(function() {
  
    /*=====================
   Home page Animation
  =====================*/
  var startButton = {

        container: "#start-button",
        isPulsing: false,
        init: function(){
            var _self = this;

            var initialMargin = $(_self.container).find('img').css('margin-top');
            $(_self.container).on('mouseenter', function(){
                $(this).find('img').stop(true,true).animate({
                    'margin-top': '0',
                    'opacity'   : '1'
                }, function(){
                    _self.pulse();
                });
            });
            $(_self.container).on('mouseleave', function(){
                $(this).find('img').stop(true,true).animate({
                    'margin-top': initialMargin,
                    'opacity'   : '0'
                });
                $(_self.container).find('.glow').stop(true,true).hide();
                clearTimeout(_self.isPulsing);
            });
            $(_self.container).on('click', function(e){
                e.preventDefault();
                $.scrollTo('#services', 1000, { offset : {left: 0, top: -62 } });
            });
        },
        pulse: function(){
            var _self = this;
            _self.isPulsing = setTimeout(function(){
                $(_self.container).find('.glow').fadeIn(600, function(){
                    $(this).fadeOut(600);
                });
                _self.pulse();
            });
        }
  }

  /*=====================
  AMINATION LINE
  =====================*/
  var animateLine = {
    line: ".line",
    init: function() {
      var _self = this;
      var line1 = $(_self.line + " .line1").animate({width:"693px"}, 3000, function() {
        _self.line2();
      });
    },
    line2: function() {
      var _self = this;
      var line2 = $(_self.line + " .line2").animate({width: "345px"}, 800, function() {
        _self.line3();
      });
    },
    line3: function() {
      var _self = this;
      var line3 = $(_self.line + " .line3").animate({height: "138px"}, 700, function() {
        _self.line4();
      });
    },
    line4: function() {
      var _self = this;
      var line4 = $(_self.line + " .line4").animate({width: "55px"}, 600, function() {
        _self.line5();
      });
    },
    line5: function() {
      var _self = this;
      var line5 = $(_self.line + " .line5").animate({width: "407px"}, 500, function() {
        _self.line6();
      });
    },
    line6: function() {
      var _self = this;
      var line6 = $(_self.line + " .line6").animate({height: "135px"}, 400, function() {
        _self.line7();
      });
    },
    line7: function() {
      var _self = this;
      var line7 = $(_self.line + " .line7").animate({width: "110px"}, 300, function() {
        _self.line8();
      });
    },
    line8: function() {
      var _self = this;
      var line8 = $(_self.line + " .line8").animate({width: "396px"}, 200, function() {
        _self.img();
      });
    },
    img: function() {
      var img = $("img.icon_mac").fadeIn(1000);
    }
  }


  /*=====================
   SCROLL MOUSE BLOG
  =====================*/
  var isAnimating = false;
  var start = 0;
  var scrollMouse = {
    stripe: ".stripe-container",
    init: function() {

      var _self = this;
      var scrollBody = _self.stripe;
      var isAnimating = _self.isAnimating;
      $(scrollBody).bind('mousewheel', function(event, delta, deltaX, deltaY){
  
          if (deltaY < 0) {
            _self.down();
          } else {
            _self.up();
            
          }

      });

    },
    down: function() {
        var _self = this;
        if(isAnimating) return;
        isAnimating = true;
        var scrollBody = _self.stripe;
        start = start - 273;
        $(scrollBody).animate({'margin-left':+start}, 500, function() {
            isAnimating = false;
            
        });
    },
    up: function() {
        var _self = this;
        if (start != 0) {
          if(isAnimating) return;
          isAnimating = true;
          start = start + 273;
          var scrollBody = _self.stripe;
          $(scrollBody).animate({'margin-left':+start}, 500, function() {
              isAnimating = false;
          });
        };
          
    },
  }

  /*=====================
   SCROLL MOUSE DEMO
  =====================*/
  var isAnimating_1 = false;
  var start_1 = 0;
  var scrollMouse_1 = {
    stripe: ".slide_controller",
    init: function() {
      var _self = this;
      var scrollBody = _self.stripe;
      var isAnimating_1 = _self.isAnimating_1;
      $(scrollBody).bind('mousewheel', function(event, delta, deltaX, deltaY){
          if (deltaY < 0) {
            _self.down();

          } else {
            _self.up();
          }

      });

    },
    down: function() {
        var _self = this;
        if(isAnimating_1) return;
        isAnimating_1 = true;
        
        var scrollBody = _self.stripe;
        start_1 = start_1 - 327;
        $(scrollBody).animate({'margin-left':+start_1}, 500, function() {
            isAnimating_1 = false;
            
        });
    },
    up: function() {
        var _self = this;
        if (start_1 != 0) {
          if(isAnimating_1) return;
          isAnimating_1 = true;
          start_1 = start_1 + 327;
          var scrollBody = _self.stripe;
          $(scrollBody).animate({'margin-left':+start_1}, 500, function() {
              isAnimating_1 = false;
          });
        };
          
    },
  }

  /*=====================
   SCROLL MOUSE CUSTOMER
  =====================*/
  var isAnimating_cus = false;
  var start_cus = 0;
  var scrollMouse_cus = {
    stripe: ".row_container",
    init: function() {
      var _self = this;
      var scrollBody = _self.stripe;
      var isAnimating_cus = _self.isAnimating_cus;
      $(scrollBody).bind('mousewheel', function(event, delta, deltaX, deltaY){
          if (deltaY < 0) {
            _self.down();

          } else {
            _self.up();
          }

      });

    },
    down: function() {
        var _self = this;
        if(isAnimating_cus) return;
        isAnimating_cus = true;
        
        var scrollBody = _self.stripe;
        start_cus = start_cus - 327;
        $(scrollBody).animate({'margin-left':+start_cus}, 500, function() {
            isAnimating_cus = false;
            
        });
    },
    up: function() {
        var _self = this;
        if (start_cus != 0) {
          if(isAnimating_cus) return;
          isAnimating_cus = true;
          start_cus = start_cus + 327;
          var scrollBody = _self.stripe;
          $(scrollBody).animate({'margin-left':+start_cus}, 500, function() {
              isAnimating_cus = false;
          });
        };
          
    },
  }
  /*=====================
   OPEN MAP
  =====================*/
  var openmap = {
    init: function() {
      $('.open-map').click(function() {
        $('.page-contact .contact').slideToggle('slow');
        $('.open-map span').toggle();
      })
    }
  }
  /*=====================
   INITS
  =====================*/
    startButton.init();
    animateLine.init();
    scrollMouse.init();
    scrollMouse_1.init();
    scrollMouse_cus.init();
    openmap.init();

})