$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)   
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
  
});









// 課程介紹

$(".cs").mouseenter(
  function(){          $(this).css("background","rgba(255,255,255,0.4)")    
  }
);

$(".cs").mouseleave(
  function(){
      $(this).css("background","rgba(255,255,255,0)")
 }
);






// 實習計畫區
$(".intern").mouseenter(
  function(){
    $(this).css("background-color","#D2D339");
    $(this).css("color","#000");
      
     
  }
  );
$(".intern").mouseleave(
  function(){
    $(this).css("background-color","#171936");
    $(this).css("color","#EEF8FA");  
       
  }
);




// 提攜人
$(".i1").click(
  function(){
    $(".discription").css("background-image","url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/17359401_1434739046601414_6162979223411956638_o.png?oh=325d1f0a05a063535a36682464f3f54d&oe=5951C3FD)");
    $(".discription_text").text("由台灣玉山科技協會之會員擔任小玉山實習生之業界導師，實習生可透過與成就傑出的導師近身學習之機會，養成廣大宏遠的視野與切身了解各產業概況，獲取最新一手的產業資訊與培養未來就業能力。四大會計事務所、工研院、投資銀行、創投公司、法律事務所、資策會、顧問公司等來自各大領域的領導者都有機會成為你的mentor！");
    
  });


// FVY

$(".i2").click(
  function(){
     $(".discription").css("background-image","url(https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/15621698_1308574895884497_7511451178087690591_n.jpg?oh=ae41a2f85a6ec965396782bf4efeb6e3&oe=59560562)");
 $(".discription_text").text("於每年上學期舉辦論壇，是第一個實習生親手籌辦的大活動！由主題製定、邀請講師至當天實際執行全權交給當屆實習生來進行。去年第一屆以產業趨勢及跨領域為主題，創造與CTY不同的主題，藉由座談會及分桌形式來拉近產學間的鴻溝。");
    
  });



$(".i3").click(
  function(){
    $(".discription").css("background-image","url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/13653063_1135037786571543_4509152551199301489_o.jpg?oh=0414dab636da70015f8c6bd5ef1948c2&oe=596A49F1)");
 $(".discription_text").text("邁入第11年的CTY，是以創新創業為主軸的營隊，由當屆實習生負責籌辦，從主題制定、活動發想、宣傳招生、金錢管理到活動實際執行。最完整的大型專案實作經驗讓你領導力、執行力，趨勢洞察力UPUP!");
    
  });


$(".i4").click(
  function(){
    $(".discription").css("background-image","url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/17434859_1592858287408739_2480376463263200957_o.jpg?oh=b47f2a02904e412cc0df90252fe564b7&oe=5951084F)");
 $(".discription_text").text("「溝通實務」、「台陸的關係與近期發展」、「心智圖」、「創業實務」、「高橋流簡報技巧」、「禮儀課」 等內容豐富的課程，由小玉山的幹事群邀請來自不同領域的專家為實習生上課，使實習生在團隊合作、舉辦活動時能夠更加流暢 ！");
    
  });


$(".i5").click(
  function(){
    $(".discription").css("background-image","url(https://scontent-tpe1-1.xx.fbcdn.net/v/t31.0-8/17492293_1592403467454221_6736646524211906042_o.jpg?oh=2e33474abe466a21effbe5fbea9949d7&oe=595302A5)");
 $(".discription_text").text("與當地名校學術交流，至趨勢新創企業參訪，能踏出台灣增廣國際視野！玉山科技協會在全球共有14個分會，這些據點都有可能成為當年度的海外參訪地點 ！");
    
  });


$(".i6").click(
  function(){
    $(".discription").addClass("discription6");
 $(".discription_text").text("小玉山的實習生每週需至協會排班，此為實習生的基本義務，並在排班時也可以更加了解協會內部處理事務嚴謹且高效率的的方式及制度");
    
  });

$(".i7").click(
  function(){
    $(".discription").addClass("discription6");
 $(".discription_text").text("產業界最新的趨勢論壇，舉凡Fintech、全球併購到數位智能每個月不同的主題論壇，讓你在協辦的同時也能夠對於產業趨勢有著更深入的了解！");
    
  });





