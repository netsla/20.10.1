// Принцип DRY - не повторяемся
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    render() {
        return `
            <div class="user">
                <p>Имя: ${this.name}</p>
                <p>Email: ${this.email}</p>
            </div>
        `;
    }
}

// Принцип SOLID - один класс - одна ответственность
class UserList {
    constructor() {
        this.users = [];
        this.container = document.getElementById('users-list');
    }
    
    addUser(user) {
        this.users.push(user);
        this.render();
    }
    
    render() {
        this.container.innerHTML = '';
        this.users.forEach(user => {
            this.container.insertAdjacentHTML('beforeend', user.render());
        });
    }
}

// Принцип YAGNI - не добавляем лишнего
const userList = new UserList();

document.getElementById('add-user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        const newUser = new User(name, email);
        userList.addUser(newUser);
        
        // Очистка формы
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
});
