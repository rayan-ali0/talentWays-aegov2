
type titleProps={
    title:string
}
export const TitleBar = ({title}:titleProps) => {
  return (
    <div className='w-full h-full bg-aegold-50 flex  justify-center items-center'>
        <span className=" text-aegold-900 font-bold text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px]">{title}</span>
    </div>
  )
}
