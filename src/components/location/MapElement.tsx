"use client";

import CoordinatesAtom from "@/atoms/CoordinatesAtom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

const MapElement = () => {
    const mapElement = useRef<HTMLDivElement>(null);
    const coords = useRecoilValue(CoordinatesAtom);
    const [map, setMap] = useState<L.Map | null>(null);

    useEffect(() => {
        if(mapElement.current && !mapElement.current.classList.contains("leaflet-container")) {
            const defaultIcon = L.icon({
                iconUrl: "https://res.cloudinary.com/dyxjtnfsk/image/upload/v1730567043/marker.png",
                iconSize: [24, 36]
            })

            L.Marker.prototype.options.icon = defaultIcon;

            const map = L.map(mapElement.current as HTMLDivElement).setView([coords.lat, coords.lon], 13);
            
            setMap(map);

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
        }

        if(map) {
            map.setView([coords.lat, coords.lon], 13);
            L.marker([coords.lat, coords.lon]).addTo(map);
        }
    }, [coords, map]);
    
    return <div id="map" ref={mapElement} className="h-[500px] w-[500px] rounded-full"></div>
}

export default MapElement;