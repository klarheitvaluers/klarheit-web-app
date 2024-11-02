import { atom } from "recoil";
import { locations } from "@/constants/locations";

const CoordinatesAtom = atom({
    key: "CoordinatesAtom",
    default: { lat: locations[0].lat, lon: locations[0].lon }
});

export default CoordinatesAtom;