
type filterProps={
 labelTitle:string,
 placeHolder:string,
 setSearch:React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({labelTitle,placeHolder,setSearch}:filterProps) => {
    return (
        <div className=" w-full">
            <div className="aegov-form-control control-lg flex flex-col gap-2 w-full  md:w-[300px] lg:w-full ">
                {/* label bold weight is not working */}
                <label className='block text-aeblack-800 font-semibold'>{labelTitle}</label>
                <div className="form-control-input h-[52px]">
                    <span className="control-prefix">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none" />
                            <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16" />
                            <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                        </svg>
                    </span>
                    <input type="search" name="search_input" id="search_input" placeholder={placeHolder} onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}
