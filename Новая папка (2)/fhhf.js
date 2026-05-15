// Изменение текста в окошке
function changeHeroText(){
    document.getElementById("hero-title").textContent = 
    "Ваше открытие в сфере тату"
}

// хуйня из хтмл окно типо лол (это контейнеры)
var modalOverlay = document.getElementById("modal-overlay");
var modalTitle = document.getElementById("modal-title");
var modalInfo = document.getElementById("modal-info");
var modalPrice = document.getElementById("modal-price");
var modalImg = document.getElementById("modal-img");
var modalClose = document.getElementById("modal-close");

document.getElementById("tours-grid").addEventListener("click", function(event){
    var card = event.target.closest(".tour-card");

    if (!card){
        return;
    }

    // хуйня из карточки (данные)
    var title = card.getAttribute("data-title");
    var info = card.getAttribute("data-info");
    var price = card.getAttribute("data-price");
    var img = card.getAttribute("data-img");

    // впихнули данные в контейнеры
    modalTitle.textContent = title;
    modalInfo.textContent = info;
    modalPrice.textContent = price;
    modalImg.src = img;
    modalOverlay.classList.add("active");

    // выключение хуйни с помолщью крестика
    modalClose.addEventListener("click", function(event){
        modalOverlay.classList.remove("active");
    })

    // выключение окна с помощью тыканья куда то
    modalOverlay.addEventListener("click", function(event){
        if (event.target === modalOverlay)
            {
                modalOverlay.classList.remove("active");
            }
    })
})


// Заполнение анкеты и валидация

document.getElementById("tour-form").addEventListener("submit", function(event){
    event.preventDefault();

    let nameInput = document.getElementById("name");
    let phoneInput = document.getElementById("phone");
    let messageInput = document.getElementById("message");
    let nameError = document.getElementById("name-error");
    let phoneError = document.getElementById("phone-error");
    let messageError = document.getElementById("message-error");
    let result = document.getElementById("result");

    nameError.value = "";
    phoneError.value = "";
    messageError.value = "";
    result.textContent = "";

    let hasError = false;
    let nameValue = nameInput.value.trim();
    let phoneValue = phoneInput.value.trim();
    let messageValue = messageInput.value.trim();

    if (nameValue === "")
    {
        nameError.textContent = "Введите имя";
        hasError = true;
    }

    if (phoneValue === "")
    {
        phoneError.textContent = "Введите номер телефона";
        hasError = true;
    }
    else if (!phoneValue.startsWith("+7") || phoneValue.lenght < 12)
    {
        phoneError.textContent = "Введите телефон в формате: +7-___-___-__-__";
        hasError = true;
    }

    if (messageValue === "")
    {
        messageError.textContent = "Введите сообщение";
        hasError = true;
    }
    else if (messageValue < 10)
    {
        messageError.textContent = "Введите подробнее";
        hasError = true;
    }

    if(hasError)
    {
        return;
    }

    result.innerHTML = "Спасибо, <strong>" + nameValue + "</strong.>.Мы подберем чото там";
    
    

    nameInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";
    result = "";

    document.getElementById("destination").value = "";
})

// Показ и скрытие контактов
function toggleContacts(){
    let block = document.getElementById("contacts-block");
    if (block.style.display === "block")
    {
        block.style.display = "none"
    }
    else
    {
        block.style.display = "block"
    }
}