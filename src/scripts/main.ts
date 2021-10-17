const API_URL: string = "https://drednot.io/api/";
const tableBody = <HTMLTableElement>document.getElementById("tableBody");

interface Ship {
    ship_name: string
    score: number,
    color: number,
    hex_code: string,
}

interface APIResponse {
    ships: Ship[]
}

let value: Ship;
function getShips() {
    fetch(`${API_URL}/scoreboard`)
        .then((data: Response) => data.json())
        .then((data: APIResponse) => data.ships)
        .then(function (data: Ship[]) {
            // return data
            for (value of data) {
                console.log(value);
                const ship_name: string = value.ship_name;
                const score: string = value.score.toString();
                const color: string = value.color.toString();
                const hex_code: string = value.hex_code;

                var row = tableBody.insertRow(-1);

                for (let val of [ship_name, score, color, hex_code]) {
                    var cell = row.insertCell(-1);
                    cell.innerText = val;
                }
            }
        })
}
