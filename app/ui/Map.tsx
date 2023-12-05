'use client'

import L from 'leaflet'
import MarkerIcon from '@/node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '@/node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Map = () => {
    return (
        <div id='g-maps'>
            <MapContainer style={{
                height: '100dvh',
                width: '100dvw'
            }} center={[37.38082, -5.97932]} zoom={25}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker icon={
                    new L.Icon({
                        iconUrl: MarkerIcon.src,
                        iconRetinaUrl: MarkerIcon.src,
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: MarkerShadow.src,
                        shadowSize: [41, 41],
                        keyboard: false,
                    
                    })
                } position={[37.38082, -5.97932]}>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map