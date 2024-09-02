document.getElementById('email').addEventListener('click', function() {
    const emailText = this.textContent;

    // Создаем временный элемент для копирования текста
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // Выделяем текст и копируем его в буфер обмена
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для мобильных устройств
    document.execCommand('copy');

    // Удаляем временный элемент
    document.body.removeChild(tempInput);

    // Показываем уведомление
    const notification = document.getElementById('copyNotification');
    notification.classList.add('show');

    // Убираем уведомление через 2 секунды
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
});