import { ChartSpline, CircleDollarSign, ClipboardCheck, Grid2x2Check, House, HousePlus, Lamp, LayoutPanelTop, MessagesSquare, TicketsPlane } from 'lucide-react'
import React from 'react'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <div className='text-white flex flex-col w-full mt-10 gap-20'>
      <div className='w-full text-center text-2xl'>Services we offer at KVESPL</div>
      <div className='flex w-full px-20 justify-around'>
        <ServicesCard icon={<House/>} service={"Immovable Property Valuation"}/>
        <ServicesCard icon={<ClipboardCheck />} service={"Project Appraisal"}/>
        <ServicesCard icon={<MessagesSquare />} service={"Property Consulting"}/>
        <ServicesCard icon={<LayoutPanelTop />} service={"Structural Design"}/>
        <ServicesCard icon={<Lamp />} service={"Interior Design"}/>
      </div>
      <div className='flex w-full px-20 justify-around'>
      <ServicesCard icon={<ChartSpline />} service={"Construction Finance Report Services"}/>
      <ServicesCard icon={<CircleDollarSign />} service={"Capital Gain Tax Calculation"}/>
      <ServicesCard icon={<TicketsPlane />} service={"Valuation Reports for Visa Purposes"}/>
      <ServicesCard icon={<Grid2x2Check />} service={"Property Distribution"}/>
      <ServicesCard icon={<HousePlus />} service={"Valuation Reports for Rental Calculation"}/>
      </div>
    </div>
  )
}

export default Services