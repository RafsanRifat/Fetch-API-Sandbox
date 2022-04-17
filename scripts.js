document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUser').addEventListener('click', getUser);
const user_data = document.getElementById('Users')
document.getElementById('getPost').addEventListener('click', getPost);

// let output

function getUser(){

    // fetch('text.txt')
    // .then(function(res){
    //     return res.text()
    // })
    // .then(function(data){
    //     console.log(data)
    // })

    fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
        let output
        data.forEach((user) => {
             output +=   `
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.Name}</li>
                        <li>Desc: ${user.Desc}</li>
                    </ul>
            
            `;
            
        });
        user_data.innerHTML = output;
        document.getElementById('getUser').removeEventListener("click", getUser);  // It's allowing to get data only one time, when user will click
    })
    
}

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let output
        data.forEach((post) => {
            output += `
                    <div>
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
            
            `;
        });

        document.getElementById('Posts').innerHTML = output
        document.getElementById('Posts').removeEventListener("click", getUser);
    })
}