import Style from '../../styles/components/Alerts.module.css'

export default function SuccessAlert() {
    return (
        <>
            <div className={`${Style.alertWrapper} flex align-middle gap-4 p-3 mx-auto bg-green-300 mt-5 rounded-xl`}>
                <div className="icon text-lg font-bold">✓</div>
                <div className="alert-message">
                    <h1 className='text-lg font-semibold'>
                        Kamar yang dicari tersedia!
                    </h1>
                </div>
            </div>
        </>
    )
}