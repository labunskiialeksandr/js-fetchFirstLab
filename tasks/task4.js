// Задача 4: Видалити користувача
function deleteUser(id) {
  // Повертаємо проміс від fetch без обробки .then(), 
  // щоб тест міг сам отримати об'єкт response і перевірити response.status
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  });
}

console.log(deleteUser(1));

module.exports = deleteUser;