const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const start = document.querySelector(".start");
const newH3element1 = document.createElement('h3');
const newH2element2 = document.createElement('h2');



start.addEventListener("click",function1);

function function1(){
    const num = parseInt(input1.value);
    const num2 = parseInt(input2.value);

    let Onum = Math.ceil(Math.random() * num);
    console.log(Onum);
    newH3element1.textContent = `You chose: ${num2}, the machine chose: ${Onum}.`;
    document.body.appendChild(newH3element1);
    if(Onum === num2){
        newH2element2.textContent = "You win!";
        document.body.appendChild(newH2element2);
    }
    else{
        newH2element2.textContent = "You lost!";
        document.body.appendChild(newH2element2);
    }
}