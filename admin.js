// Contraseña de acceso (puedes cambiarla luego)
const ADMIN_PASS = "admin123";
// Usuarios simulados
let users = [
    { nombre: "Juan Pérez", telefono: "3101112233" },
    { nombre: "Ana Gómez", telefono: "3202223344" },
    { nombre: "Carlos Ruiz", telefono: "3003334455" }
];
function adminLogin(e) {
    e.preventDefault();
    const pass = document.getElementById('adminPassword').value;
    if(pass === ADMIN_PASS) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('userSection').style.display = 'block';
        renderUsers();
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
    return false;
}
function renderUsers() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach((user, idx) => {
        const row = document.createElement('div');
        row.className = 'user-row';
        row.innerHTML = `<span class="user-info">${user.nombre} - ${user.telefono}</span><button class="delete-btn" onclick="deleteUser(${idx})">Eliminar</button>`;
        userList.appendChild(row);
    });
    if(users.length === 0) {
        userList.innerHTML = '<div style="text-align:center;color:#888;">No hay usuarios registrados.</div>';
    }
}
function deleteUser(idx) {
    if(confirm('¿Seguro que deseas eliminar este usuario?')) {
        users.splice(idx, 1);
        renderUsers();
    }
}
