import LocationsList from '@/components/location/LocationsList';
import dynamic from 'next/dynamic';
const MapElement = dynamic(() => import("@/components/location/MapElement"), {
  ssr: false
})

const Location = () => {
  return (
    <div className="flex items-center w-full h-[70vh] pl-40 pr-10 pt-10 gap-40">
      <MapElement/>
      <div className="flex flex-col gap-8 w-[40%]">
        <h1 className="text-3xl">Where can you <span className="text-orange">find</span> us?</h1>
        <LocationsList/>
      </div>
    </div>
  )
}

export default Location;