let boutResult = document.querySelectorAll(".boutResult");
boutResult.forEach(result=>{result.style.display="none"});
/*
let dataTable = document.querySelector("dataTable");
let dataTableResults = dataTable.querySelectorAll("tbody");
alert(dataTableResults.length);*/
//select all td with result (10), decision 11 , and rounds 12

//select all match results
//replace each with a spoiler image (different sized)
//set event listener so that every click will reveal the result

//add button to reapply all spoiler blockers on the page 

  /*
    for (var i=0;i<no_spoiling.length;i++){
      $(target).each(function(){
        var inOrNot, thisImg;
  
            var spoiler_lower=(no_spoiling[i]).toLowerCase();
            var a=$(this).text().indexOf(no_spoiling[i]);
            var a_lower=$(this).text().indexOf(spoiler_lower);
            var b=$(this).children().first().attr('title');
            var c;
            var c_lower;
            b!=undefined ? c=b.indexOf(no_spoiling[i]): c=-1;
            b!=undefined ? c_lower = b.indexOf(spoiler_lower): c_lower=-1;
     
          if (a != -1||c!=-1||a_lower != -1||c_lower!=-1||(inOrNot!=undefined&&inOrNot!=-1)){
            
            $(this).text("SPOILER ALERT");
            
            thisImg = imgPath.call($(this));
  
          }    
      
          if (thisImg){
            changeImage(thisImg);
          }
  
      function changeImage(image){
      image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
      
      image.bind("load",function(){
        var pic=image.attr("src");
        if (pic != "https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png"){
        image.attr("src","https://pbs.twimg.com/profile_images/660830301187371009/LzVqWfh0.png");
        }
      });
    }
       */
   