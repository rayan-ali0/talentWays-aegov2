import React from 'react'
import downloadIcon from '../assets/DownloadSimple.svg'
import saveIcon from '../assets/BookmarkSimple.svg'
import printIcon from '../assets/Printer.svg'

export const Box = () => {
    return (
        <div className='flex flex-col gap-6 h-[300px]'>
            <section className='flex flex-row justify-start gap-4'>
                <span className='bg-aegold-50 w-[48px] h-[48px] flex justify-center items-center rounded-[8px]'><img src={downloadIcon} /></span>
                <span className='bg-aegold-50 w-[48px] h-[48px] flex justify-center items-center rounded-[8px]'><img src={saveIcon} /></span>
                <span className='bg-aegold-50 w-[48px] h-[48px] flex justify-center items-center rounded-[8px]'><img src={printIcon} /></span>
            </section>

            <section className='bg-aegold-50 flex flex-col gap-3 rounded-[10px] h-[225px] overflow-hidden p-5'>
                <div className='text-aegold-600 text-[26px] font-semibold'> في هذه الصفحة</div>
                <div className=" overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">

                    <div className='flex flex-col gap-3'>
                        <span className='text-aeblack-800'>ملخص القضية</span>
                        <span className='text-aeblack-800'>الحضور </span>
                        <span className='text-aeblack-800'>محاور الجلسة </span>
                        <span className='text-aeblack-800'>القرارات المتخذة</span>
                        <span className='text-aeblack-800'> تم اعتماد المحضر من </span>


                    </div>
                </div>

            </section>
        </div>
    )
}
