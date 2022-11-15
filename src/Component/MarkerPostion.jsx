
import Location from '../images/icon-location.svg'
import { Marker, Popup, useMap, } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react';


const svgIcon = L.icon({
    iconUrl: `${Location}`,
    className: "",
    iconSize: [24, 40],
    iconAnchor: [12, 40],
});

const MarkerPostion = ({ position }) => {

    const map = useMap();
    useEffect(() => {
        map.flyTo(position, 15, { animate: true })
    }, [map, position])

    return (
        <Marker position={position} icon={svgIcon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    );
}

export default MarkerPostion;
