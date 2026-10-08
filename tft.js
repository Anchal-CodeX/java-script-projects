let button1 = document.createElement('button')
let body = document.querySelector('body')
 button1.innerText = 'darkmode'
 body.innerText ="hello"
 body.style.padding = '30px'
 button1.innerText = 'darkmode'
 body.style.gap = '30px'
 document.body.appendChild(button1)
 button1.addEventListener('click', () => {
    if(button1.innerText === 'darkmode'){
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    button1.innerText = 'normal mode'}
    else{
         body.style.backgroundColor = 'white'
    body.style.color = 'black'
    button1.innerText = 'darkmode'
    }

 })
 

