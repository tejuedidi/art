import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const regions = [ // approx coordinates to match location
    {
        id: 1,
        name: "India", // 23 objects
        coordinates: [20.5937, 78.9629],
        route: "/art/India", // backend route (capitalize)
    },
    {
        id: 2,
        name: "China", // 32 objects
        coordinates: [35.8617, 104.1954],
        route: "/art/China",
    },
    {
        id: 3,
        name: "Japan", // 39 objects
        coordinates: [36.2048, 138.2529],
        route: "/art/Japan",
    },
    {
        id: 4,
        name: "Korea", // 1 object
        coordinates: [35.9078, 127.7669],
        route: "/art/Korea",
    },
    {
        id: 5,
        name: "Egypt", // 8 objects
        coordinates: [26.8206, 30.8025],
        route: "/art/Egypt",
    },
    {
        id: 6,
        name: "Greece", // 1 object
        coordinates: [39.0742, 21.8243],
        route: "/art/Greece",
    },
    {
        id: 7,
        name: "United Staes", // 34 objects
        coordinates: [36.721425, -101.496271],
        route: "/art/United States",
    },
    {
        id: 8,
        name: "Mexico", // 1 object
        coordinates: [23.6345, -102.5528],
        route: "/art/Mexico",
    },
    {
        id: 10,
        name: "Italy", // 37 object
        coordinates: [41.8719, 12.5674],
        route: "/art/Italy",
    },
];

export default function Map() {
    const navigate = useNavigate();

    const handlePinClick = (route) => {
        navigate(route);
    };

    return (
        <div className="map-container">
            <MapContainer center={[25, 0]} zoom={2} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {regions.map(region => (
                    <Marker
                        key={region.id}
                        position={region.coordinates}
                        eventHandlers={{
                            click: () => handlePinClick(region.route),
                        }}>
                        <Tooltip direction="top" offset={[0, -10]} opacity={3}>
                            <h3>{region.name}</h3>
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
