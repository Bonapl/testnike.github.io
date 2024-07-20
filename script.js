// script.js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const itemList = document.getElementById('itemList');
    const items = itemList.getElementsByTagName('li');

    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        
        for (let i = 0; i < items.length; i++) {
            const itemId = items[i].id;
            if (itemId.toLowerCase().includes(filter)) {
                items[i].classList.add('visible');
            } else {
                items[i].classList.remove('visible');
            }
        }
    });
});
