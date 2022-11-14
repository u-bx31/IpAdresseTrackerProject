import Location from '../images/icon-location.svg'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'
import L from 'leaflet'

const svgIcon = L.icon({
    iconUrl: `${Location}`,
    className: "",
});


const Map = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={20} zoomControl={false} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position='bottomright'/>
            <Marker position={[51.505, -0.09]} icon={svgIcon}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;