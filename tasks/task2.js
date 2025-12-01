// Задача 2: Створити нового користувача
function createUser(user) {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json());
}

console.log(createUser({name: "Sam", email: "fjsnfkjns2342@gmail.com"}));

module.exports = createUser;