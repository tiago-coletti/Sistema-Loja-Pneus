let logins = [];
let currentEditIndex = null; // Índice do login sendo editado

// Função para lidar com o envio do formulário de criação
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

    logins.forEach(function(login, index) {
        const listItem = document.createElement("li");
        listItem.textContent = `Usuário: ${login.username}, Tipo: ${login.role}`;

        // Botão de excluir
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function() {
            logins.splice(index, 1);
            document.getElementById("consult-logins").click();
        });

        // Botão de editar
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", function() {
            openEditForm(index);
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        loginList.appendChild(listItem);
    });

    document.getElementById("logins-list").style.display = 'block';
});

// Função para abrir o formulário de edição com os dados do login
function openEditForm(index) {
    currentEditIndex = index;
    const login = logins[index];

    document.getElementById("edit-username").value = login.username;
    document.getElementById("edit-password").value = login.password;
    document.getElementById("edit-role").value = login.role;

    document.getElementById("edit-login-container").style.display = 'block';
}

// Função para salvar as alterações feitas no login
document.getElementById("edit-login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const updatedUsername = document.getElementById("edit-username").value;
    const updatedPassword = document.getElementById("edit-password").value;
    const updatedRole = document.getElementById("edit-role").value;

    logins[currentEditIndex] = { username: updatedUsername, password: updatedPassword, role: updatedRole };

    document.getElementById("edit-login-container").style.display = 'none';
    document.getElementById("consult-logins").click(); // Atualiza a lista de logins
});

// Função para cancelar a edição
document.getElementById("cancel-edit").addEventListener("click", function() {
    document.getElementById("edit-login-container").style.display = 'none';
});
