$(function (){
    var num=0
    var music =document.getElementsByTagName("audio")[0]
   $("#body").click(function (){
       if (num===0){
           music.paused=false
           music.play()
           num++
       }
   })
    var ma=$(".menu a")
    var pa=$(".play a")
    var sa=$(".setting a")
    var ha=$(".help a")
    var menu =$('#menu')
    var demo =$("#demo")
    ma.eq(0).click(function (){
        $('.menu').css("display","none")
        $('.play').css("display","block")
    })
    ma.eq(1).click(function (){
        $('.menu').css("display","none")
        $('.setting').css("display","block")
    })
    ma.eq(2).click(function (){
        $('.menu').css("display","none")
        $('.help').css("display","block")
    })
    pa.first().click(function (){
        menu.css("display","none")
        demo.css("display","flex")
    })
    pa.last().click(function (){
        $('.play').css("display","none")
        $('.menu').css("display","block")
    })
    sa.eq(1).click(function (){
        if (sa.eq(1).text()==='close background music') {
            music.pause()
            sa.eq(1).text('play background music')
        }
        else {
            music.play()
            sa.eq(1).text('close background music')
        }

    })
    sa.last().click(function (){
        $('.setting').css("display","none")
        $('.menu').css("display","block")
    })
    ha.last().click(function (){
        $('.help').css("display","none")
        $('.menu').css("display","block")
    })
    $(".rtop a").eq(0).click(function (){
        demo.css("display","none")
        menu.css("display","flex")
    })
})
