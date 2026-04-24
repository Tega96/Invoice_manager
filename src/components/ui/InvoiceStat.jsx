import { useState } from 'react';
import INVOICE_DATA from '../../utils/data'


const InvoiceStat = () => {

    const [isInvoice, setIsInvoice] = useState(false)

    if (INVOICE_DATA === '') {
        setIsInvoice
    }
    return (
        <div className="flex flex-col w-182.5 h-auto justify-center items-center">
            {INVOICE_DATA.map(data => (
                <div 
                    className="w-full h-18 rounded-lg bg-white dark:bg-[#1E2139] shadow-custom"

                    key={data.id}
                >

                </div>
            ))}
        </div>
    )
}
export default InvoiceStat;