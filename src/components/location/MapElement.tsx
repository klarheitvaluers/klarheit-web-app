"use client";

import CoordinatesAtom from "@/atoms/CoordinatesAtom";
import { Marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

let marker: Marker<any> | null = null;

const MapElement = () => {
    const mapElement = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<L.Map | null>(null);
    const [loading, setLoading] = useState(true);
    const coords = useRecoilValue(CoordinatesAtom);

    useEffect(() => {
        async function setMapStatus() {
            // dynamic import of dependency to access window object on mount
            const L = await import("leaflet");

            // if map div is referred and not initialised then initialise the map
            if(mapElement.current && !mapElement.current.classList.contains("leaflet-container")) {

                // set the marker icon
                const defaultIcon = L.icon({
                    iconUrl: "https://res.cloudinary.com/dyxjtnfsk/image/upload/v1730567043/marker.png",
                    iconSize: [24, 36]
                });

                L.Marker.prototype.options.icon = defaultIcon;
                
                // initialise a map
                const localMap = L.map(mapElement.current as HTMLDivElement).setView([coords.lat, coords.lon], 13);
                
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(localMap);
                
                setMap(localMap);
            }

            // if map is already set, set the new coords and add marker
            if(map) {
                if(marker) {
                    marker.remove();
                }
                map.setView([coords.lat, coords.lon], 13);
                marker = L.marker([coords.lat, coords.lon]).addTo(map);
            }
        }

        setMapStatus();
        setLoading(false);
    }, [coords, map]);
    
    return <div id="map" ref={mapElement} className="flex justify-center items-center h-full w-full rounded-full">
        {loading ? "Loading..." : null}
    </div>
}

export default MapElement;