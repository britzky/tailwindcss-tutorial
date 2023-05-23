import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen text-white Parent bg-slate-900">
      <div className="container flex">
      <div className="bg-red-500 z-40 border-white rounded-full p-4">05</div>
      <div className="bg-red-500 z-30 border-white rounded-full p-4">04</div>
      <div className="bg-red-500 z-20 border-white rounded-full p-4">03</div>
      <div className="bg-red-500 z-10 border-white rounded-full p-4">02</div>
      <div className="bg-red-500 z-0 border-white rounded-full p-4">01</div>
      </div>
    </div>

  )
}
