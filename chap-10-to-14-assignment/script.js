// // question 1

// Make a Calculator
// input a value from user for example num1 is 7
// input a second value from user for example num2 is 3
// input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
// print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

// strat from their

let display= document.getElementById("display");
let buttons=Array.from(document.getElementsByClassName("button"))
buttons.map(button =>{
    button.addEventListener("click",(e)=>{
        switch(e.target.innerText){
            case "C":
                display.innerText="";
                break;
                case "->":
                    if(display.innerText){
                        display.innerText=display.innerText.slice(0,-1);
                    }
                    break;
                    case "=":
                        display.innerText=eval(display.innerHTML);
                        break;
                        default:
                            display.innerText +=e.target.innerText;
                }
        });
})