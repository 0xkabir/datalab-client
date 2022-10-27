import React from 'react';

const Blog = () => {
    const questions = [
        {
            question: "What is CORS?",
            answer: "CORS stands for Cross Origin Resource Sharing. It allows us to bypass Access-Control-Allow-Origin headers applied by browser that specify the origins that the api can access. When the client and server have different origin, trying to make a request from client to a resource on the other server will fail. This security mechanism is applied by the browser. CORS disables this mechanism and allow access to those resources that were denied."
        }, 
        {
            question: "Why are you using firebase? What other options do you have to implement authentication?",
            answer: "Firebase authentication is a tool used for user management and authentication. Firebase provides backend services, SDKs and UI libraries to authenticate users. Firebase supports authentication using phone number, email address, and popular identity providers like Google, Facebook, GitHub, Apple etc. one of the most vital reason to use firebase that it is maintained by Google that ensures top-notch security. There are other alternatives to firebase on the web like Auth0, MongoDB, Okta, JSON Web Token and Amazon Cognito."
        },
        {
            question: "how does the private route work?",
            answer: "Private Rouets are protected routes which requires an user to be logged in to access. Private route renders its child element only and only if the user is logged in. Otherwise the private route redirects the user to somewhere where the user is asked to login."
        },
        {
            question: "What is Node? How does Node work?",
            answer: "Node is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node accepts the request from the clients and sends the response, while working with the request node handles them with a single thread. Node is a event loop single threaded language that can handle concurrent requests with a single thread without blocking it for one request. Node basically works on the concepts of Asynchronous and Non-Blocking I/O. The single thread on node doesn’t work with a request instead it sends the request to another system which resolves the request and it is accessible for another request. And the Non-Blocking I/O ensures working with multiple requests instead of blocking the single thread for a single request."
        }
    ]
    return (
        <div>
             <h2 className='text-3xl mt-8 font-medium text-center'>Common Web Development Interview Questions</h2>
             {
                questions.map((question, index) => {
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

export default Blog;