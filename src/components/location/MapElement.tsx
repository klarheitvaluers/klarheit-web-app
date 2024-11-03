"use client";

import CoordinatesAtom from "@/atoms/CoordinatesAtom";
import { Map, Marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";

let marker: Marker | null = null;

const MapElement = () => {
    const mapElement = useRef<HTMLDivElement | null>(null);
    const coords = useRecoilValue(CoordinatesAtom);
    const [node, setNode] = useState<Node | null>(null);
    const [mapState, setMapState] = useState<Map | null>(null);

    useEffect(() => {
        async function initMap() {
            // dynamic import of dependency to access window object on mount
            const L = await import("leaflet");
            
            // if map not initialised
            if(!mapState) {
                // set the marker icon
                const defaultIcon = L.icon({
                    iconUrl: "https://res.cloudinary.com/dyxjtnfsk/image/upload/v1730567043/marker.png",
                    iconSize: [24, 36]
                });
                
                L.Marker.prototype.options.icon = defaultIcon;
                
                // initialise a map            
                // if no map component present - create one
                if(!L.DomUtil.get("map")) {
                    const node = document.createElement("div");
                    node.id = "map";
                    node.className = "h-full w-full rounded-full";
                    mapElement.current?.appendChild(node);
                    setNode(node);
                }

                // if map node is present then create map instance
                if(node) {
                    const map = L.map(node as HTMLDivElement).setView([coords.lat, coords.lon], 13);
                    
                    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(map);
                        
                    marker = L.marker([coords.lat, coords.lon]).addTo(map);

                    setMapState(map);
                }
            }
        }

        initMap();

        return () => {
            // remove the map component
            if(node) {
                mapElement.current?.removeChild(node); // destroy map instance
                setMapState(null); // state of the map is null
            }
        }
    }, [node]);

    useEffect(() => {
        // if map is already set, set the new coords and add marker
        if(mapState) {
            if(marker) {
                marker.setLatLng([coords.lat, coords.lon]);
            }
            mapState.setView([coords.lat, coords.lon], 13);
        }
    }, [coords]);
    
    return <div ref={mapElement} className="relative flex justify-center items-center h-full w-full rounded-full"> 
        {!mapState ? <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">Loading...</p> : null}
    </div>
}

export default MapElement;