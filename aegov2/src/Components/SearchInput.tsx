
type filterProps={
 labelTitle:string,
 placeHolder:string
}

export const SearchInput = ({labelTitle,placeHolder}:filterProps) => {
    return (
        <div>
            <div className="aegov-form-control flex flex-col gap-2">
                {/* label size is not working */}
                <label className='block text-[20px] text-aeblack-800 font-semibold '>{labelTitle}</label>
                {/* <label for="search_input">Search</label> */}
                <div className="form-control-input">
                    <span className="control-prefix">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none" />
                            <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="16" />
                            <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                        </svg>
                    </span>
                    <input type="search" name="search_input" id="search_input" placeholder={placeHolder}/>
                </div>
            </div>
        </div>
    )
}
