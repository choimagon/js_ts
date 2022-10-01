function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(`${lat} : ${lng}`);
}
function onGeoError(){
    console.log("Geo Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);