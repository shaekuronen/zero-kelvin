;(function($) {

  // load html templates
  $('#style-guide-typography').load('templates/style_guide_typography.html');
  $('#style-guide-structure').load('templates/style_guide_structure.html');
  $('#style-guide-form-elements').load('templates/style_guide_form_elements.html');
  $('#style-guide-media').load('templates/style_guide_media.html');

  // detect final ajax event and then call functions which depend on templates being in dom
  $('#style-guide-templates-container').ajaxStop(function() {

    // MASONRY
    // if the screen size is between 650px and 999px
    if ( Modernizr.mq('only all and (min-width: 650px)') ) {

      // masonry
      var $container = $('#style-guide-templates-container');
      $container.imagesLoaded(function(){

        $container.masonry({
          columnWidth: 325,
          itemSelector: '.style-guide-column',
          gutterWidth: 0,
          isResizable: true
        });
      });
    }

    // // if the screen size is between 1000px and 1399px
    // if ( Modernizr.mq('only all and (min-width: 1000px) and (max-width: 1399px)') ) {

    //   // masonry
    //   var $container = $('#style-guide-templates-container');
    //   $container.imagesLoaded(function(){

    //     $container.masonry({
    //       columnWidth: 325,
    //       itemSelector: '.style-guide-column',
    //       gutterWidth: 0,
    //       isResizable: true
    //     });
    //   });
    // }

    // // if the screen size is greater than 1400px
    // if ( Modernizr.mq('only all and (min-width: 1400px)') ) {

    //   // masonry
    //   var $container = $('#style-guide-templates-container');
    //   $container.imagesLoaded(function(){

    //     $container.masonry({
    //       columnWidth: 350,
    //       itemSelector: '.style-guide-column',
    //       gutterWidth: 0,
    //       isResizable: true
    //     });
    //   });
    // }
    // END MASONRY

    // DISABLE INPUT TYPE AUTOFOCUS ON TOUCH DEVICES
    // detect touch screen
    if (Modernizr.touch) {
      $('input[autofocus]').blur();
    }
    // END DISABLE INPUT TYPE AUTOFOCUS ON TOUCH DEVICES

    // SCROLL TO AN HTML ELEMENT
    // set height of footer so that all elements can scroll to top of page
    // var window_height = $(window).height();
    // $('footer').css('height', window_height);

    
    $('.html-element-item').click(function(e) {

      var the_id = $(this).attr('id'),
          page_margin_top = $('.style-guide-container').css('margin-top'),
          page_margin_top = parseInt(page_margin_top);
          distance_to_element = $('#' + the_id + '-element').offset(),
          adjusted_distance_to_element = distance_to_element.top - page_margin_top + 10;
      
      $('html, body').animate({
        scrollTop: adjusted_distance_to_element
      }, 300);

      // close the details element in the header using jquery.details.js
      // http://akral.bitbucket.org/details-tag/
      $('#style-guide-details-html-elements').details('close');

    });
    // END SCROLL TO AN HTML ELEMENT

    // CANVAS
    if ( Modernizr.canvas ) {
      var canvas = document.getElementById('canvas'),
        // the canvas context
        ctx = canvas.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(0,100);
      ctx.lineTo(75,0);
      ctx.lineTo(150,100);
      ctx.closePath();
      ctx.fill();
    }
    // END CANVAS

    // CLOCK
    function startTime() {

      var today=new Date();
      var h=today.getHours();
      var m=today.getMinutes();
      var s=today.getSeconds();
      // add a zero in front of numbers<10
      m=checkTime(m);
      s=checkTime(s);
      document.getElementById('display-time').innerHTML=h+":"+m+":"+s;
      
      setTimeout(function() {
        startTime()
      },500);
    }

    function checkTime(i) {
      if (i<10) {
        i="0" + i;
      }
      return i;
    }

    startTime();
    // END CLOCK

    // SVG IMAGE SWAPPER
    // if svg is not supported serve a png instead
    if (!Modernizr.svg) {
      $('#svg-image').attr('src','images/impala.png');
      $('#figcaption').text('This is the figcaption that describes the image type as PNG');
    }
    // END SVG IMAGE SWAPPER

  });

  // switch reset to none
  $('#no-reset').on('click', function() {
    $('#css_reset').attr('href','');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch reset to eric meyers
  $('#meyers').on('click', function() {
    $('#css_reset').attr('href','css/resets/meyers.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch reset to html5 doctor
  $('#html5-doctor').on('click', function() {
    $('#css_reset').attr('href','css/resets/html5_doctor.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch reset to normalize
  $('#normalize').on('click', function() {
    $('#css_reset').attr('href','css/resets/normalize.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch reset to html5 boilerplate
  $('#h5bp').on('click', function() {
    $('#css_reset').attr('href','css/resets/h5bp.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch reset to twitter bootstrap
  $('#bootstrap').on('click', function() {
    $('#css_reset').attr('href','css/resets/bootstrap.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch to zero kelvin reset
  $('#zero-kelvin-reset').on('click', function() {
    $('#css_reset').attr('href','css/zero_kelvin/zero_kelvin_reset.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // switch to zero kelvin boilerplate
  $('#zero-kelvin-boilerplate').on('click', function() {
    $('#css_reset').attr('href','css/zero_kelvin/zero_kelvin_boilerplate.css');
    $('#style-guide-details-resets').details('close');
    $('#style-guide-templates-container').masonry({
      columnWidth: 325,
      itemSelector: '.style-guide-column',
      gutterWidth: 0,
      isResizable: true
    });
  });

  // FIXES IOS SAFARI RESIZE ON ORIENTAION CHANGE BUG
  // listen for a gesture does not trigger for touch events (one fingertip vs 2 or more fingertips for gesture)
  document.body.addEventListener("gesturestart", start_touch_event, false);
  // listen for orientation of device changing
  window.addEventListener("orientationchange", orientation_change, false);

  function orientation_change() {
    // the device orientation is portrait
    if (window.orientation == 0 || window.orientation == 180) {
      // sets maximum scale to 1 which locks down user resizing but also prevents resize bug on orientation change
      document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0");
    }        
        
    // the device orientation is landscape
    else if (window.orientation == -90 || window.orientation == 90) {
      // sets maximum scale to 1 which locks down user resizing but also prevents resize bug on orientation change
      document.getElementById("viewport").setAttribute("content", "width=device-height, initial-scale=1.0, maximum-scale=1.0");
    } else {
    }               
  } 

  function start_touch_event() {
    // removes maximum scale 1 to allow user resizing
    document.getElementById("viewport").setAttribute("content", "width=device-width, minimum-scale=0.25, maximum-scale=1.6");
  }
  // END FIXES IOS SAFARI RESIZE ON ORIENTAION CHANGE BUG
  
}(jQuery));