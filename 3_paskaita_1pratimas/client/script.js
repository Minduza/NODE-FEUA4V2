fetch("http://localhost:3000")
.then((resp) => resp.json())
.then((response) => {

    console.log("Working")
    const table = document.querySelector('tbody');

    response.forEach((person)=>{
        const tableRow = document.createElement('tr');
        const tdFirstName = document.createElement('td');
        const tdLastName = document.createElement('td');
        const tdCity = document.createElement('td');
        const tdAddress = document.createElement('td');
        const tdZip = document.createElement('td');
        const tdPhone = document.createElement('td');
        const tdEmail = document.createElement('td');

        tableRow.append(tdFirstName, tdLastName, tdCity, tdAddress, tdZip, tdPhone, tdEmail)

        tdFirstName.textContent = person.firstName;
        tdLastName.textContent = person.lastName;
        tdCity.textContent = person.city;
        tdAddress.textContent = person.address;
        tdZip.textContent = person.zip;
        tdPhone.textContent = person.phone;
        tdEmail.textContent = person.email;

        table.append(tableRow)
    })
})
.then(
    ()=>{location.reload}
)