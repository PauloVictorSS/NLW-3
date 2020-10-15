// create map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

const map = L.map('mapid', options).setView([-22.8626587,-47.2146692], 15.5);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


// create and add marker
L.marker([-22.8626587,-47.2146692], { icon }).addTo(map)

function selectImage(event){
    const button = event.currentTarget;

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    
    buttons.forEach((button) => {
        button.classList.remove("active")
    });

    //selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    //atualizar o container de image
    imageContainer.src = image.src;

    //adicionar a classe .active para este botao
    button.classList.add("active");
}