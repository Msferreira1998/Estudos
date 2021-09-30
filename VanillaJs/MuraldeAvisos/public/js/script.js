document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

function updatePosts(){

    fetch("http://192.168.10.113:3000/api/all").then(res =>{
        return res.json()
    }).then(json=>{
        let postElements = '';
        let posts = JSON.parse(json)

        posts.forEach(post => {
            let postElement = `<div id=${post.id} class="card mb-2">
            <h3 class="card-header">${post.title}</h3>
            <p class="card-body card-text">${post.description}</p>
            </div>`
            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements
    })

}
function newPosts(){
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value

    let post = {title, description};

    const option = {
        method:"POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://192.168.10.113:3000/api/new", option).then(res=>{
        console.log(res)
        updatePosts();
        document.getElementById('title').value = ""
        document.getElementById('description').value = ""
    })
}