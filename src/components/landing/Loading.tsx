import Image from 'next/image'
import loading from "@/public/loading.gif"

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <Image
        src={loading}
        alt="Loading..."
        width={50}
        height={50}
      />
    </div>
  )
}