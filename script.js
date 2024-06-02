let ele1 = document.createElement("div");
ele1.innerHTML=prompt("Enter content to get displayed");
document.body.append(ele1);

let blue = function (){
    ele1.style.color = "blue";
}
let black = function(){
    ele1.style.color = "black";
}

ele1.addEventListener("mouseover",blue);
ele1.addEventListener("mouseout",black);

// let ele2 = document.createElement("span");
// ele2.textContent = prompt("Enter value");
// document.body.append(ele2);

let ele3 = document.createElement("input");
ele3.type = "text";
ele3.name = "sample";
document.body.append(ele3);
//ele3.addEventListener("input",vals);
ele3.addEventListener("keydown", (eve)=> {
    let str = eve.key;
    if(str == "Backspace"){
        val--;
        console.log(val);
    }
    else if(str == "Delete"){
        val--;
        console.log(val);
    }
    else{
        val++;
        console.log(val);
    }
});
//ele3.addEventListener("keypress", (eve)=> console.log(eve.key));
//ele3.addEventListener("keyup",vals);
//ele3.addEventListener("change",);
let val=0;

//let ele4 = document.createElement("p");
//document.body.append(ele4);
function vals(){
    val++;
    console.log(val);
    //ele4.innerHTML = val++;
        
}
// ele3.addEventListener("keydown", (eve) => {
//     if(eve.key == "Backspace"){
//         console.log(--val);
//     }
//     elseif(eve.key == "Delete"){
//         console.log(--val);
//     }
// });
// function vals2(){
//     val--;
//     console.log(val);
// }



//ele4.innerHTML = val;


