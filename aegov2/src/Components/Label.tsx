import React from 'react'

type labelProps={
title:string
}
export const Label = ({title}:labelProps) => {
  return (
    <div className=' text-[16px] text-center font-semibold rounded-[6px] w-[151px] py-[5px] px-[10px] h-[34px] text-aegold-700 bg-aegold-50 '>
        {title}
    </div>
  )
}
