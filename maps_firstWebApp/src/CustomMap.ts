import { } from 'googlemaps';

const mapOpts = {
    zoom: 1,
    center: new google.maps.LatLng(0, 0),
};


export class CustomMap {

    private googleMap: google.maps.Map;

    constructor(elementId: string){
        this.googleMap = new google.maps.Map(document.getElementById(elementId), mapOpts);
    }

    addMarker(coords: google.maps.LatLngLiteral, infoWindowContent: string): void
    {
        const marker = new google.maps.Marker({map: this.googleMap, position: coords});

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({content: infoWindowContent});
            infoWindow.open(this.googleMap, marker);
        });
    }

}