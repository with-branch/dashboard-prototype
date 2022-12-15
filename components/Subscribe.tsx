import React, { useState } from "react";

const formData = { name: "", email: "", company: "", position:"" };

export default function Subscribe() {
    const [form, setForm] = useState(formData);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const SubForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // $.ajax({
        //     url:'https://api.apispreadsheets.com/data/20772/',
        //     type:'post',

        //     data:$("#emailForm").serializeArray(),
        //     success: function(){
        //       console.log("Form Data Submitted :)");
        //     },
        //     error: function(){
        //       console.log("There was an error :(")
        //     },
        // });
        const formData = form;
        fetch("https://api.apispreadsheets.com/data/qek46yXxyrN3ta3L/", {
            method: "POST",
            body: JSON.stringify({ "data": [{ "name": formData.name, "email": formData.email, "company": formData.company ,  "position": formData.position }] }),
        }).then((res) => {
            if (res.status === 201) {
                console.log("success :)")
                // SUCCESS
            } else {
                console.log("there was an error :(")
                // ERROR
            }
        });
        console.log("submitting");

        window.setTimeout(function () {
            window.location.reload();
        }, 1000);
    };
    return (
        <>

            <div className="bg-white dark:bg-black py-16 sm:py-24 pt-20 lg:pt-0">
                <div id="GetInTouch" className="relative sm:py-16">
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-4xl lg:px-8">
                        <div className="to-animate relative rounded-2xl lg:-mt-16 px-6 py-10 bg-tertiary dark:bg-onyx overflow-hidden shadow-xl sm:px-12 sm:py-20">
                            <div className="relative">
                                <div className="sm:text-center">
                                    <h2 className="text-3xl font-extrabold text-black dark:text-white tracking-tight sm:text-4xl">
                                        Sign up to receive Branch beta access.
                                    </h2>
                                    <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600">
                                        Branch beta is about to launch! Stay in the loop to be one of the first to use the Branch platform.
                                    </p>
                                </div>
                                <form id="emailForm" onSubmit={SubForm} className="mt-12 sm:mx-auto max-w-lg md:max-w-2xl p-0 md: p4">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="name" className="sr-only">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            className="block w-full border rounded-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            placeholder="Name"
                                        />
                                        <label htmlFor="email" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            className="block w-full border rounded-full mt-2 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            placeholder="Email"
                                        />
                                        <label htmlFor="company" className="sr-only">
                                            Company
                                        </label>
                                        <input
                                            id="company"
                                            type="text"
                                            name="company"
                                            onChange={handleChange}
                                            className="block w-full border rounded-full mt-2 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            placeholder="Company"
                                        />
                                        <label htmlFor="position" className="sr-only">
                                            Title/Position within company
                                        </label>
                                        <input
                                            id="position"
                                            type="text"
                                            name="position"
                                            onChange={handleChange}
                                            className="block w-full border rounded-full mt-2 px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            placeholder="Title/Position within company"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            className="block w-full rounded-full border border-transparent px-5 py-3 bg-primary text-base font-medium text-white shadow transition duration-300 ease-in-out  hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-secondary sm:px-10"
                                        >
                                            Notify me
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}