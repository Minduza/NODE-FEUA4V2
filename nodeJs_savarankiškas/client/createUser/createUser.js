const newUserForm = document.querySelector('form');
const planSelect = document.querySelector('#plan');

fetch('http://localhost:3000/memberships')
  .then((res) => res.json())
  .then((response) => {
    response.forEach((plan) => {
      const option = document.createElement('option');
      option.setAttribute('value', plan._id);
      option.textContent = plan.name;
      planSelect.append(option);
    });
  });

newUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const newUser = {
    name: e.target.fname.value,
    surname: e.target.lname.value,
    email: e.target.email.value,
    ip: '',
    service_id: e.target.plan.value,
  };

  await fetch('https://api.ipify.org')
    .then((res) => res.text())
    .then((ip) => {
      newUser.ip = ip;
    })
    .catch((err) => console.log(err));

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...newUser }),
  }).then(() => {
    window.location.href = '/nodeJs_savarankiškas/client/users/users.html';
  });
});
