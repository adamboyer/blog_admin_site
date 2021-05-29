const editButtons = document.querySelectorAll(".edit_button")



// Trimming the blog text and onload
window.onload = (e) => {
    const posts = document.querySelectorAll(".blog_text")
    posts.forEach((post) => {
        post.innerHTML = post.innerHTML.slice(0,20) + "..."
    })
}

// Adding event listeners for each edit button
editButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        window.location.href = `http://127.0.0.1:3000/edit/${e.target.parentElement.id}`
        
    })
})

