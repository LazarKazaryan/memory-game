$(document).ready(function(){
    //mi qani paher kan vor normal chen
    //bayc 3 hatov anel@ arandznahatkutyuna

    let cont = 0,
        score = 0,
        turn = 0,
        hour = 0,
        minute = 0,
        second = 0,
        fruit = [];
    $(".startgame").click(function(){
        $(".start").slideUp(400);
        setInterval(function(){
        
            second++;
            if(second == 60){
                minute++;
                second = 0;
            }
            if(minute == 60){
                hour++;
                minute = 0;
            }
            $(".time").html("Time "+hour+":"+minute+":"+second);
            
        },1000);
    });
    var ran = {
        "apple":4,
        "apricot":4,
        "pineapple":4,
        "strawberry":4,
        "kiwi":4,
        "peach":4,
        "grape":4,
        "coconut":4,
        "orange":4,
    };
    var images = [];
    for(var n = 1;n<=36;n++){
        images.push(($(".img"+n)));
    }
    for(key in ran){
        
        for(var k = 1;k <= ran[key];k++){
            
            
            if(images.length >=0){
                var t = Math.floor((Math.random()*(images.length-1)));
                images[t].attr("src","images/"+key+".png");
                images[t].attr("alt",key);
                images[t].attr("name",key);
                images.splice(t,1);
            }

            
        }
    }

    $(".div").click(function(){
        turn++;
        $(".turn").html("Turns:"+turn);
        if(cont < 3){
            var alt = $(this).find(".img");
            $(this).find(".deactive").css("z-index","1");
            $(this).find(".deactive").animate({
                "opacity":"100%"
            },"fast");
            cont++;
            for(var i = 0;i<fruit.length;i++){
                if(fruit[i].attr("alt") == alt.attr("alt")){
                    $(this).find(".img").addClass("active");
                    $(this).find(".img").removeClass("deactive");
                    fruit[i].addClass("active");
                    fruit[i].removeClass("deactive");
                    score++;
                } 
            }
            fruit.push(alt);
            $(".score").html("Score:"+score);
        }
        if(cont == 3){
            setTimeout(function(){
                var alt = $(this).find(".img").attr("alt");
                cont = 0;
                $(this).find(".deactive").css("z-index","-1");
                $(".deactive").animate({
                    "opacity":"0%"
                },"fast");
                fruit.push(alt);
                fruit = [];
            },400);
            
        }
    });
    $(".restart").click(function(){
        var ran = {
            "apple":4,
            "apricot":4,
            "pineapple":4,
            "strawberry":4,
            "kiwi":4,
            "peach":4,
            "grape":4,
            "coconut":4,
            "orange":4,
        };
        var images = [];
        for(var n = 1;n<=36;n++){
            images.push(($(".img"+n)));
        }
        cont = 0;
        score = 0;
        turn = 0;
        hour = 0;
        minute = 0;
        second = 0;
        fruit = [];
        for(key in ran){
        
            for(var k = 1;k <= ran[key];k++){
                
                
                if(images.length >=0){
                    var t = Math.floor((Math.random()*(images.length-1)));
                    images[t].attr("src","images/"+key+".png");
                    images[t].attr("alt",key);
                    images[t].attr("name",key);
                    images.splice(t,1);
                }
    
                
            }
        }
        $(".div>img").addClass("deactive");
        $(".div>img").removeClass("active");
        $(".turn").html("Turns:"+turn);
        $(".score").html("Score:"+score);$(".time").html("Time "+hour+":"+minute+":"+second);
        $(".deactive").css("z-index","-3");
        $(".deactive").animate({
            "opacity":"0"
        },"fast");
    });
});