import React from 'react'



export const Parties = () => {
    return (
        <div className='py-6 flex flex-col gap-5 border-b-2 border-aeblack-200'>
            <section className='text-aeblack-800  font-semibold text-[26px]'>
                أطراف القضية
            </section>
            <section className='text-aeblack-800  text-[16px] leading-[24px]'>
                <span>المدعي</span>
                <ul className="list-disc list-inside text-aeblack-800 pr-3">
                    <li>لوريم ايبسوم هو ببساطة نص شكل</li>
                </ul>
                <span>المدعي عليه</span>
                <ul className="list-disc list-inside text-aeblack-800 pr-3">
                    <li>لوريم ايبسوم هو ببساطة نص شكل</li>
                    <li>لوريم ايبسوم هو ببساطة نص شكل</li>
                    <li>لوريم ايبسوم هو ببساطة نص شكل</li>
                </ul>
            </section>
        </div>)
}





