
import { TitleBar } from '../Components/TitleBar'
import { JudmentAndDecisionInfoCard } from '../Components/JudmentAndDecisionInfoCard'
import { FilterBar } from '../Components/FilterBar'
import { Pagination } from '../Components/Pagination';
import { Feedback } from '../Components/Feedback';

const mockData = [
    {
        judNb: "43/2024/11",
        date2: "2023-03-10",
        title: "تجاري مصارف",
        description: "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى "
    },
    {
        judNb: "43/2024/11",
        date2: "2023-03-10",
        title: "تجاري مصارف",
        description: "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى "
    },
    {
        judNb: "43/2024/11",
        date2: "2023-03-10",
        title: "تجاري مصارف",
        description: "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى "
    },
    {
        judNb: "43/2024/11",
        date2: "2023-03-10",
        title: "تجاري مصارف",
        description: "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى "
    },
    {
        judNb: "43/2024/11",
        date2: "2023-03-10",
        title: "تجاري مصارف",
        description: "زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى "
    },
];


export const JudgmentsAndDecisions = () => {
    return (
        <main className='flex flex-col gap-[50px] m-8 '>
            <section className='h-[120px]'>
                <TitleBar title={"الأحكام و القرارات"} />
            </section>

            <section className='flex flex-col lg:flex-row w-full  gap-6'>
                <div className='w-full lg:w-1/4 '>
                    <FilterBar />
                </div>
                <div className=' w-full lg:w-3/4 flex flex-col items-end gap-7'>
                    {
                        mockData.map((mockD, i) => (
                            <JudmentAndDecisionInfoCard key={i} mockData={mockD} />
                        ))
                    }
                    <div className='mt-5'>
                        <Pagination />
                    </div>

                </div>
            </section>
            <section className='flex  flex-col lg:flex-row p-6 bg-slate-100 gap-7 justify-between items-center'>
                <div className='w-full lg:w-6/12 bg-whitely-50 '>
                    <Feedback typeP="liked" />
                </div>
                <div className='w-full lg:w-6/12 bg-whitely-50 '>
                    <Feedback typeP="feedback" />
                </div>
            </section>

        </main>
    )
}
