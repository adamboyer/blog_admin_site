async function createPost(body) {
    const respone = await fetch('../posts', {
        method: 'POST',
        mode: 'cors', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    const data = await respone.json()
    return data
}

const createForm = document.getElementById("create_form")
const textField = document.getElementById("text_input")
const titleField = document.getElementById("title_input")

createForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const body = {
        'title': titleField.value,
        'text' : textField.value
    }

    if(e.submitter.id == "create_post"){
        createPost(body)
        .then(
            alert('Post Created!'),
            location.href = '../'
        )
        .catch(
            alert('Unable to create post')
        )
    } else if(e.submitter.id == "exit"){
        location.href = '../'
    }
})