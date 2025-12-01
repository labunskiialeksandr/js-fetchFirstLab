// Задача 1: Отримати список користувачів
function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json());
}

console.log(fetchUsers());

module.exports = fetchUsers;