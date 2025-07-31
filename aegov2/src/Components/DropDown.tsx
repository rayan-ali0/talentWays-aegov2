import  { useState } from 'react'

type menuItem = {
    label: string,
    id: string
}
type menuProps = {
    items: menuItem[],
    label:string
}



export const DropDown = ({ items ,label }: menuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen)
    return (
        <main className='w-full  flex flex-col gap-2'>
            {/* <!-- Button to trigger the dropdown --> */}
            <label className='block text-[20px] text-aeblack-800 font-semibold '>{label} </label>
            <button id="dropdownButton-8" data-dropdown-trigger="hover" data-dropdown-toggle="dropdownHover" className="aegov-btn  btn-outline w-full flex justify-between items-center h-[52px]" type="button"
                onClick={() => setIsOpen(!isOpen)}
            >

                اختر
                <svg className="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none" />
                    <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            {
                isOpen && (
                    <div id="dropdownHover" className={`aegov-dropdown w-full ${!isOpen ?"hidden":"block"}`}>
                        <div className="dropdown-body text-aeblack-600">
                            <ul className="py-1" aria-labelledby="dropdownButton-1">
                                {
                                    items.map((item, i) => (
                                        <li>
                                            <a key={i} href="#" className="dropdown-item">{item.label} </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </main>
    )
}
