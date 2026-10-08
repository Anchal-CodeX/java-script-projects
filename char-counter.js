let button1 = document.createElement('button')
let input = document.createElement('input')
let input2 = document.createElement('input')
let body = document.querySelector('body')
const button2 = document.createElement('button')
let p = document.createElement('p')
document.body.appendChild(input)
document.body.appendChild(input2)
document.body.appendChild(button1)
document.body.appendChild(button2)
document.body.appendChild(p)
body.style.display = 'grid'
body.style.gap = '20px'
button1.innerText = 'submit'
button2.innerText = 'clear'
const name = input.placeholder = 'enter your name'
const email = input2.placeholder = 'enter your email'
const contacts = []
button1.addEventListener('click', () => {
      contacts.push({ name: input.value, email: input2.value })
      p.innerText = contacts
            .map(contact => `Name: ${contact.name}, Email: ${contact.email}`)
            .join('\n')
            
})
button2.addEventListener('click', () => {
      contacts.length = 0
      input.value = ''
      input2.value = ''
      p.innerText = ''
})