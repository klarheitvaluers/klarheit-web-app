import Link from "next/link";

const MenuBar = () => {
  return ( 
       
          <div className="flex gap-8 text-gray-200 mr-12 text-sm">
            <Link href="/" className="hover:text-orange">Home
            </Link>
            <Link href="/about" className="hover:text-orange">About Us
              {/* <InfoIcon className="absolute h-9 w-9 bottom-[300px] left-[65px]"/> */}
            </Link>
            <Link href="/services" className="hover:text-orange">Services
              {/* <UserCogIcon className="absolute h-9 w-9 bottom-[240px] left-[82px]"/> */}
            </Link>
            <Link href="/location" className="hover:text-orange">Location
              {/* <MapPinIcon className="absolute h-9 w-9 bottom-[182px] left-[111px]"/> */}
            </Link>
            <Link href="/contact" className="hover:text-orange">Contact
              {/* <MessageCircleMoreIcon className="absolute h-9 w-9 bottom-[90px] left-[195px]"/> */}
            </Link>
            <Link href="/careers" className="hover:text-orange">Careers
              {/* <GraduationCapIcon className="absolute h-9 w-9 bottom-[132px] left-[158px]"/> */}
            </Link>
          </div>
  )
}

export default MenuBar