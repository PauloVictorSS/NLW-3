// create map
const map = L.map('mapid').setView([-22.8626587,-47.2146692], 15.5);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup', 
    minWidth: 200,
    minHeight: 200
}).setContent('Lar das meninas <a href="orphanage.hmtl?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')

// create and add marker
L.marker([-22.8626587,-47.2146692], { icon }).addTo(map)
.bindPopup(popup)