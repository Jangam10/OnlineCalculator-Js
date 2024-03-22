console.log("We are making Calculator");

//getting screen and the buttons
let screen = document.getElementById("screen");
let buttons = document.getElementsByTagName("button");
let screenValue = " ";

// console.log(screen);
// console.log(buttons);



for ( item of buttons) {
    item.addEventListener("click",(e)=>{
       buttonText = e.target.innerText;
       
       if (buttonText=="X")
       {
           buttonText="*";
           screenValue += buttonText; 
           screen.value= screenValue;
       }
       else if(buttonText=="AC")
       {
           screen.value=" ";
           screenValue = " ";
       }
       else if (buttonText== "=")
       {
           screen.value = eval(screenValue);
           screenValue = screen.value;
       }
       else if (buttonText== "DEL")
       {
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
       }
       else {
           screenValue += buttonText; 
           screen.value= screenValue;
       }

    //    console.log(buttonText);
        
    })
}