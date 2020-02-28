
    // Rajat Dua
    $(document).ready(()=>{
        $('#btn1').click(()=>{
          var age=document.getElementById('Age').value;

          var retireAge=document.getElementById('retireAge').value;
        
          if(age<=100){
        
          }
          else if(age<=100){
        
          }
          var retirement=parseFloat(retireAge-age);
          var result=new Date().getFullYear() + retirement;
        
          document.getElementById('finalScoreText').innerHTML="You are "+ age+ " Years old.";
          document.getElementById('retire').innerHTML="You want to be "+retireAge+" years old  when you will retire.";
          document.getElementById('result').innerHTML="In "+result+" You can retire.";
          
          $("#results").css({"display":"block"});
          $(".final").css({"display":"block"});
           
        })
    })