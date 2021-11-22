


$(function () {
   


    ///scrollbar animate start
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > $(".frame1").width() / 2 ) {
            $('.frame1').addClass('active');
        } else {
            $('.frame1').removeClass('active');
        }

        if (scrollTop > $(".frame2").width() * 1.5 ) {
            $('.frame2').addClass('active');
        } else {
            $('.frame2').removeClass('active');
        }

        if (scrollTop > $(".frame3").width() * 3 ) {
            $('.frame3').addClass('active');
        } else {
            $('.frame3').removeClass('active');
        }

        if (scrollTop > $(".frame4").width() * 4 ) {
            $('.frame4').addClass('active');
        } else {
            $('.frame4').removeClass('active');
        }


       


    }); 
   ///scrollbar animate end



	 setTimeout(function(){
		 $('.video-load-img').fadeOut();
	 }, 3500);
	
    


     var isMobile = false; //initiate as false
     // device detection
     if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
         || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
            $('.contact').click(function(){
                $(".horizontal-scroll-section").animate({scrollTop:$('.horizontal-scroll-section').height() + 1200}, 500, 'swing', function() { 
                });
            });
     }

     else{

        
        //$("body").niceScroll({
        //    cursorcolor: "#2ecc71",
        //    cursorwidth: "12px",
        //    scrollspeed: 70,
        //    mousescrollstep: 110,
        //    smoothscroll: true
        //});


        // Define window variables

        var winScrollTop = $(window).scrollTop();
        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;

        // Define scene classes.
        var sceneClass = 'scene';
        var sceneActiveClass = sceneClass + '--active';
        var sceneEndedClass = sceneClass + '--ended';

        $(window).on('resize', function () {
            winHeight = window.innerHeight;
            winWidth = window.innerWidth;
        });

        // Scene classes function.
        function setScene($el) {

            // Get bounding values from section.
            var bounding = $el.data('elDom').getBoundingClientRect();

            if (bounding.top > winHeight) {
                $('.frame1').css('border', '1px solid red');
                // Section is below the viewport.
                // Section has not ended or started, therefore remove classes.
                $el.find('.scene').removeClass(sceneActiveClass);
                $el.find('.scene').removeClass(sceneEndedClass);

            } else if (bounding.bottom < 0) {
                setTimeout(function(){
                    $('.frame1').css('border', '1px solid blue');
                },1200);
                // Section is above the viewport.
                // Section has ended, therefore remove classes.
                $el.find('.scene').addClass(sceneEndedClass);
                $el.find('.scene').removeClass(sceneActiveClass);

            } else {

                // We're now inside the section, not below or above.
                // If top of section is at top of viewport, add class active.
                if (bounding.top <= 0) {
                    $el.find('.scene').addClass(sceneActiveClass);
                }

                // If top of section is below top of viewport, remove class active.
                if (bounding.top > 0) {
                    
                    $el.find('.scene').removeClass(sceneActiveClass);
                }

                // If bottom of section is at bottom of viewport, add class ended.
                if (bounding.bottom <= (winHeight)) {
                    $el.find('.scene').addClass(sceneEndedClass);
                }

                // If bottom of section is not at bottom of viewport, remove class ended.
                if (bounding.bottom > (winHeight)) {
                    $el.find('.scene').removeClass(sceneEndedClass);
                }
            }
        }

        // This function sets up the horizontal scroll. This applies data attributes to the section for later use.
        function setUpHorizontalScroll($el) {

            var sectionClass = $el.attr('class');

            // Set content wrapper variables & data attributes.
            var $contentWrapper = $el.find('.' + sectionClass + '__content-wrapper');
            var contentWrapperDom = $contentWrapper.get(0);
            $el.data('contentWrapper', $contentWrapper);
            $el.data('contentWrapperDom', contentWrapperDom);

            // Set content wrapper scroll width variables & data attributes.
            var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
            $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);

            // Set right max variables & data attributes.
            var rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
            var rightMaxMinus = -(rightMax);
            $el.data('rightMax', Number(rightMaxMinus));

            // Set initialized data variable to false do incidate scrolling functionality doesn't work yet.
            $el.data('initalized', false);

            // Set height of section to the scroll width of content wrapper.
            $el.css('height', $el.data('contentWrapperScrollWidth'));

            // Set data attribute for outerHeight.
            $el.data('outerHeight', $el.outerHeight());

            // Set data attribute for offset top.
            $el.data('offsetTop', $el.offset().top);

            // Set data initialized data variable to true to indicate ready for functionality.
            $el.data('initalized', true);

            // Set data variable for transform X (0 by default)
            $el.data('transformX', '0');

            // Add class of init
            $el.addClass($el.attr('class') + '--init');
        }

        function resetHorizontalScroll($el) {


            // Update data attribute for content wrapper scroll width.

            var contentWrapperScrollWidth = $el.data('contentWrapperDom').scrollWidth;
            $el.data('contentWrapperScrollWidth', contentWrapperScrollWidth);


            // Update rightMax variables & data attributes.
            rightMax = $el.data('contentWrapperScrollWidth') - winWidth;
            rightMaxMinus = -(rightMax);
            $el.data('rightMax', Number(rightMaxMinus));

            // Update height of section to the scroll width of content wrapper.
            $el.css('height', $el.data('contentWrapperScrollWidth'));

            // Update data attribute for outerHeight.
            $el.data('outerHeight', $el.outerHeight());

            // Update data attribute for offset top.
            $el.data('offsetTop', $el.offset().top);

            // If transform is smaller than rightmax, make it rightmax.
            if ($el.data('transformX') <= $el.data('rightMax')) {
                $el.data('contentWrapper').css({
                    'transform': 'translate3d(' + $el.data('rightMax') + 'px, 0, 0)',
                });
            }
        }

        var $horizontalScrollSections = $('.horizontal-scroll-section');
        var $horizontalScrollSectionsTriggers = $horizontalScrollSections.find('.trigger');

        // Each function - set variables ready for scrolling functionality. Call horizontal scroll functions on load and resize.
        $horizontalScrollSections.each(function (i, el) {

            var $thisSection = $(this);

            $(this).data('elDom', $(this).get(0));

            // Set up horizontal scrolling data attributes and show section all have been computed.
            setUpHorizontalScroll($(this));

            // Now we're ready, call setScene on load that adds classes based on scroll position.
            setScene($(this));

            // Resize function
            $(window).on('resize', function () {
                // Reset horizontal scrolling data attributes and transform content wrapper if transform is bigger than scroll width.
                resetHorizontalScroll($thisSection);
                // Reset scene positioning.
                setScene($thisSection);
            });

        });

        function setupHorizontalTriggers($el, section) {
            var parent = $el.parent();
            var positionLeft = parent.position().left;
            var positionLeftMinus = -(positionLeft);
            var triggerOffset = $el.data('triggerOffset');
            triggerOffset = !triggerOffset ? 0.5 : triggerOffset = triggerOffset;
            $el.data('triggerOffset', triggerOffset);
            $el.data('triggerPositionLeft', positionLeftMinus);
            $el.data('triggerSection', section);
        }

        function useHorizontalTriggers($el) {
            if ($el.data('triggerSection').data('transformX') <= ($el.data('triggerPositionLeft') * $el.data('triggerOffset'))) {
                $el.data('triggerSection').addClass($el.data('class'));
            } else {
                if ($el.data('remove-class') !== false) {
                    $el.data('triggerSection').removeClass($el.data('class'));
                }
            }
        }

        $horizontalScrollSectionsTriggers.each(function (i, el) {
            setupHorizontalTriggers($(this), $(this).closest('.horizontal-scroll-section'));
        });

        function transformBasedOnScrollHorizontalScroll($el) {
            
            // Get amount scrolled variables.
            var amountScrolledContainer = winScrollTop - $el.data('offsetTop');
            var amountScrolledThrough = (amountScrolledContainer / ($el.data('outerHeight') - (winHeight - winWidth)));

            // Add transform value variable based on amount scrolled through multiplied by scroll width of content.
            var toTransform = (amountScrolledThrough * $el.data('contentWrapperScrollWidth'));

            // Add transform value for minus (as we're transforming opposite direction).
            var toTransformMinus = -(toTransform);

            // If transform value is bigger or equal than 0, set value to 0.
            toTransformMinus = Math.min(0, toTransformMinus);

            // If transform value is smaller or equal than rightMax, set value to rightMax.
            toTransformMinus = Math.max(toTransformMinus, $el.data('rightMax'));

            // Update transformX data variable for section.
            $el.data('transformX', Number(toTransformMinus));

            // If section has been initalized, apply transform.
            if ($el.data('initalized') == true) {
                $el.data('contentWrapper').css({
                    'transform': 'translate3d(' + $el.data('transformX') + 'px, 0, 0)'
                });
            }
        }

        //
        $(window).on('scroll', function () {

            // Get window scroll top.
            winScrollTop = $(window).scrollTop();

            // Each function in horizontal scroll sections.
            $horizontalScrollSections.each(function (i, el) {
                transformBasedOnScrollHorizontalScroll($(this));
                setScene($(this));
            });

            // Each function for horizontal scroll section triggers.
            $horizontalScrollSectionsTriggers.each(function (i, el) {
                useHorizontalTriggers($(this));
            });

        });


        $('.contact').click(function(){
            var length  = $('.horizontal-scroll-section__content-section');
            var w  = $('.horizontal-scroll-section__content-section').width();
            $(window).scrollTop(46000);
        });



     }
     
 
     
     
     new WOW().init();


    if ($(window).width() > 640) {
       


    }

    $('.loading').fadeOut(800);

    });

 