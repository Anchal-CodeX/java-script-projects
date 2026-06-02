// const form = document.quaryselecter('form');

// form.addEventlistener('submit',(e)=>{
//     e.preventDefault();
//     const boy = document.getElementById("boy");
//     const Girl = document.getElementById("Girl");

//     const L1 = boy.value.length;
//     const L2 = Girl.value.length;

//     const result = Math.pow(L1 + L2 ,3)%101;

//     document.querySelector('h2').textContent = `Result: ${result}%`;
//     form.reset();
// });

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const boy = document.getElementById("boy");
    const Girl = document.getElementById("Girl");

    const L1 = boy.value.length;
    const L2 = Girl.value.length;

    const result = Math.pow(L1 + L2, 3) % 101;

    document.querySelector('h2').textContent = `Result: ${result}%`;

    form.reset();
});