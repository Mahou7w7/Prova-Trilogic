fetch('users.json').then(function(response){
    return response.json();
}).then(function(users){
    let placeholder = document.querySelector("#data-output");
    let out = "";
  
    for(let user of users){
       
        out +=`
        <tr>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.company.name}</td>
        </tr>
        `;
        
    }
    placeholder.innerHTML= out;
})


 
