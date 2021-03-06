// piano link
    var piano ={
      c: {
        sound: new Howl({
          urls: ['piano/do.wav']
        })
      },
      d: {
        sound: new Howl({
          urls: ['piano/re.wav']
        })
      },
      e: {
        sound: new Howl({
          urls: ['piano/mi.wav']
        })
      },
      f: {
        sound: new Howl({
          urls: ['piano/fa.wav']
        })
      },
      g: {
        sound: new Howl({
          urls: ['piano/sol.wav']
        })
      },
      a: {
        sound: new Howl({
          urls: ['piano/la.wav']
        })
      },
      b: {
        sound: new Howl({
          urls: ['piano/si.wav']
        })
      },
    };
//twinkle little star
var littleStar =["c","c","g","g","a","a","g","f","f","e","e","d","d","c","g","g","f","f","e","e","d","g","g","f","f","e","e","d","c","c","g","g","a","a","g","f","f","e","e","d","d","c"];

// Start background animate
  //Back ground
    var background = {}
    
    background.initializr = function (){
      
      var $this = this;
       
      //option
      $this.id = "background_css3";
      $this.style = {bubbles_color:"#4ECCA3",stroke_width:0, stroke_color :"black"};
      $this.bubbles_number = 30;
      $this.speed = [1500,8000]; //milliseconds
      $this.max_bubbles_height = $this.height;
      $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random
      
      if($("#"+$this.id).lenght > 0){
        $("#"+$this.id).remove();
      }
      $this.object = $("<div style='z-inde:-1;margin:0;padding:0; overflow:hidden;bottom:0' id='"+$this.id+"'> </div>'").appendTo("body");
      
      $this.ww = $(window).width()
      $this.wh = $(window).height()
      $this.width = $this.object.width($this.ww);
      $this.height = $this.object.height($this.wh);
      
      
      $("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");
      
      
      for (i = 0; i < $this.bubbles_number; i++) {
          $this.generate_bubbles()
      }
      
    }

     background.generate_bubbles = function() {
       var $this = this;
       var base = $("<div class='shape_background'></div>");
       var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
       if(shape_type == 1) {
         var bolla = base.css({borderRadius: "50%"})
       }else if (shape_type == 2){
         var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"}); 
       }else{
         var bolla = base; 
       }    
       var rn_size = $this.rn(.8,1.2);
       bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});        
       bolla.appendTo($this.object);
       bolla.animate({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
         $(this).remove();
         $this.generate_bubbles();
       })
         
      }


  background.rn = function(from, to, arr) {
    if(arr){
            return Math.random() * (to - from + 1) + from;
    }else{
      return Math.floor(Math.random() * (to - from + 1) + from);
    }
      }
  background.initializr()
// END BACKGROUND ANIMATION


// START TODOLIST container

  //Ckech off Specific TODOLIST by Clicking
  $("ul").on("click", "li", function () {
  	$(this).toggleClass('completed');
  });

  var count=0;
  $("input[type='text']").keypress(function(event) {
  	/* Act on the event */
    
    if (isSound  == true) {
      console.log(count);
      piano[littleStar[count]].sound.play();
      count=count+1;
    };
    
  	if(event .which === 13){
      count=0;
  		var todoText = $(this).val();
  		$(this).val("");
  		//Create a new li and add to ul
  		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todoText+ "</li>");
  	}
  });

  //Click on X to delete TODO
  $("ul").on("click", "span", function(event) {
  	/* Act on the event */
  	$(this).parent().fadeOut(500, function() {
  		$(this).remove();
  	});
  	// event.stopPropagation();
  });

  $(".fa-plus").click(function(event) {
  	/* Act on the event */
  	$("input[type='text']").toggle();
  });

  var isSound = true;
  $("#btnVolume").click(function (event) {

    /* body... */
    if($("#btnVolume").hasClass('fas fa-volume-up')){
        $("#btnVolume").attr( "class", "fas fa-volume-off");
        isSound = false;
      }else {
        $("#btnVolume").attr( "class", "fas fa-volume-up");
        isSound = true;
      }

    console.log("click");
  });
// END TODOLIST CONTAINER