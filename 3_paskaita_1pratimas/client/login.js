const loginForm = document.querySelector('#formLogin');
const message = document.querySelector('.message');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const username = e.target.email.value;
    const password = e.target.password.value;

    fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then((resp)=>resp.json())
    .then((response)=>{
        console.log(response)
        message.textContent = response.message;
    }).catch((error)=> console.log(error))
})