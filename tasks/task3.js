// Задача 3: Оновити дані користувача
function updateUser(id, updatedData) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => response.json());
}

console.log(updateUser(1, { name: 'New Name' }));

module.exports = updateUser;