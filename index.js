// Add your code here
function submitData(name, email){

    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name: `${name}`,
            email:`${email}`            
        })
    })
    .then(res => res.json())
    .then(data => {
        let p = document.createElement('p')
        p.textContent = data.id
        document.querySelector('body').append(p)
    })
    .catch(function(error){
        alert(error)
        let errorMessage = document.createElement("h1")
        errorMessage.textContent = error.message
        document.querySelector("body").append(errorMessage)
    })
}    
