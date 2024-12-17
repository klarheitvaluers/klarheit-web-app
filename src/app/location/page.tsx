import LocationsList from '@/components/location/LocationsList';
import dynamic from 'next/dynamic';
const MapElement = dynamic(() => import("@/components/location/MapElement"), {
  ssr: false
})

const Location = () => {
  return (
    <>    
    <div className="flex items-center w-full h-[70vh] pl-40 pr-10 pt-10 gap-40 mt-10 mb-10">
      <div className="h-[500px] w-[500px] rounded-full ">
        <MapElement/>
      </div>
      <div className="flex flex-col gap-8 w-[40%]">
        <h1 className="text-3xl">Where can you <span className="text-orange">find</span> us?</h1>
        <LocationsList/>
      </div>
    </div>
    <div>
      <p className="text-2xl text-center mt-2 mb-10">Our sub-branches</p>
      <div className="flex justify-center items-center gap-10">

  <div className="w-60 h-60 bg-blue-500 rounded-full flex justify-center items-center text-white text-center p-4">
    <div>
      <p className="font-semibold">Chh. Sambhajinagar (MH)</p>
      <p className="text-sm">Besides Sale Tax Office, Sai Trade Centre, Office No. 316,</p>
      <p className="text-sm">Near Railway Station, Chh. Sambhajinagar 431005</p>
    </div>
  </div>


  <div className="w-60 h-60 bg-green-500 rounded-full flex justify-center items-center text-white text-center p-4">
    <div>
      <p className="font-semibold">Kolhapur (MH)</p>
      <p className="text-sm">2078/ kh2 ,Office Unit No. AF 3 B, Second Floor, Harmony Apartment, 9 Lane,</p>
      <p className="text-sm">Near Wada Misal, Rajarampuri, Kolhapur - 416008</p>
    </div>
  </div>

  <div className="w-60 h-60 bg-red-500 rounded-full flex justify-center items-center text-white text-center p-4">
    <div>
      <p className="font-semibold">Mysuru (KA)</p>
      <p className="text-sm">413/1, 2nd floor Chamaraja Dubble Road,opp. Freedom Park, </p>
      <p className="text-sm">Subbarayanakere, KR Mohalla, Chamrajpura, Mysuru, Karnataka 570004
      </p>
    </div>
  </div>
</div>

    </div>
    <div>
    <p className="text-lg text-center mt-10 mb-2">Our presence in cities of India.</p>
    <p className="text-gray-400 text-center text-pretty tracking-wide"> Pune | Marathwada | West Maharashtra | Solapur | Ahmednagar | Jalgaon</p> 
      <p className="text-gray-400 text-center text-pretty tracking-wide" >Bengaluru | Tumkuru | Mysore | Kolar | Chikkaballapur | Dhoddaballapur | Vijayapura | Sidlaghatta | Chintamani </p>
        <p className="text-gray-400 text-center text-pretty tracking-wide">Belgaum | Hubli | Gulbargha | Gadag | Bagalkot | Shivamoga | Hassan | Davangere | Hosur | Krishnagiri | Kanakapura</p>
        <p className="text-gray-400 text-center text-pretty tracking-wide"> Ranibennur | Ballery | Tiptur | Arsikere | Raibag | Chikodi | KGF | Penukonda | Anantapur</p>
    </div>
    </>
  )
}

export default Location;