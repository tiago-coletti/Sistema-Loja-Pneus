let logins = [];

// Função para lidar com o envio do formulário
document.getElementById("create-login-form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    logins.push({ username, password, role });
    document.getElementById("create-login-form").reset();

    alert("Login criado com sucesso!");
});

// Função para mostrar os logins criados
document.getElementById("consult-logins").addEventListener("click", function() {
    const loginList = document.getElementById("login-list-items");
    loginList.innerHTML = ''; 

    // Adiciona os logins na lista
    logins.forEach(function(login, index) {
        const listItem = document.createElement("li");
        listItem.textContent = `Usuário: ${login.username}, Tipo: ${login.role}`;

        // Cria o botão de excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            logins.splice(index, 1);
            document.getElementById("consult-logins").click();  // Simula um clique para atualizar a lista
        });

        // Adiciona o botão de excluir ao item da lista
        listItem.appendChild(deleteButton);
        loginList.appendChild(listItem);
    });

    // Exibe a lista de logins
    document.getElementById("logins-list").style.display = 'block';
});
