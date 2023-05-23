import Image from 'next/image'

export default function Home() {
  return (
    <div className=" Parent">
      <div>Header</div>
      <div className="flex items-baseline ...">
        <div className=" bg-sky-500 pt-2 pb-6">01</div>
        <div className=" bg-red-500 pt-8 pb-12">02</div>
        <div className="bg-green-500 pt-12 pb-4">03</div>
      </div>
    </div>

  )
}
