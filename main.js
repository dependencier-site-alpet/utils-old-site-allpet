
  RevSlide.initRevolutionSlider();

  $(window).load(function() {
    $('[data-zlname = reverse-effect]').mateHover({
      position: 'y-reverse',
      overlayStyle: 'rolling',
      overlayBg: '#fff',
      overlayOpacity: 0.7,
      overlayEasing: 'easeOutCirc',
      rollingPosition: 'top',
      popupEasing: 'easeOutBack',
      popup2Easing: 'easeOutBack'
    });
  });

  $(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      start: function(slider) {
        $('body').removeClass('loading');
      }
    });
  });

  //    fancybox
  jQuery(".fancybox").fancybox();


  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });


    $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });


    $('#numeros i').appear();

    var exibeBool = true;

    $(document.body).on('appear', '#numeros i', function(e, $affected) {

      if (exibeBool)
      {
        jQuery({ Counter: 0 }).animate({ Counter: $('.petshops').text() }, {
          duration: 5000,
          step: function () {
            $('.petshops').text(Math.ceil(this.Counter));
          }
        });

        jQuery({ Counter: 0 }).animate({ Counter: $('.hospitais').text() }, {
          duration: 5000,
          step: function () {
            $('.hospitais').text(Math.ceil(this.Counter));
          }
        });

        jQuery({ Counter: 0 }).animate({ Counter: $('.hospedagens').text() }, {
          duration: 5000,
          step: function () {
            $('.hospedagens').text(Math.ceil(this.Counter));
          }
        });

        jQuery({ Counter: 0 }).animate({ Counter: $('.modapet').text() }, {
          duration: 5000,
          step: function () {
            $('.modapet').text(Math.ceil(this.Counter));
          }
        });
      }

      exibeBool = false;

    });

    $("#btnEnviaContato" ).click(function() {
      $.ajax({
        url: '/email/envia_contato',
        dataType: 'json',
        type: 'GET',
        data: {
          nome: $("#name" ).val(),
          email: $("#email" ).val(),
          descricao: $("#descricao" ).val()
        },
        success: function(data) {

        },
        failure: function(data) {

        }
      });
    });

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-52931203-2', 'auto');
    ga('send', 'pageview');


    $(".quadroLeft").width($(".slider").width());

    $( ".helpSlider" ).fadeIn( 1200 );

    var ativaSlider = false;

    $(".slider.responsive").mousedown(function(e){
      $( ".helpSlider" ).hide();
        ativaSlider = true;
    });

    $(document).mouseup(function(e){
        ativaSlider = false;
    });


    $(".slider.responsive").mousemove(function(e){
      if (ativaSlider)
      {
        var offset = $(".slider.responsive").offset();
        $(this).find('.left').css('width',e.pageX - offset.left + 'px');
      }
    });

    $(".various").fancybox({
  		maxWidth	: 600,
  		maxHeight	: 600,
  		fitToView	: true,
  		autoSize	: false,
  		closeClick	: false,
  		openEffect	: 'none',
  		closeEffect	: 'none'
  	});

