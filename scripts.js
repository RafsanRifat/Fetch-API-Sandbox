document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUser').addEventListener('click', getUser);
const user_data = document.getElementById('Users')
let output

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