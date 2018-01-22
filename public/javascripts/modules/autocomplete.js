import { ADDRGETNETWORKPARAMS } from "dns";

function autocomplete(input, latInput, lngInput){
    //console.log(input, latInput, lngInput);
    if(!input)return; //skip this fn from running if there is not input on the page.
    const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', ()=>{
        const place = dropdown.getplace();
        
    })
}

export default autocomplete;