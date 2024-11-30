function toggleList() {
    const foodList = document.getElementById('food-list');
    if (foodList.classList.contains('d-none')) {
        foodList.classList.remove('d-none');
    } else {
        foodList.classList.add('d-none');
    }
}
