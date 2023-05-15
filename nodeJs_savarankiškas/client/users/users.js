const sort = document.querySelector('.sorting');
const usersBox = document.querySelector('.users');
let sortType = document.querySelector('.sortType');

const renderList = (order) => {
  fetch(`http://localhost:3000/users/${order}`)
    .then((resp) => resp.json())
    .then((response) => {
      response.forEach((user) => {
        const userCard = document.createElement('div');
        const name = document.createElement('h3');
        const email = document.createElement('p');
        const membership = document.createElement('p');
        const ip = document.createElement('p');

        name.textContent = `${user.name} ${user.surname}`;
        email.textContent = `Email address: ${user.email}`;

        membership.textContent = `Membership: ${user.membership.name}`;

        ip.textContent = `IP: ${user.ip}`;
        userCard.classList.add('userCard');

        userCard.append(name, email, membership, ip);
        usersBox.append(userCard);
      });
    });
};

renderList('asc');

sort.addEventListener('click', () => {
  usersBox.textContent = '';
  if (sortType.textContent === 'ASC') {
    renderList('dsc');
    sortType.textContent = 'DSC';
  } else {
    renderList('asc');
    sortType.textContent = 'ASC';
  }
});
