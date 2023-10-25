const $ = document;
const currentNumber = $.querySelector('.current');
const resultNumber = $.querySelector('.result');
const deleted = $.querySelector('.delete');
const plusMin = $.querySelector('.plus_min');
const percent = $.querySelector('.percent');
const numbers = $.querySelectorAll('.number');
const division = $.querySelector('.division');
const multi = $.querySelector('.multi');
const mines = $.querySelector('.mines');
const plus = $.querySelector('.plus');
const equal = $.querySelector('.equal');


numbers.forEach(num=>{
    num.addEventListener('click',(e)=>{   
        let content = e.target.innerText;
        if(currentNumber.innerText === '0'){
            currentNumber.innerText = '';  
        }
        currentNumber.innerText += content;
    });
});

division.addEventListener('click',(e)=>{
    let content = e.target.innerText;
    if(currentNumber.innerText === '0'){
        currentNumber.innerText = '';  
    };
    currentNumber.innerText+=content;
});

multi.addEventListener('click',(e)=>{
    let content = e.target.innerText;
    if(currentNumber.innerText === '0'){
        currentNumber.innerText = '';  
    };
    currentNumber.innerText+=content;
});


plus.addEventListener('click',(e)=>{
    let content = e.target.innerText;
    if(currentNumber.innerText === '0'){
        currentNumber.innerText = '';  
    };
    currentNumber.innerText+=content;
});

mines.addEventListener('click',(e)=>{
    let content = e.target.innerText;
    if(currentNumber.innerText === '0'){
        currentNumber.innerText = '';  
    };
    currentNumber.innerText+=content;
});

equal.addEventListener('click',(e)=>{
    let content = e.target.innerText;
    if(currentNumber.innerText === '0'){
        currentNumber.innerText = '';  
    };
    currentNumber.innerText+=content;
});


deleted.addEventListener('click',()=>{
    currentNumber.innerText = 0 ;
});