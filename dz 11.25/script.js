document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Формируем сообщение
    const message = `Привет, ${name}! Я тебя ${rememberMe ? 'запомнил' : 'не запомнил'}.`;

    // Выводим сообщение
    document.getElementById('message').textContent = message;
});