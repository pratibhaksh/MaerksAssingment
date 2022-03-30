const addbtn = document.getElementById('set');
const resetbtn = document.getElementById('reset');
const listItems = document.getElementsByClassName('cBtn');

const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];

const moview = []



 add =() =>{

    for(var i = 0; i < colors.length; i ++) {
        listItems[i].style.color = colors[i];    
      }
    document.getElementById('block1').style.display = "block";
    document.getElementById('block2').style.display = "block";
    document.getElementById('block3').style.display = "block";
 }

 reset =() =>{
    document.getElementById('block1').style.display = "flex";
    document.getElementById('block2').style.display = "flex";
    document.getElementById('block3').style.display = "flex";

 }




addbtn.addEventListener('click', add)
resetbtn.addEventListener('click', reset)





