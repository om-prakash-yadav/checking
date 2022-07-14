import Header from "../components/Header";
import navigation from "../data";
import Footer from "../components/Footer";
import Loader from "../components/loader/Loader";
import { useEffect, useState } from "react";


export default function Contact() {
   // loader screen 
   const [spinner, setSpinner] = useState(true);

   // It will be executed before rendering
 
   useEffect(() => {
     setTimeout(() => setSpinner(false), 1000)
   }, []);
 
   // [] means like componentDidMount
 
 
 
   return spinner ? (
     <div>
     <Loader/>
     </div>
   ) :(
    <div>
     <Header items={navigation} navPosition="right" home={false} />
      <section
        className="py-10 px-4 lg:px-16 overflow-hidden relative z-10 mt-20"
        data-aos="fade-up"
        id="contact"
      >
        <div className="container p-6 rounded-2xl ">
         
          <div className="flex flex-col lg:flex-row lg:items-center text-slate-900 dark:text-gray-200 lg:justify-between -mx-4">
            <div
              className="w-full lg:w-1/2 xl:w-6/12 px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <div className="flex items-center text-center mb-4 ">
                <svg className="h-6  fill-[#0076fe]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                 
                <p className="flex items-center text-3xl text-center  font-bold font-mono text-[#0076fe] mx-4">
                  LOCATION
                </p>
                </div>
               
                <p className="text-base  font-bold text-body-color leading-relaxed mb-9">
                  National Institute of Technology Durgapur West Bengal, India
                </p>
                <div className="flex items-center text-center mb-4 ">
                <svg className="h-6 fill-[#0076fe] mb-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM240 128c35.35 0 64 28.65 64 64s-28.65 64-64 64c-35.34 0-64-28.65-64-64S204.7 128 240 128zM336 384h-192C135.2 384 128 376.8 128 368C128 323.8 163.8 288 208 288h64c44.18 0 80 35.82 80 80C352 376.8 344.8 384 336 384zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320z" /></svg>
               
                <p className="flex items-center text-3xl  font-bold font-mono  text-[#0076fe] mb-4  mx-5">
                  Contact Info.
                </p>
                </div>
                <p className="text-base  font-bold text-body-color leading-relaxed  ">
                  Harshit Surana:
                  <span className="font-bold text-[#0076fe] italic">

                    +91 980-006-2969
                  </span>
                </p>
                <p className="text-base  font-bold leading-relaxed  mb-9 ">
                  Ritabrata Ganguly :
                  <span className="font-bold text-[#0076fe] italic">

                    +91 980-006-2969
                  </span>
                </p>
                <div className="flex items-center text-center mb-4 ">
                <svg className="h-6  fill-[#0076fe] mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
               
                <p className="text-3xl  font-bold font-mono  text-[#0076fe] mb-4  mx-5">
                  Mail Info.
                </p>
                </div>
                <p className="text-base  font-medium text-body-color leading-relaxed mb-9 ">
                  Email : 
                  <span className="font-bold text-[#0076fe] italic">

                   istenitdurgapur@gmail.com
                  </span>
                </p>
              </div>
            </div>
            <div
              className="w-full lg:w-1/2 xl:w-5/12 px-4"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <div className="bg-gray-100 border-2 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="
                                    w-full
                                    rounded-md
                                    p-3
                                    text-gray-800
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:ring-2
                                    ring-blue-400
                                    "
                      name="full_name"
                      id="full_name"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="
                      w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      inputMode="numeric"
                      placeholder="Your Phone"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="phone_number"
                      id="phone_number"
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="   w-full
                      rounded-md
                      p-3
                      text-gray-800
                      outline-none
                      focus-visible:shadow-none
                      focus:ring-2
                      ring-blue-400
                                    "
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className=" w-full text-white font-bold
                                    bg-[#0076fe]
                                    rounded-full
                                    p-3
                                    transition
                                    ease-in-out
                                    duration-500
                                    hover:bg-indigo-500
                                    shadow-md
                                    "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                 

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
