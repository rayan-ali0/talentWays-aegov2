
type dataCompProps = {
    title: string,
    description: string
}

export const DataComponent = ({ title, description }: dataCompProps) => {
    return (
        <div className='py-6 flex flex-col gap-5 border-b-2 border-aeblack-200'>
            <section className='text-aeblack-800  font-semibold text-[26px]'>
                {title}
            </section>
            <section className='text-aeblack-800  text-[16px] leading-[30px]'>
                {description}
            </section>
        </div>
    )
}
