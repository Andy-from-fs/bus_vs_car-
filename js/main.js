var tech = $(".tech");
$.fn.extend({
  //option
  animateCss: function (option) {
    var _this = this;
    $(this).addClass(option.method);
    // console.log(option.time)
    if (typeof option.time !== "number") {
      option.time = 900;
    }
    setTimeout(function () {
      $(_this).removeClass(option.method);
    }, 1000);
    setTimeout(function () {
      option.callBack.call(option.context);
    }, option.time);
    return $(this);
  },

  //list:ele,css,show,offset,callBack,callBackTime,context,anime
  playAnimation: function (innerTime, callBack) {
    if (typeof innerTime !== "number") innerTime = 800;
    var time = 0;
    $.each(this, function (indexInArray, valueOfElement) {
      if (typeof valueOfElement.offset === "number")
        time += valueOfElement.offset;
      console.log(time);
      setTimeout(function () {
        if (typeof valueOfElement.show !== 'undefined' && typeof valueOfElement.ele === "string") {
          if (valueOfElement.show) {
            $(valueOfElement.ele).removeClass('hidden');
          }
        }
        if (typeof valueOfElement.css === 'object' && typeof valueOfElement.ele === "string")
          $(valueOfElement.ele).css(valueOfElement.css);
        if (typeof valueOfElement.callBack === 'function' && typeof valueOfElement.callBackTime === 'number')
          setTimeout(function () {
            callBack.call(valueOfElement.context);
          }, valueOfElement.callBackTime);
        if (typeof valueOfElement.anime === 'object')
          valueOfElement.anime.play();
      }, time);
      time += innerTime;
    });

    if (typeof callBack === 'function')
      setTimeout(function () {
        callBack.call(this);
      }, time);
  },
});

if ($(window).height() > $($(".bg")[0]).height()) {
  $(".bg").each(function (index, element) {
    $(this).height($(window).height());
  });
}
//p1
function p1Init() {
  $(".p1 .car").css({
    bottom: "18.57%",
    transform: "scale(1)"
  });
  setTimeout(function () {
    $(".p1 .vs").removeClass("hidden");
  }, 900);
  setTimeout(function () {
    tech.removeClass("hidden");
    $(".sponsor").removeClass("hidden");
  }, 1000);
  $(".start").one('click', function (e) {
    $(".p1").animateCss({
      method: "fadeOut",
      time: 500,
      callBack: function () {
        $(".p1").addClass("hidden");
        $(".p2").removeClass("hidden");
        audio.change(audioList[1]);
        p2Init();
      },
      context: this
    });
  });
}

//footer
$("body").on("click", ".tech", function () {
  window.location.href = "http://www.foshannews.net/";
});

//p2
function p2Init() {
  tech.animateCss({
    method: "fadeOut",
    callBack: function () {
      $(this).addClass("hidden");
    },
    context: tech
  });
  $(".p2 .car-3-wrapper .bd ul li").css(
    "width",
    $(window).height() * 0.1111 * 825 / 134
  );
  $(".p2 .car-2-wrapper .bd ul li").css(
    "width",
    $(window).height() * 0.1451 * 755 / 175
  );
  $(".p2 .car-1-wrapper .bd ul li").css(
    "width",
    $(window).height() * 0.1252 * 1310 / 152
  );
  $(".p2 .car-3-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 100,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .car-2-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 200,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .car-1-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 150,
    // trigger:"click",
    easing: "easeInQuint"
  });
  $(".p2 .next").one('click', function (e) {
    $(".p2").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p2").addClass("hidden");
        $(".p3").removeClass("hidden");
        audio.change(audioList[2]);
        setTimeout(function () {
          p3Init();
        }, 800);
      },
      time:500,
      context: this
    });
  });
}

//p3
function p3Init() {
  $(".p3 .next").removeClass("hidden");
  $(".p3 .next").one('click', function () {
    $(".p3").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p3").addClass("hidden");
        $(".p4").removeClass("hidden");
        audio.change(audioList[3]);
        setTimeout(function () {
          p4Init();
        }, 800);
      },
      time:500,
      context: this
    });
  });
  $('.p3 .title').removeClass('hidden');

  $(".p3 .car-1-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 3,
    interTime: 150,
    trigger: "click",
    easing: "easeInQuint"
  });
  $(".p3 .car-2-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "topMarquee",
    vis: 3,
    interTime: 180,
    trigger: "click",
    easing: "easeInQuint"
  });
  // var busPos=$('.p3 .bus').css('top');
  setTimeout(function () {
    anime({
      targets: ".p3 .bus",
      top: -0.41 * $(window).height() + "px",
      loop: true,
      duration: 1500,
      easing: "easeInQuad",
      elasticity: 0,
    });
  }, 300);
}

//p4
function p4Init() {
  var parent = ".p4 ";
  var animationList = [{
      ele: parent + ".bus",
      css: {
        bottom: "41.5%"
      }
    },
    {
      ele: parent + ".car-1",
      css: {
        bottom: "42.03%"
      }
    },
    {
      ele: parent + ".car-2",
      css: {
        bottom: "43.49%"
      },
      offset: -500
    },
    {
      ele: parent + ".car-3",
      css: {
        bottom: "52.87%"
      },
      offset: -500
    },
    {
      ele: parent + ".car-4",
      css: {
        bottom: "52.8%"
      },
      offset: -500
    },
    {
      ele: parent + ".car-5",
      css: {},
      offset: -500
    },
    {
      ele: parent + ".car-6",
      css: {},
      offset: -500
    },
    {
      ele: parent + ".next",
      show: true,
      offset: -300
    }
  ];
  $.each(animationList, function (indexInArray, valueOfElement) {
    if (typeof valueOfElement.css === 'object')
      valueOfElement.css.transform = "scale(1)";
  });
  $(animationList).playAnimation(800);
  $(parent + '.next').one('click', function (e) {
    $(".p4").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p4").addClass("hidden");
        $(".p5").removeClass("hidden");
        audio.change(audioList[4]);
        setTimeout(function () {
          p5Init();
        }, 800);
      },
      time:500,
      context: this
    });
  })
}

//p5
function p5Init() {
  var num = {
      car: 0,
      bus: 0,
    },
    parent = '.p5 ',
    carNumAnime = anime.timeline({
      autoplay: false
    }),
    busNumAnime = anime.timeline({
      autoplay: false
    }),
    animationList = [{
      ele: parent + '.title,' + parent + '.content',
      show: true
    }, {
      ele: parent + '.car',
      show: true,
    }, {
      anime: carNumAnime,
    }, {
      ele: parent + '.bus',
      show: true,
      offset: 800
    }, {
      anime: busNumAnime,
    }, {
      ele: parent + '.next',
      show: true,
      offset: 300
    }];
  carNumAnime.add({
    targets: parent + '.car-word',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300,
  }).add({
    targets: num,
    car: 1333,
    autoplay: false,
    duration: 1000,
    update: function () {
      $('.car-num').html(parseInt(num.car));
    }
  });
  busNumAnime.add({
    targets: parent + '.bus-word',
    opacity: 1,
    easing: 'easeInOutQuad',
    duration: 300,
  }).add({
    targets: num,
    bus: 60,
    autoplay: false,
    duration: 800,
    update: function () {
      $('.bus-num').html(parseInt(num.bus));
    }
  });
  $(animationList).playAnimation(500);

  $(parent + '.next').one('click', function (e) {
    $(".p5").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p5").addClass("hidden");
        $(".p6").removeClass("hidden");
        $('body').css('background-color', '#5a8b3d');
        audio.change(audioList[5]);
        setTimeout(function () {
          p6Init();
        }, 800);
      },
      time:500,
      context: this
    });
  });
}

//p6
function p6Init() {
  var parent = '.p6 '
  $(parent + ".car-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 70,
    // trigger:"click",
    easing: "easeInQuint",
    opp: true
  });
  $(parent + ".bus-wrapper").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "leftMarquee",
    interTime: 10,
    // trigger:"click",
    easing: "easeInQuint",
    opp: true
  });
  anime({
    targets: parent + '.bus-cloud',
    translateY: -10,
    scaleY: 1.1,
    scaleX: .9,
    elasticity: 0,
    easing: 'easeOutQuad',
    duration: 200,
    loop: true,
    direction: 'alternate',
  })
  anime({
    targets: parent + '.car-cloud',
    translateY: -3,
    scaleY: 1.02,
    scaleX: .98,
    elasticity: 0,
    easing: 'easeOutQuad',
    duration: 800,
    loop: true,
    direction: 'alternate',
  })

  $(parent + '.next').one('click', function (e) {
    $(".p6").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p6").addClass("hidden");
        $(".p7").removeClass("hidden");
        audio.change(audioList[6]);
        p7Init();
      },
      time:500,
      context: this
    });
  });
}

//p7
function p7Init() {
  var parent = '.p7 '
  $(parent + '.next').one('click', function (e) {
    $(".p7").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p7").addClass("hidden");
        $(".p8").removeClass("hidden");
        audio.change(audioList[7]);
        setTimeout(function () {
          p8Init();
        }, 800)
      },
      time:500,
      context: this
    });
  })
}

//p8
function p8Init() {
  var parent = '.p8 ',
    animationList = [{
      ele: parent + '.icon1',
    }, {
      ele: parent + '.icon2',
    }, {
      ele: parent + '.icon3',
    }, {
      ele: parent + '.icon4',
    }, {
      ele: parent + '.icon5',
    }, {
      ele: parent + '.icon6',
    }, {
      ele: parent + '.icon7',
    }, {
      ele: parent + '.icon8',
    }, {
      ele: parent + '.icon9',
    }, {
      ele: parent + '.next',
      show: true
    }];
  $.each(animationList, function (indexInArray, valueOfElement) {
    if (indexInArray < animationList.length - 1)
      valueOfElement.css = {
        transform: 'translateX(0)',
        opacity: 1
      }
    if (indexInArray !== 0)
      valueOfElement.offset = 100;
  });

  $(animationList).playAnimation(500);
  $(parent + '.next').one('click', function (e) {
    $(".p8").animateCss({
      method: "fadeOut",
      callBack: function () {
        $(".p8").addClass("hidden");
        $(".p9").removeClass("hidden");
        audio.change(audioList[8]);
        setTimeout(function () {
          p9Init();
        }, 800)
      },
      time:500,
      context: this
    });
  })
}

//p9
function p9Init() {
  var parent = '.p9 ';
  tech.removeClass('hidden');
  $(parent + '.btn-share').click(function () {
    $('#share').removeClass('hidden');
  })
  $(parent + '.again').click(function () {
    window.location.reload();
  })
}

$('body').on('click', '#share', function () {
  $('#share').animateCss({
    method: "fadeOut",
    time: 500,
    callBack: function () {
      $("#share").addClass("hidden").removeClass('fadeOut');
    },
    context: this
  })
});

// p1Init();
// setTimeout(function() {
  //   p6Init();
  // }, 1000);
  
  var audioList = [root+'audio/P1.mp3', root+'audio/P2.mp3', root+'audio/P3.mp3', root+'audio/P4.mp3', root+'audio/P5.mp3', root+'audio/P6.mp3', root+'audio/P7.mp3', root+'audio/P8.mp3',root+'audio/P1.mp3'];
  var audio=new audiojs(audioList[0]);
  console.log(audio);
  