// 1. Находим нужные элементы на странице по их ID
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatWindow = document.getElementById('chat-window');

// 2. Функция для обработки и отправки сообщения
function sendMessage() {
    // Получаем текст из инпута и обрезаем пробелы по краям
    const messageText = messageInput.value.trim();
    
    // Проверяем, чтобы пользователь не отправлял пустую строку
    if (messageText !== "") {
        // Создаем новый элемент (например, div) для текста сообщения
        const messageElement = document.createElement('div');
        
        // Добавляем класс для стилизации (если нужно)
        messageElement.classList.add('chat-message'); 
        
        // Записываем текст из инпута в созданный элемент
        messageElement.textContent = messageText;
        
        // Добавляем новое сообщение внутрь окна чата
        chatWindow.appendChild(messageElement);
        
        // ОЧИЩАЕМ ПОЛЕ ВВОДА (согласно условию задания)
        messageInput.value = "";
        
        // (Опционально) Автоматически прокручиваем чат вниз
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

// 3. Вешаем обработчик события клика на кнопку «Отправить»
sendButton.addEventListener('click', sendMessage);

// (Дополнительно) Добавляем отправку сообщения по нажатию на клавишу Enter
messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
