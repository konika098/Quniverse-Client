import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-[#161c23] p-3 space-y-10 md:grid grid-cols-2 md:-mt-6 lg:grid-cols-4">
                <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
                    <h1 className="text-[#f48225] text-xl font-medium">Company</h1> <br />
                    <p className="text-gray-300/80 text-base hover:text-[#d97706] cursor-none"> A123 Lost Street <br /> Chandigarh,
                        PB 535022 <br /> India </p> <br />
                    <p className="text-gray-200/80 text-base hover:text-[#d97706] cursor-pointer"> <strong className="tracking-wide text-white font-normal">Phone:</strong> +91 7008090111 </p>
                    <p className="text-gray-200/80 text-base hover:text-[#d97706] cursor-pointer"> <strong className="tracking-wide text-white font-normal">Email:</strong> info@gmail.com </p>
                </div>
                <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
                    <h1 className="text-[#f48225]  text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
                    <ul className="mt-2 text-gray-300/80">
                        <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-[#d97706]">
                            Home</a> </li>
                        <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-[#d97706]">
                            About Us</a> </li>
                        <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-[#d97706]">
                            Services</a> </li>
                        <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-[#d97706]">
                            Terms of service</a> </li>
                        <li> <i className="fa fa-chevron-right text-white" /> <a href="#" className="hover:text-[#d97706]">
                            Privacy policy</a> </li>
                    </ul>
                </div>

                <div className="md:order-2 lg:order-last ">
                    <h1 className="text-[#f48225] text-xl font-medium tracking-[0.030rem]"> Join Our Newsletter </h1> <br />
                    <p className="text-gray-300/80 w-3/5 leading-7 mb-5 md:w-3/4"> Join 25,000+ others and never miss out on new
                        tips,tutorials, and more. </p> <input type="email" placeholder="Enter E-mail Here" className="py-1 px-2 placeholder-gray-400 rounded-tl-xl focus: outline-none focus:border border-orange-600 md:w-1/2 lg:w-3/5" />
                    <button className="text-white bg-white p-1 -translate-x-1 rounded-br-xl hover:bg-orange-500"> Subscribe
                    </button>
                </div>
                <img className="order-last" src="https://i.ibb.co/4TWnWH4/download-1.webp" alt="" />

            </div>

            <div className="bg-[#161c23] p-3 flex flex-col-reverse text-center pt-5 space-y-8 md:flex-row md:justify-between md:space-y-0">
                <div className="flex mx-3 justify-between space-x-20 md:flex-row text-[#f48225] md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
                    <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
                    <p>Designed by <span className="text-[#f48225]">Anil & Konika</span></p>
                </div>
                <div className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">

                    <a href="#" className="inline-block" ><FaFacebookF className="w-10 h-10  bg-orange-500 hover:text-orange-500  rounded-full p-3 hover:bg-gray-200" /></a>
                    <a href="#" className="inline-block" ><FaTwitter className="w-10 h-10  bg-orange-500 hover:text-orange-500  rounded-full p-3 hover:bg-gray-200" /></a>
                    <a href="#" className="inline-block" ><FaLinkedinIn className="w-10 h-10  bg-orange-500 hover:text-orange-500  rounded-full p-3 hover:bg-gray-200" /></a>
                    <a href="#" className="inline-block" ><FaInstagram className="w-10 h-10  bg-orange-500 hover:text-orange-500  rounded-full p-3 hover:bg-gray-200" /></a>
                    <a href="#" className="inline-block" ><FaGoogle className="w-10 h-10  bg-orange-500 hover:text-orange-500  rounded-full p-3 hover:bg-gray-200" /></a>

                </div>
            </div>
        </div>




    );
};

export default Footer;