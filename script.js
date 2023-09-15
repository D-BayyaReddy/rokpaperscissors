let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let btn = document.querySelector(".btn")

function MyFun(a){
    if(a == 0){
        rock.style.display ='block'
        
    }
    else if(a == 1){
        paper.style.display ='block'
    
    }
    else
    {
        scissors.style.display ='block'
    
    }
}
MyFun(Math.floor(Math.random() *3))

// btn.onclick = () =>  reload() {
//     
//     console.log('user hit me')
//   }
  
//   setTimeout(reload, 3000);

btn.onclick = () => document.location.reload();
