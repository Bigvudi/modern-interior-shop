// Получаем элементы
const sortButton = document.querySelector('.filter-button'); 
const filterForm = document.querySelector('.filter-form');


sortButton.addEventListener('click', () => {
    filterForm.classList.toggle('hidden'); // 
});