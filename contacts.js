// Ждём загрузки страницы
document.addEventListener("DOMContentLoaded", function () {

    // 🔑 Инициализация EmailJS (вставь свой ключ)
    emailjs.init({
        publicKey: "FlxHXurEyYVLzzuEW"
    });

    // Находим элементы
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("submit-btn");
    const statusBox = document.getElementById("form-status");

    // Если формы нет — ничего не делаем
    if (!form) return;

    // Отправка формы
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // ⏳ Состояние загрузки
        submitBtn.disabled = true;
        submitBtn.textContent = "Відправляємо...";
        statusBox.className = "form-status";
        statusBox.textContent = "";

        // 🚀 Отправка через EmailJS
        emailjs.sendForm(
            "service_6rhkjrc",   // 👈 вставь Service ID
            "template_wcxtu9s",  // 👈 вставь Template ID
            form
        )
        .then(function () {
            // ✅ Успешно
            statusBox.className = "form-status success";
            statusBox.textContent = "✅ Дякуємо! Ваш запит надіслано.";

            form.reset();
        })
        .catch(function (error) {
            // ❌ Ошибка
            statusBox.className = "form-status error";
            statusBox.textContent = "❌ Помилка. Спробуйте ще раз.";

            console.error("EmailJS error:", error);
        })
        .finally(function () {
            // 🔄 Возврат кнопки
            submitBtn.disabled = false;
            submitBtn.textContent = "Надіслати запит";
        });
    });

});