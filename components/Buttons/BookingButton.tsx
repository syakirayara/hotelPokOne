import Style from '../../styles/components/Buttons.module.css'

export default function BookingButton() {
    return (
        <>
            <button className={`${Style.bookBtn} py-1 text-white rounded-xl`}>
                Book now
            </button>
        </>
    )
}