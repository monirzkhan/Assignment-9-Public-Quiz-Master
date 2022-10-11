import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='md:text-5xl text-2xl text-gray-400 underline text-center my-8'>Welcome To My Blog</h1>
           </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 md:mx-8 my-12'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://miro.medium.com/max/880/1*kjZAT2HyYLv5gKT9SMBAHA.png" alt="react-router" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Question 01:</h2>
                        <p>What is the purpose of react router?</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="my-modal" className="btn btn-warning">See Answer</label>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.qed42.com/sites/default/files/2020-05/Context%20API%20in%20React%20with%20Hooks.png" alt="react-router" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Question 02:</h2>
                        <p>How does Context API works?</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="my-modal-2" className="btn btn-warning">See Answer</label>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://blog.alexdevero.com/wp-content/uploads/2021/05/10-05-21-reacts-useref-hook-what-it-is-and-how-to-use-it-blog.jpg" alt="react-router" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Question 03:</h2>
                        <p>What is useRef?</p>
                        <div className="card-actions justify-end">
                            <label htmlFor="my-modal-3" className="btn btn-warning">See Answer</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------------------Modal-1----------------------- */}
            <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <img className='rounded mb-2' src="https://miro.medium.com/max/880/1*kjZAT2HyYLv5gKT9SMBAHA.png" alt="" />
                        <h3 className="font-bold text-lg">The purpose of react router:</h3>
                        <p className="py-4">React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                            By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Thanks</label>
                    </div>
                </div>
            </div>
            </div>
            {/* --------------------------Modal-2------------------------ */}
            <div>
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                        <img className='rounded mb-2' src="https://www.qed42.com/sites/default/files/2020-05/Context%20API%20in%20React%20with%20Hooks.png" alt="" />
                        <h3 className="font-bold text-lg">React context API: How it works:</h3>
                        <p className="py-4">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br />

                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-2" className="btn">Thanks</label>
                    </div>
                </div>
            </div>
            </div>
            {/* --------------------------Modal-3------------------------ */}
            <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                        <img className='rounded mb-2' src="https://blog.alexdevero.com/wp-content/uploads/2021/05/10-05-21-reacts-useref-hook-what-it-is-and-how-to-use-it-blog.jpg" alt="" />
                        <h3 className="font-bold text-lg">React useRef Hook:</h3>
                        <p className="py-4">The useRef Hook is a function that returns a mutable ref object whose.current property is initialized with the passed argument (initialValue).The returned object will persist for the full lifetime of the component. <br />

                            There are two main uses of useRef that are Accessing the DOM nodes or React elements And its equivalent using a functional component.</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-3" className="btn">Thanks</label>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;