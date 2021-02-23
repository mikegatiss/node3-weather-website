console.log('Clientside file is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'Loading'

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if(data.error){
                messageOne.textContent = 'Error'
                return console.log(data.error)
            }

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    })


    console.log(location)
})