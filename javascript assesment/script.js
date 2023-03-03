let save = document.getElementById("save-btn");
save.addEventListener('click', (e) => {
    let user = document.getElementById("username").value;
    let description = document.getElementById("description").value;
    let status = document.getElementById("dropdown-select").value;
    let rate = document.getElementById("rate").value;
    let balance = document.getElementById("balance").value;
    let deposit = document.getElementById("deposit").value;

    const url = "http://localhost:3000/data";

    //Post request details find here
    e.preventDefault();
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            user, description, status, rate, balance, deposit
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json));
}
)
//Get request details find here
fetch('http://localhost:3000/data')
    .then(response => response.json()) // parse the response as JSON
    .then(data => {
        // creating table
        var table = document.createElement("table");
        table.setAttribute("id", "mytable")

        //header of the table
        var headerRow = table.insertRow();

        headerRow.setAttribute("class", "table-header")

        for (var key in data[0]) {
            var headerCell = headerRow.insertCell();
            headerCell.innerHTML = key;
        }

        // table rows starts from here
        for (var i = 0; i < data.length; i++) {
            var row = table.insertRow();

            for (var key in data[i]) {
                var cell = row.insertCell();
                cell.innerHTML = data[i][key];
            }
        }

        // append table to main
        const main = document.querySelector("main");
        main.appendChild(table)

        // adding delete button
        for (var i = 1; i < table.rows.length; i++) {
            var cell = table.rows[i].insertCell(-1);
            var button = document.createElement("button");

            button.style = "background-color: #D12953";
            button.setAttribute("class", "user-action")
            button.innerHTML = "Delete";
            button.onclick = function () {
                

                fetch(`http://localhost:3000/data${data[key]}`,
                    {
                        method: 'DELETE'
                    })
                var row = this.parentNode.parentNode;
                row.parentNode.removeChild(row);
            };
            cell.appendChild(button);
        }

        // adding edit button
        for (var i = 1; i < table.rows.length; i++) {
            var cell = table.rows[i].insertCell(-1);
            var button = document.createElement("button");

            button.setAttribute("class", "user-action")
            button.style = "background-color: #A1A9B8";
            button.innerHTML = "Edit";

            button.onclick = function () {

            };
            cell.appendChild(button);
        }
    })

