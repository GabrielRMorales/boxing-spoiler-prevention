"use strict";
// let boutResult = document.querySelectorAll(".boutResult");
// boutResult.forEach(result=>{result.style.display="none"});
//consider adding the domcontentload event listener
  let dataTableResults = document.querySelectorAll("tbody");
  /*
  let fights = [...dataTableResults].filter(el=>{
    return el.id;
  });
  
  fights.forEach(tbody=>{
    let dataToHide = tbody.children[0].children;
    [...dataToHide].forEach((td, index)=>{
     
     if (index>9 && index<12){
      // console.log(td);
      let data = td;
      data.innerText = " ";
      }
    });
  });
*/

for (let j=0;j<dataTableResults.length;j++){    
    if (dataTableResults[j].id){
        //go to row1 of each
      let dataToHide = dataTableResults[j].childNodes[0].childNodes;
            for (let i=0;i<dataToHide.length;i++){
            
    //select all td with result (10), decision 11 , and rounds 12
              if (i>8 && i<12){
                dataTableResults[j].childNodes[0].childNodes[i].innerText= "BLOCKED";
              }        
            }
      dataTableResults[j].childNodes[1].innerText = "RESULTS HIDDEN";
      dataTableResults[j].childNodes[1].style.textAlign = "center";
     

    }
    
    //select all match results (row2)
    //replace each with a spoiler image (different sized)
    //set event listener so that every click will reveal the result

}
  

  






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
   