

$(document).ready(function(){
    
    
    // header
    var wHeight = $(window).height(); 
    var dHeight = $(document).height();
    var navHeight = $(".header").outerHeight(); 
    var lastScrollTop = 0; 
    var moveScroll;

    $(window).scroll(function(event){ 
        moveScroll = true; 
    });

    setInterval(function(){ 
        if(moveScroll){ 
            hasScroll();
            moveScroll = false; 
        }
    },250); 

    function hasScroll(){
        var wScroll = $(this).scrollTop();

        if(wScroll > lastScrollTop && wScroll > navHeight){  
            //scroll down
            $(".header").addClass("on");
            $(".header").addClass("on2");
            $(".subText li").addClass("active");
        } else {                      
            //scroll up
            if(wScroll + wHeight < dHeight){
                $(".header").removeClass("on");
            }
            //scroll is on top
            if(wScroll < 200 && wScroll < navHeight) {
                $(".header").removeClass("on2");
                $(".subText li").removeClass("active");
            }
        } 

        lastScrollTop = wScroll;
    }
    
    
    
    
    
    // menu click
    var nav = $("#header nav ul li");
    var cont = $("#contents > section");
    
    nav.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = cont.eq(index);
        var offset = section.offset().top;
        $("html, body").animate({ scrollTop: offset },300,"easeInOutExpo");
    });
    
    
    // top click
    var top = $(".top a")
    top.click(function(e){
        var offsetMain = cont.eq(0).offset().top;
        $("html, body").animate({ scrollTop: offsetMain },300,"easeInOutExpo");
    });
    
    
    // hamburger
    
    $(".ham").click(function(e){
        e.preventDefault();
        $(".bg_mobile").addClass("on");
        $(".mobile_nav").addClass("on");
        $(".close").addClass("on");  
    }); 
    
    $(".close").click(function(e){
        e.preventDefault();
        $(".bg_mobile").removeClass("on");
        $(".mobile_nav").removeClass("on");
        $(".close").removeClass("on");  
    }); 
    
    
    // mobile_nav click 
    
    var mobileNav = $(".mobile_nav ul li");
    var mobileCont = $("#contents > section");
    
    mobileNav.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = mobileCont.eq(index);
        var offset = section.offset().top;
        $("html, body").animate({ scrollTop: offset },300,"easeInOutExpo");
        
        $(".bg_mobile").removeClass("on");
        $(".mobile_nav").removeClass("on");
        $(".close").removeClass("on"); 
    });
    
    
    
    // foot menu click
    var footNav = $("#footer nav ul li");
    var footCont = $("#contents > section");
    
    footNav.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        var section = footCont.eq(index);
        var offset = section.offset().top;
        $("html, body").animate({ scrollTop: offset },300,"easeInOutExpo");
    });

    
    //#section1 skill number
    var $executed = false;

    //scroll
    $(window).scroll(function(){
        
         
        
        //#section1 circle
        const scrollTop = $(window).scrollTop() - $(window).height()/4;  
        let offset1 = parseInt((scrollTop - $(".circle_wrap").offset().top) * 0.3);
        $(".circle_wrap").css({ "transform":"translateY("+ -offset1 +"px)" });
        

        
        /*
        //#section1 circle with "each" method
        
        const scrollTop = parseInt($(window).scrollTop() - $(window).height()/4 );  
        
        $(".circle_wrap").each(function(index){
                let offset = parseInt((scrollTop - $(this).offset().top) * 0.2);

                if(scrollTop > $(this).offset().top){
                    $(this).css({ "transform":"translateY("+ -offset +"px)" });
                }
        }); 
        */
        
        
        //#section1 Main text 
        
        const scrollTop2 = $(window).scrollTop() + $(window).height()/2.5;
        
        $(".mainText").each(function(index){
                let offsetF = (scrollTop2 - $(this).offset().top) * 0.3;
                let offsetS = (scrollTop2 - $(this).offset().top) * 0.1;

                if(scrollTop2 > $(this).offset().top){
                    $(".mainText_right_slow").css({ "transform":"translateX("+ offsetS +"px)" });
                    $(".mainText_left_slow").css({ "transform":"translateX("+ -offsetS +"px)" });
                    $(".mainText_left_fast").css({ "transform":"translateX("+ -offsetF +"px)" });
                }
        }); 
        
        
        //#section1 about
        
        var wScroll = $(this).scrollTop(); 
        
        var about_h2 = $(".about_wrap h2 span");
        if(wScroll >= about_h2.offset().top - $(window).height()){
            about_h2.addClass("show");
        }
        
        var about_ul = $(".about_wrap ul li");
        if(wScroll >= about_ul.offset().top - $(window).height()){
            about_ul.addClass("show");
        }
        
        var about_h3 =$(".about_wrap article h3");
        if(wScroll >= about_h3.offset().top - $(window).height()){
            about_h3.addClass("show");
        }
        
        var about_line =$(".about_wrap article h3 > span");
        about_line.each(function(){
            var current = $(this);
            if(wScroll >= current.offset().top - $(window).height()){
                current.addClass("show");
            }
        });
        
        
        var about_p =$(".about_wrap article p");
        about_p.each(function(){
            var current = $(this);
            if(wScroll >= current.offset().top - $(window).height()){
                current.addClass("show");
            }
        });
        
    
        
        
        //#section1 about photo
        
        const scrollTopImg = $(window).scrollTop() + $(window).height()*0.9;
        
        $(".about_img").each(function(index){
                let offsetImg = (scrollTopImg - $(this).offset().top)*0.02;

                if(scrollTopImg > $(".about_img").offset().top){
                    $(".about_img img").css({ "transform":"rotate("+ -offsetImg +"deg)" }); 
                }
        });
        
        //#section1 skill h2
        if(wScroll >= $(".sec1_skill .skill h2 span").offset().top - $(window).height()){
            $(".sec1_skill .skill h2 span").addClass("show");
        }
        
        //#section1 skill text
        const scrollTopSkill = $(window).scrollTop() + $(window).height();
        
        $(".skill_text").each(function(index){
                let offsetF = (scrollTopSkill - $(this).offset().top) * 0.3;
                let offsetS = (scrollTopSkill - $(this).offset().top) * 0.2;

                if(scrollTopSkill > $(this).offset().top){
                    $(".skill_text li").eq(0).css({ "transform":"translateX("+ -offsetF +"px)" });
                    $(".skill_text li").eq(1).css({ "transform":"translateX("+ -offsetS +"px)" });
                    $(".skill_text li").eq(2).css({ "transform":"translateX("+ -offsetF +"px)" });
                }
        });
        
        //#section1 skill circle movement
        if(wScroll >= $(".sec1_skill .skill .skill_number").offset().top - $(window).height()*0.7){
            $(".sec1_skill .skill .skill_number .number_top").addClass("active");
            $(".sec1_skill .skill .skill_number .number_bottom").addClass("active");
        }
        
        
        
        //#section1 skill number
        var $threshold = $(".skill_number").offset().top - $(window).height()/1.5;
        
        if(!$executed) {
            
            if($(window).scrollTop() >= $threshold) {
                
                $(".animate").each(function(){
                    var $current = $(this); //여기서 current는 각각의 .animate이다.
                    var $target = $current.attr("data-rate");
                    
                    $({percent: 0}).animate({percent:$target},{
                        duration: 2000, 
                        progress: function(){
                            var now = this.percent; //여기서 this는 "$({percent: 0})~"로 시작하는 함수 자체. 
                            $current.text(Math.ceil(now)+"%");

                        }
                    });
                });
                
                $executed = true;
            } 
        }
        
        
        //#section1 skill span
        if(wScroll >= $(".sec1_skill .skill .skill_number li span").offset().top - $(window).height()/1.5){
            $(".sec1_skill .skill .skill_number li span").addClass("show");
        }
        
        
        
        //#section2 h2  
        
        if(wScroll >= $(".sec2 .sec2_tit h2 span").offset().top - $(window).height()*0.7){
            $(".sec2 .sec2_tit h2 span").addClass("show");
        }
        
        
        
        
        
        
        var sec2_img =$(".sec2 .sec2_bottom article");
        
        if(wScroll >= sec2_img.eq(0).find(".sec2_img").offset().top - $(window).height()*0.9){
            sec2_img.eq(0).find(".sec2_img").addClass("show");
        }
        if(wScroll >= sec2_img.eq(1).find(".sec2_img").offset().top - $(window).height()*0.9){
            sec2_img.eq(1).find(".sec2_img").addClass("show");
        }
        if(wScroll >= sec2_img.eq(2).find(".sec2_img").offset().top - $(window).height()*0.9){
            sec2_img.eq(2).find(".sec2_img").addClass("show");
        }
        if(wScroll >= sec2_img.eq(3).find(".sec2_img").offset().top - $(window).height()*0.9){
            sec2_img.eq(3).find(".sec2_img").addClass("show");
        }
        
        
        
        //#section3 h2  
        if(wScroll >= $(".sec3 .sec3_tit h2 span").offset().top - $(window).height()*0.7){
            $(".sec3 .sec3_tit h2 span").addClass("show");
        }
        
        
        var sec3_img =$(".sec3 .sec3_bottom article");
        
        if(wScroll >= sec3_img.eq(0).find(".sec3_img").offset().top - $(window).height()*0.9){
            sec3_img.eq(0).find(".sec3_img").addClass("show");
        }
        if(wScroll >= sec3_img.eq(1).find(".sec3_img").offset().top - $(window).height()*0.9){
            sec3_img.eq(1).find(".sec3_img").addClass("show");
        }
        if(wScroll >= sec3_img.eq(2).find(".sec3_img").offset().top - $(window).height()*0.9){
            sec3_img.eq(2).find(".sec3_img").addClass("show");
        }
        
        
        //section4 tabMenu
        
        var sec4Btn = $(".sec4_left > ul > li"); 
        var sec4Cont = $(".sec4_cont > article"); 
        
        sec4Btn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            sec4Btn.removeClass("active");
            target.addClass("active");
            sec4Cont.css("display","none");
            sec4Cont.eq(index).css("display","block");
        });

        
        //#section4 h2  
        if(wScroll >= $(".sec4 .sec4_tit h2 span").offset().top - $(window).height()){
            $(".sec4 .sec4_tit h2 span").addClass("show");
        }
        
        
        
        //#section4 
        
        const scrollTop3 = $(window).scrollTop() - $(window).height()/5;  
        let offset3 = (scrollTop3 - $(".sec4 .sec4_left ul").offset().top) * 0.3;
        $(".sec4 .sec4_left ul").css({ "transform":"translateY("+ -offset3 +"px)" });
        
        var wWidth = $(window).width();  
        if(wWidth <= 960){
            $(".sec4 .sec4_left ul").css({ "transform":"translateY("+ 0 +"px)" });
        }
        
        
        //#footer h2 
        
        if(wScroll >= $(".footer .foot_cont .contact h2 span").offset().top - $(window).height()){
            $(".footer .foot_cont .contact h2 span").addClass("show");
        }
        
  
        
        
    }); //window scroll

   
    // window popup
    $(".pc").click(function(e){
        e.preventDefault();
        window.open("tiffany_pc.html","tiffany_pc","width=1200, height=700, left=150, top=50 scrollbar=no, toolbar=0, menubar=0");
    });
    
    $(".tablet").click(function(e){
        e.preventDefault();
        window.open("tiffany_tablet.html","tiffany_tablet","width=768, height=700, left=150, top=50 scrollbar=no, toolbar=0, menubar=0");
    });
    
    $(".mobile").click(function(e){
        e.preventDefault();
        window.open("tiffany_mobile.html","tiffany_mobile","width=480, height=700, left=150, top=50 scrollbar=no, toolbar=0, menubar=0");
    });
    
    $(".tiffany_landing").click(function(e){
        e.preventDefault();
        window.open("tiffany_landing.html","tiffany_landing","width=1200, height=700, left=150, top=50 scrollbar=no, toolbar=0, menubar=0");
    });
    
    $(".slow_landing").click(function(e){
        e.preventDefault();
        window.open("slow_landing.html","slow_landing","width=1200, height=700, left=150, top=50 scrollbar=no, toolbar=0, menubar=0");
    });
    
    

    
    
}); //document

