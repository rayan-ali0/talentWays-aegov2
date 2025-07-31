import { Label } from "./Label"
import { SlCalender } from "react-icons/sl";
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
        <div className='flex gap-4 flex-col p-[24px] h-[208px] rounded-[10px] shadow-[0_0_26px_rgba(0,0,0,0.1)]'>
            <section className="flex flex-row text-[26px] font-extrabold gap-2 text-aeblack-800 ">
                <div>{mockData.judNb}</div>
                <div>{mockData.title}</div>
                <Label title={"المحاكم الابتدائية"} />
                <Label title={"تجاري مصارف"}/>
            </section>

            <section className="text-[14px] text-aeblack-600 gap-2 flex flex-row justify-start items-center">
                 <SlCalender />
                <span>{mockData.date2}</span>
            </section>

            <section className="text-aeblack-800 leading-[24px] text-[16px]">
                {mockData.description}
            </section>

        </div>
    )
}
