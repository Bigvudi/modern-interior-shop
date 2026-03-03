// Получаем элементы
const sortButton = document.querySelector('.filter-button'); // Используем querySelector для одного элемента
const filterForm = document.querySelector('.filter-form'); // Используем querySelector с точкой

// Добавляем обработчик события
sortButton.addEventListener('click', () => {
    filterForm.classList.toggle('hidden'); // Исправлено с 'hiden' на 'hidden'
});