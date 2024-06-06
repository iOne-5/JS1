const userNames = ["Іван", "Тарас", "Петро", "Давид", "Катерина"];

const userList = document.getElementById('userList');

userNames.forEach(name => {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    listItem.addEventListener('click', () => {
        alert(`Hello, ${name}`);
    });
    userList.appendChild(listItem);
});
