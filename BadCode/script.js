// Без DRY - повторяем код везде
function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        const usersList = document.getElementById('users-list');
        
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        
        const nameP = document.createElement('p');
        nameP.textContent = 'Имя: ' + name;
        userDiv.appendChild(nameP);
        
        const emailP = document.createElement('p');
        emailP.textContent = 'Email: ' + email;
        userDiv.appendChild(emailP);
        
        usersList.appendChild(userDiv);
        
        // Повторяем код для очистки формы
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
}

// Добавляем ненужные проверки
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (!name) {
        alert('Введите имя!');
        return false;
    }
    
    if (!email) {
        alert('Введите email!');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Неверный формат email!');
        return false;
    }
    
    return true;
}

function validateEmail(email) {
    // Сложный и избыточный код валидации
    const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Добавляем ненужные функции
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('error');
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

function logActivity(action) {
    console.log(`[${new Date().toLocaleString()}] Пользователь выполнил действие: ${action}`);
}

// Добавляем ненужные зависимости
const analytics = {
    trackEvent: function(eventName) {
        console.log(`Отслежено событие: ${eventName}`);
    }
};

// Инициализация
document.getElementById('add-user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        addUser();
        analytics.trackEvent('user_added');
        logActivity('добавил пользователя');
    } else {
        showError('Ошибка в форме!');
        logActivity('ошибка при добавлении пользователя');
    }
});

// Добавляем ненужные глобальные переменные
let users = [];
let formSubmitted = false;
let lastActivity = null;
let debugMode = true;

// Добавляем избыточный код
function formatUser(name, email) {
    return {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date(),
        updatedAt: null,
        isActive: true,
        isAdmin: false,
        permissions: {
            canRead: true,
            canWrite: false,
            canDelete: false
        }
    };
}

// Добавляем ненужные функции для каждого элемента
function clearNameInput() {
    document.getElementById('name').value = '';
}

function clearEmailInput() {
    document.getElementById('email').value = '';
}

// И еще много других ненужных функций и кода
