// create map
const map = L.map('mapid').setView([-22.8626587,-47.2146692], 15.5);

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [48, 58],
    iconAnchor: [29, 68]
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);


});

//add photo field
function addPhotoField(){
    
    //pick up photos container #images
    const container = document.querySelector("#images");

    //pick up container to duplic 
    const fieldsContainer = document.querySelectorAll(".new-upload");

    //realize the clonage of image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //checking if new field is clean, if yes, no add in images container
    if(newFieldContainer.children[0].value != ""){

        //clear the field before to add to container
        newFieldContainer.children[0].value="";

        //add the clonage to images container #images
        container.appendChild(newFieldContainer);
    }
}

//delete image field
function deleteField(event){
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll(".new-upload")

    //checking if there is more than one field container
    if(fieldsContainer.length > 1){
        
        //delete the parent field
        span.parentNode.remove();

    }else{

        //clear the image field
        span.parentNode.children[0].value="";
    }
}

//select yes or no
function toggleSelect(event){

    //remove the .active button class 
    document.querySelectorAll(".button-select button")
    .forEach( button => button.classList.remove('active') );

    //add the class .active in the clicked button
    const button = event.currentTarget
    button.classList.add("active");

    //get the clicked button 
    const input = document.querySelector("[name='open_on_weekends']");

    //update the value input hidden
    input.value = button.dataset.value;

}