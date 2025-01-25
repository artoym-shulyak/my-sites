// Функция для валидации формы
const validateForm = (event) => {
  event.preventDefault()

  const form = event.target
  const email = document.getElementById("email")
  const lastName = document.getElementById("last_name")
  const firstName = document.getElementById("first_name")

  // Скрываем все ошибки перед проверкой
  const errorItems = document.querySelectorAll(".fields__item._error")
  errorItems.forEach((item) => item.classList.remove("_error"))

  let isValid = true

  // Проверяем email
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    document.getElementById("email_error").classList.add("_error")
    email.closest(".fields__item").classList.add("_error")
    isValid = false
  }

  // Проверяем Last Name
  if (!lastName.value.trim()) {
    document.getElementById("last_name_error").classList.add("_error")
    lastName.closest(".fields__item").classList.add("_error")
    isValid = false
  }

  // Проверяем First Name
  if (!firstName.value.trim()) {
    document.getElementById("first_name_error").classList.add("_error")
    firstName.closest(".fields__item").classList.add("_error")
    isValid = false
  }

  // Если форма валидна, сбрасываем её
  if (isValid) {
    resetForm(form)
  }
}

// Функция сброса формы
const resetForm = (form) => {
  // Сбрасываем значения формы
  form.reset()

  const errorItems = document.querySelectorAll(".fields__item._error")
  errorItems.forEach((item) => item.classList.remove("_error"))
}

// Добавление валидации формы
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", validateForm)
}
