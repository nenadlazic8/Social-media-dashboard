


 function darkMode() {
    var ball = document.getElementById("ball");
    var toggleItem = document.getElementById("toggle");
    var body = document.getElementById("body");
    var box = document.getElementsByClassName("box");
    ball.classList.toggle('left');

    
   

    if(ball.classList.contains('left')){
        ball.style.left = '50%';
        toggleItem.style.background = 'linear-gradient(hsl(146, 68%, 55%), hsl(210, 78%, 86%))';
        body.style.backgroundColor = 'hsl(0, 0%, 100%)';
        body.style.color = 'black';
        
        for(let i = 0; i < box.length; i++){
            box[i].style.backgroundColor = 'hsl(227, 47%, 96%)';
            
        }
        
    }else{
        ball.style.left = '5%';
        toggleItem.style.background = 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))';
        body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        body.style.color = 'white';

        for(let i = 0; i < box.length; i++){
            box[i].style.backgroundColor = 'hsl(228, 28%, 20%)';
        }
    }

    for(let i = 0; i < box.length; i++){
        box[i].classList.toggle('box-light');
        
    }
  }