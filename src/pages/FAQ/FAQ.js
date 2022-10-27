import React from 'react';

const FAQ = () => {
    const faq = [
        {
            question: "Do you cover everything regarding data expert career?",
            answer: "We almost cover everything regarding the field. There will always be new tools and techniques, we update our courses accordingly."
        },
        {
            question: "Will there be live classes?",
            answer: "For now, our courses are pre-recorded. But we have a plan to start live bootcamps in the upcoming years. We're working on it."
        },
        {
            question: "Is the course fees fixed?",
            answer: "Our course prices are almost fixed. However, you may request a discount coupon for some concession. you may email us for that coupon code."
        },
        {
            question: "How will I get support if I get stuck?",
            answer: "We have active forums of our students for each course. you may ask any your queries there. The instructor and other students will answer your questions as soon as possible."
        },
        {
            question: "I have some other questions except these. Where do I ask?",
            answer: "Feel free to email us at web@datalab.com and we'll reply to your queries within 6 hours."
        }
    ]
    return (
        <div>
             <h2 className='text-3xl mt-8 font-medium text-center'>Frequently Asked Questions</h2>
             {
                faq.map((question, index) => {
                    return <div key={index} className='w-11/12 md:w-4/5 mx-auto my-4 px-5 py-3 rounded-md shadow-md'>
                        <h3 className='text-lg text-slate-800 font-medium'>Q{index+1}. {question.question}</h3>
                        <p className='my-2 text-slate-900'>
                            {question.answer}
                        </p>
                    </div>
                })
             }
        </div>
    );
};

export default FAQ;