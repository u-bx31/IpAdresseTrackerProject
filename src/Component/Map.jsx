import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet'

import MarkerPostion from './MarkerPostion';


const Map = ({info}) => {
    var position = [51.505, -0.09];
    if(typeof(info) !== 'undefined'){
        const infoPosition = info[0].location;
        position = [infoPosition.lat,infoPosition.lng];
    }

    return (
        <MapContainer center={position} zoom={15} zoomControl={false} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position='bottomright'/>
            <MarkerPostion position={position}/>

        </MapContainer>
    );
}

export default Map;