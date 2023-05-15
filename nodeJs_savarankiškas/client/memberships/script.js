/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
fetch('http://localhost:3000/memberships')
  .then((resp) => resp.json())
  .then((response) => {
    const membershipPlans = document.querySelector('.membershipPlans');
    response.forEach((membership) => {
      const memberCard = document.createElement('div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const btnDiv = document.createElement('div');
      const btn = document.createElement('span');

      h3.textContent = `$${membership.price} ${membership.name}`;
      p.textContent = membership.description;
      btn.innerHTML = '<i class="bi bi-trash3-fill"></i>';

      btnDiv.append(btn);
      memberCard.append(h3, p, btnDiv);
      memberCard.classList.add('memberCard');
      btn.classList.add('btn');
      btnDiv.classList.add('btnDiv');
      membershipPlans.append(memberCard);

      btn.addEventListener('click', async () => {
        await fetch(`http://localhost:3000/memberships/${membership._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
          location.reload();
        });
      });
    });
  });
