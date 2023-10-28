const $ = document;
const currentNumber = $.querySelector('.current');
const resultNumber = $.querySelector('.result');
const btns = $.querySelectorAll('button');
let string ='';




btns.forEach(items=>{
    items.addEventListener('click',(e)=>{   
        if(e.target.innerText === '='){
            string= String(eval(string));
            resultNumber.innerText = string;
        }
        else if(e.target.innerText === 'C'){
            string = '';
            currentNumber.value = 0;
        }
        else if(e.target.id === 'minus'){
            string = String(-eval(string));
            currentNumber.value = string;
        }
        else{
            if(currentNumber.value === '0'){
                currentNumber.value = '';
            }
            string += e.target.innerText;
            currentNumber.value = string;
            resultNumber = string;
            
        }
    });
});