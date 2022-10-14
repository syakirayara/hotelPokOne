import SuccessAlert from "../components/Alert/SuccessAlert";
import Navbar from "../components/Navbar";
import Style from '../styles/Home.module.css'
import Image from 'next/image'
import foto from '/public/foto.jpg'
import reguler from '../public/reguler.jpg'
import images from '/public/meja.jpg'
import BookingButton from "../components/Buttons/BookingButton";

export default function Home () {
    return (
        <>
            <Navbar/>

            <div className={`${Style.contentWrapper} content mt-12 pt-12`}>
                <SuccessAlert/>

                <div className={`${Style.contentTitle} mx-auto my-10`}>
                    <h1 className="text-3xl font-bold">Regular Room</h1>
                </div>

                <div className={`${Style.roomsWrapper} mx-auto`}>
                    <div className={`${Style.rooms} flex justify-between align-middle`}>
                        <div className={`${Style.roomImages} flex flex-wrap gap-3`}>
                            <Image className="rounded-xl"
                                src={foto}
                                alt={`Fasilitas`}
                                width={200}
                                height={150}
                            />
                            <Image className="rounded-xl"
                                src={reguler}
                                alt={`Fasilitas`}
                                width={200}
                                height={150}
                            />
                            <Image className="rounded-xl"
                                src={images}
                                alt={`Fasilitas`}
                                width={200}
                                height={150}
                            />
                        </div>
                        <div className={`${Style.roomFacility} flex flex-col justify-center`}>
                            <h1 className="text-3xl font-bold mb-4">Fasilitas :</h1>
                            <ol className={`${Style.roomFacilityList} font-semibold text-xl`}>
                                <li>2 Kasur Twin Size</li>
                                <li>Shower</li>
                                <li>TV LED</li>
                            </ol>
                        </div>
                        <div className={`${Style.roomPricing} flex flex-col justify-center text-center`}>
                            <h1 className="text-2xl font-semibold mb-3">Room Rate</h1>
                            <h1 className="text-2xl font-bold mb-3">Rp 300.000/night</h1>
                            <BookingButton/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}