// let button = document.createElement('button');
// const body = document.querySelector('body');
// let img = document.createElement('img')
// button.innerText = 'Click Me';
// document.body.appendChild(button);
// button.addEventListener('click', function() {
//    button.innerText = 'Hello JavaScript';
//    body.style.backgroundColor = 'lightblue';
// });

//2 background color change with 2 buttons

// let button1 = document.createElement('button')
// let button2 = document.createElement('button')
// button1.innerText = 'click'
// button2.innerText = 'click'
// let body = document.querySelector('body')
// document.body.appendChild(button1)
// document.body.appendChild(button2)
// button1.addEventListener('click', () => {
//      body.style.backgroundColor = 'lightblue';
// })
// button2.addEventListener('click', () => {
//     body.style.backgroundColor = 'lightgreen';
// })

//3 increment and decrement button
// let button1 = document.createElement('button')
// let button2 = document.createElement('button')
// let div = document.createElement('div')
// let body = document.querySelector('body')
// document.body.appendChild(button1)
// document.body.appendChild(div)
// document.body.appendChild(button2)
// button1.innerText = 'inc'
//  button2.innerText = 'dec'
//  body.style.display = 'flex'
//  body.style.gap = '20px'

//  let count = div.innerText = 0

//  button1.addEventListener('click', () => {
//     count++
//     div.innerText = count
//  })
//  button2.addEventListener('click', () => {
//     count--
//      div.innerText = count
//  })


//4 count inpute ivent

//  let input = document.createElement("input");
//  let text = document.createElement("p");

//  document.body.appendChild(input);
//  document.body.appendChild(text);

//  input.addEventListener("input", function () {
//     let count = input.value.length;
//     text.innerText = count;
//  });

//5 mouse event

// let box = document.createElement("div");
// box.style.width = "200px";
// box.style.height = "200px";
// box.style.backgroundColor = "lightblue";
// document.body.appendChild(box);
// box.addEventListener("mouseover", function () {
//     box.innerText = "mouse enter"
// })
// box.addEventListener("mouseout", function () {
//     box.innerText = "mouse leave"
// })

//6 double click event

let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = 'click'
button.addEventListener("click", () => {
    button.innerText = 'single click'
})
button.addEventListener('dblclick', () => {
     button.innerText = 'double click'
})