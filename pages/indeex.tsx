import Image from "next/image";
import kamar2 from "../public/kamar2.jpg"
import Navbar from "../components/Navbar";
import Style from "../styles/Home.module.css"
export default function Home() {
  return (
    <>
    <Navbar/>


    <div className="flex flex-row">
      
    </div>

    <div className="container px-6">
    <h3 className="text-4xl font-bold">VIP Room</h3>
        
        <div className={Style.btns}>
        <div className="mt-10 rounded-xl sm:mt-20 sm:h-50 sm:w-50  sm:object-center">
        <Image src={kamar2} className="mt-10 rounded-xl shadow-xl sm:mt-6 sm:h-50 sm:w-20  sm:object-center"/>
        
        </div>
        </div>
    
      


    <div className="mt-4">
      <div className={Style.btns}>
        <button className="bg-green-300 text-green-600 text-xl font-medium mt-20 py-3 px-80 border border-green-600 rounded">
            ✓ Kamar yang dicari tersedia!
        </button>
      </div>
      <h2 className="mt-6 p-6 text-2xl font-semibold"> Fasilitas:</h2>
        <div className="mt-1 p-20">
          <tr>
            <td>
        <ul>
          <li>1 Kasur King Size</li>
          <li>Bath Tub dan Shower</li>
          <li>Safe Box Deposit</li>
          <li>Mini Refrigerator</li>
        </ul>
            </td>
          <td>
            tes
          </td>
        </tr>
        </div>
     
    
    </div>
    </div>
  
    </>
  )
}