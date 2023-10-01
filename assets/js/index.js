const lock = document.querySelectorAll(".lock");
const url = "../../assets/jsons/stations.json";
const url2 = "../../assets/jsons/BE.NMBS.008812005.json";
const url3 = "../../assets/jsons/BE.NMBS.008841004.json";
const url4 = "../../assets/jsons/BE.NMBS.008863008.json";
const url5 = "../../assets/jsons/BE.NMBS.008872009.json";
const url6 = "../../assets/jsons/BE.NMBS.008881000.json";
const url7 = "../../assets/jsons/BE.NMBS.008885001.json";
const url8 = "../../assets/jsons/BE.NMBS.008885704.json";
const url9 = "../../assets/jsons/BE.NMBS.008892007.json";
const container = document.querySelector(".container");
const footer = document.querySelector("footer");

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
  let departuresData = [];
  let departuresData2 = [];
  let departuresData3 = [];
  let departuresData4 = [];
  let departuresData5 = [];
  let departuresData6 = [];
  let departuresData7 = [];
  let departuresData8 = [];

  const hourParser = (hour) => {
    const date = new Date(hour * 1000);
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const heureFormatee = `${heures}:${minutes}`;

    return heureFormatee;
  };

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      stationData = data.station;
    });
  stationData = stationData.slice(0, 20);

  await fetch(url2)
    .then((res) => res.json())
    .then((data2) => {
      departuresData = data2.departures.departure;
    });

  await fetch(url3)
    .then((res) => res.json())
    .then((data3) => {
      departuresData2 = data3.departures.departure;
    });
  await fetch(url4)
    .then((res) => res.json())
    .then((data4) => {
      departuresData3 = data4.departures.departure;
    });
  await fetch(url5)
    .then((res) => res.json())
    .then((data5) => {
      departuresData4 = data5.departures.departure;
    });
  await fetch(url6)
    .then((res) => res.json())
    .then((data6) => {
      departuresData5 = data6.departures.departure;
    });
  await fetch(url7)
    .then((res) => res.json())
    .then((data7) => {
      departuresData6 = data7.departures.departure;
    });
  await fetch(url8)
    .then((res) => res.json())
    .then((data8) => {
      departuresData7 = data8.departures.departure;
    });
  await fetch(url9)
    .then((res) => res.json())
    .then((data9) => {
      departuresData8 = data9.departures.departure;
    });

  for (let i = 0; i < 20 && i < stationData.length; i++) {
    const station = stationData[i];
    const departures = departuresData[i];
    const departures2 = departuresData2[i];
    const departures3 = departuresData3[i];
    const departures4 = departuresData4[i];
    const departures5 = departuresData5[i];
    const departures6 = departuresData6[i];
    const departures7 = departuresData7[i];
    const departures8 = departuresData8[i];
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
            <td data-title="Destination">${departures.station}</td>
            <td data-title="Départ">${hourParser(departures.time)}</td>
            <td data-title="Quai">${departures.platform}</td>
            <td data-title="Retard">${
              departures.delay !== undefined ? departures.delay + " min" : "0"
            }</td>
          </tr>
          <tr>
          <td data-title="Destination">${departures2.station}</td>
          <td data-title="Départ">${hourParser(departures2.time)}</td>
          <td data-title="Quai">${departures2.platform}</td>
          <td data-title="Retard">${
            departures2.delay !== undefined ? departures2.delay + " min" : "0"
          }</td>
        </tr>
        <tr>
        <td data-title="Destination">${departures3.station}</td>
        <td data-title="Départ">${hourParser(departures3.time)}</td>
        <td data-title="Quai">${departures3.platform}</td>
        <td data-title="Retard">${
          departures3.delay !== undefined ? departures3.delay + " min" : "0"
        }</td>
      </tr>
      <tr>
      <td data-title="Destination">${departures4.station}</td>
      <td data-title="Départ">${hourParser(departures4.time)}</td>
      <td data-title="Quai">${departures4.platform}</td>
      <td data-title="Retard">${
        departures4.delay !== undefined ? departures4.delay + " min" : "0"
      }</td>
    </tr>
      <tr>
      <td data-title="Destination">${departures5.station}</td>
      <td data-title="Départ">${hourParser(departures5.time)}</td>
      <td data-title="Quai">${departures5.platform}</td>
      <td data-title="Retard">${
        departures5.delay !== undefined ? departures5.delay + " min" : "0"
      }</td>
    </tr>
      <tr>
      <td data-title="Destination">${departures6.station}</td>
      <td data-title="Départ">${hourParser(departures6.time)}</td>
      <td data-title="Quai">${departures6.platform}</td>
      <td data-title="Retard">${
        departures6.delay !== undefined ? departures6.delay + " min" : "0"
      }</td>
    </tr>
      <tr>
      <td data-title="Destination">${departures7.station}</td>
      <td data-title="Départ">${hourParser(departures7.time)}</td>
      <td data-title="Quai">${departures7.platform}</td>
      <td data-title="Retard">${
        departures7.delay !== undefined ? departures7.delay + " min" : "0"
      }</td>
    </tr>
      <tr>
      <td data-title="Destination">${departures8.station}</td>
      <td data-title="Départ">${hourParser(departures8.time)}</td>
      <td data-title="Quai">${departures8.platform}</td>
      <td data-title="Retard">${
        departures8.delay !== undefined ? departures8.delay + " min" : "0"
      }</td>
    </tr>
            </tbody>
          </table>
        </div>
      </details>
    `;
  }
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    footer.style.visibility = "visible";
  }
});
fetchStation();
