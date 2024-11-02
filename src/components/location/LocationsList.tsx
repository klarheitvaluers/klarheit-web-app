"use client";

import CoordinatesAtom from '@/atoms/CoordinatesAtom';
import locationAtom from '@/atoms/LocationAtom';
import { locations } from '@/constants/locations';
import { useRecoilState, useSetRecoilState } from 'recoil';

const LocationsList = () => {
  const [locationId, setLocationId] = useRecoilState(locationAtom);
  const setCoordinates = useSetRecoilState(CoordinatesAtom);

  return (
    <>
        {locations.map(l => 
          (<div 
            onClick={() => { 
              setLocationId(l.id);
              setCoordinates({ lat: l.lat, lon: l.lon });
            }}
            className={`flex flex-col gap-4 ${l.id === locationId && "bg-gray-400 bg-opacity-20 dark:bg-gray-200 dark:bg-opacity-10"} rounded-2xl p-4 cursor-pointer`} 
            key={l.id}>
              <div className="text-xl">{l.id}. {l.city}</div>
              <div className="flex flex-col gap-1.5">
                <div className="text-sm text-gray-400">{l["address-one"]}</div>
                <div className="text-sm text-gray-400">{l["address-two"]}</div>
              </div>
          </div>)
        )}
    </>
  )
}

export default LocationsList