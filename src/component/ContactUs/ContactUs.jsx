import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import ScrolTop from "../ScrolTop/ScrolTop";
import Navbar from "../navber/navbar";
import Footer from "../footer/footer";
// import { Helmet } from "react-helmet";

export default function Contact() {

    function randomDate(end) {
        return new Number(end + Math.random());
    }
    var p = randomDate(new Number()) * 10000000000000000;
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_1zfatsb",
            "template_0ciuxfr",
            e.target,
            "user_3TcS4pRKMgpo7fArsKmSf"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    window.location.href = "./thank-you/" + p;
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

    useEffect(() => {

        document.getElementById("hello").innerHTML = p;

    }, [])

    return (
        <>
            <ScrolTop />
            <Navbar />
            <div className=" bg-slate-500 pt-12 pb-20">
                {/* <Helmet>
        <style>{"body { background-color: #c5da9c; }"}</style>
      </Helmet> */}

                <div className="container mx-auto">
                    <div className="">
                        <div className="flex flex-col justify-center items-center gap-12">
                            <div className="-flex flex-col gap-4 justify-center items-center text-center">
                                <p className="text-3xl font-bold text-white">GET IN TOUCH WITH US</p>
                                <p className="text-xl  text-white">Contact us</p>
                            </div>
                            <form onSubmit={sendEmail} className="w-[450px] flex flex-col">
                                <div className="flex flex-col gap-3">
                                    <div id="nameid" className="flex flex-col">
                                        <input
                                            type="text"
                                            className="py-3 px-2 rounded-sm"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div  className="flex flex-col">
                                        <select id="inputState" 
                                            className="py-3 px-2 rounded-sm"
                                            name="option">
                                            <option selected> --Select Option-- </option>
                                            <option>Image Editing Service</option>
                                            <option>Video Editing Service</option>
                                        </select>
                                    </div>
                                    <div  className="flex flex-col">
                                        <input
                                            type="email"
                                            className="py-3 px-2 rounded-sm"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div  className="flex flex-col">
                                        <input
                                            type="text"
                                            className="py-3 px-2 rounded-sm"
                                            placeholder="Subject"
                                            name="subject"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <textarea
                                            className="form-control py-3 px-2 rounded-sm"
                                            id=""
                                            cols="30"
                                            rows="8"
                                            placeholder="Your message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </div>

                                    <div  hidden>
                                        <textarea
                                            cols="30"
                                            rows="3"
                                            type="number"
                                            className=""
                                            name="uniqueid"
                                            id="hello"
                                        />
                                    </div>

                                    <div className="">
                                        <div className="text-center">
                                            <input
                                                type="submit"
                                                id="button-19"
                                                className="bg-[#7c9c30] py-2 px-10 text-white font-bold rounded-md"
                                                value="SUBMIT"
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <br />
            </div>
            <Footer />

        </>

    );
}
