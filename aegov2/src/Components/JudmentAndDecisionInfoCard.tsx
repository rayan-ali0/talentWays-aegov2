import { Label } from "./Label"
import { SlCalender } from "react-icons/sl";
import { formatDateToArabic } from "../utils/FormatDateToArabic";

type JudmentAndDecisionItem = {
    judNb: string,
    date2: string,
    title: string,
    description: string
}

type JudmentAndDecisionProps = {
    mockData: JudmentAndDecisionItem
}

export const JudmentAndDecisionInfoCard = ({ mockData }: JudmentAndDecisionProps) => {
    return (
        <div className='flex gap-4 flex-col p-[24px]  h-auto lg:h-[208px] rounded-[10px] shadow-[0_0_26px_rgba(0,0,0,0.1)]'>
            <section className="flex flex-col gap-4 lg:flex-row text-[24px] sm:text-[26px] font-extrabold  text-aeblack-800 ">
                <div className="flex gap-2">
                    <span>{mockData.judNb}</span>
                    <span>{mockData.title}</span>
                </div>
                <div className="flex flex-row gap-2">
                    <Label title={"المحاكم الابتدائية"} />
                    <Label title={"تجاري مصارف"} />
                </div>
            </section>

            <section className="text-[14px] text-aeblack-600 gap-2 flex flex-row justify-start items-center">
                <SlCalender />
                <span>{formatDateToArabic(mockData.date2)}</span>

                {/* <span>{mockData.date2}</span> */}
            </section>

            <section className="text-aeblack-800 leading-[24px] text-[14px] sm:text-[16px]">
                {mockData.description}
            </section>

        </div>
    )
}
