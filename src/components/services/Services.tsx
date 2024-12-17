import { ChartSpline, CircleDollarSign, ClipboardCheck, Grid2x2Check, House, HousePlus, Lamp, LayoutPanelTop, MessagesSquare, TicketsPlane } from 'lucide-react'
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='text-white flex flex-col w-full mt-10 gap-20'>
      <div className='w-full text-center text-2xl'>Services we offer at KVESPL</div>
      <div className='flex w-full px-20 gap-16 justify-center'>
        <ServicesCard icon={<House/>} service={"Immovable Property Valuation"}  liner={" Accurately assess the value of land and buildings for investment, sale, or legal purposes."}/>
        <ServicesCard icon={<ClipboardCheck />} service={"Project Appraisal"} liner={"Evaluate the feasibility and potential of real estate projects, ensuring financial viability and strategic alignment."}/>
        <ServicesCard icon={<MessagesSquare />} service={"Property Consulting"} liner={"Provide expert advice on property investments, market trends, and legal requirements for buyers and sellers."}/>
        
      </div>
      <div className='flex w-full px-20 gap-16 justify-center'>
      <ServicesCard icon={<ChartSpline />} service={"Construction Finance Report Services"} liner={" Prepare detailed financial reports that assess the budget, costs, and funding for construction projects."}/>
      <ServicesCard icon={<CircleDollarSign />} service={"Capital Gain Tax Calculation"} liner={"Accurately calculate and optimize capital gain tax liabilities for real estate sales and investments."}/>
      <ServicesCard icon={<TicketsPlane />} service={"Valuation Reports for Visa Purposes"} liner={"Provide reliable property valuation reports to meet immigration and visa requirements."}/>
      {/* <ServicesCard icon={<Grid2x2Check />} service={"Property Distribution"} liner={" Assist in dividing real estate assets fairly and efficiently during inheritance, divorce, or legal disputes."}/> */}
      
      </div>
      <div className='flex w-full px-20 gap-16 justify-center'>
      <ServicesCard icon={<HousePlus />} service={"Valuation Reports for Rental Calculation"} liner={" Offer detailed property valuations to accurately assess rental income potential and market rates."}/>
      <ServicesCard icon={<LayoutPanelTop />} service={"Structural Design"} liner={"Create safe, functional, and aesthetically pleasing structural solutions for residential and commercial buildings."}/>
      <ServicesCard icon={<Lamp />} service={"Interior Design"} liner={"Design and optimize interior spaces to enhance functionality, comfort, and visual appeal in homes and businesses."}/>
      </div>
    </div>
  )
}

export default Services