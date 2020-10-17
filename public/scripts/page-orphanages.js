// create map
const map = L.map("mapid").setView([-22.8626587, -47.2146692], 15.5);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//function to add markers
function addMarker({id, name, lat, lng}){

    //create popup overlay
    const popup = L.popup({
      closeButton: false,
      className: "map-popup",
      minWidth: 200,
      minHeight: 200,
    }).setContent(
      `${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg"></a>`
    );
    
    // create and add marker
    L.marker([lat, lng], { icon }).addTo(map).bindPopup(popup);

    console.log("foi");

}

const orphanagesSpan = document.querySelectorAll(".orphanages span")

orphanagesSpan.forEach(span => {

  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)

})