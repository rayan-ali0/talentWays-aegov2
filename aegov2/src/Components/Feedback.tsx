import React from 'react'
import thumbUp from '../assets/ThumbsUp.svg'
import thumbDown from '../assets/Vector.svg'


type FeedbackProps = {
    typeP: string;
}

export const Feedback = ({ typeP }: FeedbackProps) => {
    return (

        <div className='flex flex-col p-[24px] gap-4 w-full h-auto sm:h-[180px]'>
            <div className='text-aeblack-800 font-bold text-[18px]'>
                {
                    typeP === "feedback" ? (
                        "هل استخدمت خدماتنا في دليل الخدمات بنا مؤخرًا؟"
                    ) : (
                        "هل وجدت هذا المحتوى مفيدًا؟"
                    )
                }
            </div>
            <div className='text-aeblack-600  text-[16px]'>
                {
                    typeP === "feedback" ? (
                        "يمكنك مساعدتنا على التحسين من خلال تقديم تعليقاتك حول تجربتك."
                    ) : (
                        "يمكنك مساعدتنا على التحسين من خلال تقديم تعليقاتك حول تجربتك."
                    )
                }
            </div>
            <div className='flex justify-start gap-5'>
                {
                    typeP === "feedback" ? (

                        <button className="aegov-btn btn-outline btn-sm lg:btn-md" type="button">أعطنا تقييمك </button>

                    ) : (
                        <>
                            <button className="aegov-btn btn-outline btn-sm lg:btn-md" type="button">
                                نعم
                                <img src={thumbUp} />
                            </button>
                            <button className="aegov-btn btn-outline btn-sm lg:btn-md" type="button">
                                لا
                                <img src={thumbDown} />
                            </button>
                        </>
                    )
                }
            </div>



        </div>
    )
}
