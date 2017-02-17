var main=function()
{ $("#btn").click(function(){
   var min=setmin();
   var bk=setbk();  
  console.log(min);
  var b;
  
   
  function init_clock()
  {
    $("#min").text(format(min));
    
  }
  function format(t)
  {
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    return minutes+":"+seconds;
   }
  var it=setInterval(timer,1000);
  function timer()
  {console.log(str);
    if(min>0)
    {
     var str=format(min);
      
     $("#min").text("keep working for next: "+str+" minutes");
     min=min-1000;
    }
     else if(min==0)
      { 
       alert("break time");
       clearInterval(it);
        b=setInterval(timer_break,1000);
      }
  }
  function timer_break()
  {
    var s=format(bk);
    $("#min").text("Break ends in >>>"+s)
    bk=bk-1000;
    if(bk<=0)
      {
        alert("pomodoro session over");
        min=.5*60*1000;
        clearInterval(b);
         init_clock();
      }
  }
   function setmin()
    {
      var s=document.getElementById("session").value;
      return s*60*1000;
    }
    
    function setbk()
    {
      var p=document.getElementById("break").value;
      return p*60*1000;
    }
  });
};

$(document).ready(main);