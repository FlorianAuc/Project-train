const lock = document.querySelectorAll(".lock");
const url = "../../assets/jsons/stations.json";
const container = document.querySelector(".container");

function handlelockClick(event) {
  event.preventDefault();

  lock.forEach((lock) => {
    lock.classList.remove("active");
  });

  event.target.classList.add("active");
}

lock.forEach((lock) => {
  lock.addEventListener("click", handlelockClick);
});

const fetchStation = async () => {
  let stationData = [];

  await fetch(url)
    .then((res) => res.json())
    .then((data) => (stationData = data.station));
  stationData = stationData.slice(0, 20);

  for (let i = 0; i < 20 && i < stationData.length; i++) {
    const station = stationData[i];

    container.innerHTML += `
      <details>
        <summary>${station.name}</summary>
        <div class="content">
          <table>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Départ</th>
                <th>Quai</th>
                <th>Retard</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td data-title="Destination">Paris Nord</td>
                <td data-title="Départ">15:50</td>
                <td data-title="Quai">?</td>
                <td data-title="Retard">10 min</td>
              </tr>
              <tr>
              <td data-title="Destination">Paris Nord</td>
              <td data-title="Départ">17:50</td>
              <td data-title="Quai">?</td>
              <td data-title="Retard">0 min</td>
            </tr>
            </tbody>
          </table>
        </div>
      </details>
    `;
  }
};

fetchStation();
