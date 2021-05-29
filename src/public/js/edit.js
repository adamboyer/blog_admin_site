async function saveEdit(id, body) {
    const response = await fetch(`../posts/${id}`, {
        method: 'PATCH',
         mode: 'cors', 
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(body)
        })
    const data = await response.json()
    return data;
}

const editForm = document.getElementById("edit_form")
const textField = document.getElementById('text_input')
const titleField = document.getElementById('title_input')
editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.submitter.id)
    const body = {
        'title' : titleField.value,
        'text' : textField.value
    }
    console.log(body)
    if(e.submitter.id == "save_changes"){ 
        console.log('You would like to save changes')
        saveEdit(e.target.parentElement.id, body)
        .then(
            alert('Changes Saved!'),
            location.href = '../'
        ).catch(
            alert('Unable to save changes.')
            )
    } else if(e.submitter.id == "reset") {
       location.reload()
        
    } else if ( e.submitter.id == "delete_post") {
        console.log("You would like to delete the post")
    } else if (e.submitter.id == "exit") {
        location.href = '../'
    }
    
})

// const formButtons = document.querySelectorAll('button')

// formButtons.forEach((button) => {
//     button.addEventListener('click', (e) => {
//         alert(e.target.id)
//     })
// })