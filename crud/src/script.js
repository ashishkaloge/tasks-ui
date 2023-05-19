const url= 'http://localhost:3000/emp';
fetch(url)
.then(response => response.json())
      .then(data => {
        const table = document.getElementById('table');
        let tableHTML = '';

        // Generate table header row
        tableHTML += '<tr>';
        for (const key in data[0]) {
          tableHTML += `<th>${key}</th>`;
        }
        tableHTML += '</tr>';

        // Generate table data rows
        data.forEach(obj => {
          tableHTML += '<tr>';
          for (const key in obj) {
            tableHTML += `<td>${obj[key]}</td>`;
          }
          tableHTML += '</tr>';
        });

        table.innerHTML = tableHTML;
      })
      .catch(error => console.error('Error:', error));