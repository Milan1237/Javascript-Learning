const tbody = document.querySelector('tbody');
let newRow = 0 ; 
function makeAnRow(){
    const row = document.createElement('tr');
    newRow++
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    const data3 = document.createElement('td');
    data1.innerText = `Row ${newRow} cell 1 `
    data2.innerText = `Row ${newRow} cell 2 `
    data3.innerText = `Row ${newRow} cell 3 `;
    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    tbody.appendChild(row);
}

document.getElementById('insert').addEventListener('click' , makeAnRow );
