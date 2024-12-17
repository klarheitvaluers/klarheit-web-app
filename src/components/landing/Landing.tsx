// const Landing = () => {
//   return (
//     <div className="flex flex-col items-center">
//         <div className="flex flex-col gap-1.5 items-center my-[60px]">
//             <h1 className="text-8xl font-bold"><span className="text-orange">K</span>larheit <span className="text-orange">V</span>aluers</h1>
//             <h3 className="text-2xl font-light">& Engineering Services Pvt Ltd</h3>
//         </div>
//     </div>
//   )
// }

// export default Landing
// "use client"
// import { useState, useEffect } from "react";
// import { FaArrowDown } from "react-icons/fa"; 
// import MiniAbout from "./MiniAbout";

// const Landing = () => {


//   return (
//     <div
//       className="mx-auto h-[70vh] w-full overflow-y-scroll bg-contain bg-fixed bg-center bg-no-repeat shadow-lg "
//       style={{ "backgroundImage": "url('https://i.postimg.cc/BQJ2TJkF/pngtree-contemporary-home-in-3d-featuring-a-clean-white-background-image-3834048-removebg-preview.png')" }}>
//       <div className="flex flex-col items-center w-full">
//         <div className="flex flex-col gap-1.5 items-center mt-40">
//           <h1 className="text-8xl font-bold text-black"><span className="text-orange">K</span>larheit <span className="text-orange">V</span>aluers</h1>
//           <h3 className="text-2xl font-light text-black">& Engineering Services Pvt Ltd</h3>
//         </div>
//         <div className="flex justify-center items-start mt-10 h-screen">
//       {/* Button Container */}
//       <div className="relative">
//         {/* Bouncing Button */}
//         <button className="px-3 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full animate-bounce flex items-center gap-2">
//           {/* Downward Arrow Icon */}
//           <FaArrowDown className="text-white text-xl" />
//         </button>
//       </div>
//     </div>
//     <MiniAbout/>
//       </div>
    




//     </div>
//   );
// };

// export default Landing;

"use client"
import { FaArrowDown } from "react-icons/fa"; 
import MiniAbout from "./MiniAbout";

const Landing = () => {
  return (
    <div className="relative mx-auto h-[70vh] w-full overflow-y-scroll bg-contain bg-fixed bg-center bg-no-repeat shadow-lg"
      style={{ backgroundImage: "url('https://i.postimg.cc/BQJ2TJkF/pngtree-contemporary-home-in-3d-featuring-a-clean-white-background-image-3834048-removebg-preview.png')" }}>
      
      {/* Blur overlay */}
      <div className="absolute inset-0 opacity-30 backdrop-blur-xs"></div>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-1.5 items-center mt-40">
          <h1 className="text-8xl font-bold text-black">
            <span className="text-orange">K</span>larheit <span className="text-orange">V</span>aluers
          </h1>
          <h3 className="text-2xl font-light text-black">& Engineering Services Pvt Ltd</h3>
        </div>
        
        <div className="flex justify-center items-start mt-10 h-screen">
          {/* Button Container */}
          <div className="relative">
            {/* Bouncing Button */}
            <button className="px-3 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full animate-bounce flex items-center gap-2">
              {/* Downward Arrow Icon */}
              <FaArrowDown className="text-white text-xl" />
            </button>
          </div>
        </div>
        <MiniAbout />
      </div>
    </div>
  );
};

export default Landing;


