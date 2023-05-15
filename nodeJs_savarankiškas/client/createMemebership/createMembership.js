const membershipForm = document.querySelector('form');

membershipForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const membership = {
    name: e.target.name.value,
    price: e.target.price.value,
    description: e.target.description.value,
  };

  console.log(membership);

  fetch('http://localhost:3000/memberships', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...membership }),
  }).then(() => {
    window.location.href =
      '/nodeJs_savarankiškas/client/memberships/index.html';
  });
});
