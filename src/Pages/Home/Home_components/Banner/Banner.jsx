import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import './Banner.css'
import { Button } from "@mui/material";
// import { Button } from "@mui/material";

const Banner = () => {
    return (
        <>
            {/* used background image on banner-shape from css file */}
            <div className='banner-shape bg-[#e8f4f4] audio-font'>
                {/* main container */}
                <div className='flex flex-col lg:flex-row justify-between items-center 2xl:max-w-screen-2xl mx-auto'>
                    {/* banner text section */}
                    <div className='px-5 md:px-0 md:ml-10'>
                        <h1 className='mt-[60px] lg:mt-0 text-[50px] md:text-9xl lg:text-7xl xl:text-9xl mb-4 font-bold text-[#161c23]'><span>Qu</span>niverse</h1>
                        <h1 className='text-2xl mb-2 text-gray-800 font-semibold poppins-font'>Unleash Your Curiosity:<snap className='text-[#f48225]'> Ask, Discover & Share!</snap></h1>
                        <div className="mt-[30px] hidden md:flex">
                            <Link
                            >
                                <Button
                                    variant="contained"
                                    className="flex gap-3 items-center"
                                    sx={{
                                        backgroundColor: '#f48225',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        border: '1px solid #f48225',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#f48225',
                                            // border: '1px solid #f48225'
                                            // borderColor: '#f48225'
                                        },
                                    }}
                                >
                                    Explore Quniverse
                                    <HiArrowSmallRight />
                                </Button>
                            </Link>

                        </div>
                    </div>
                    {/* banner image */}
                    <div>
                        <img className='w-[800px] md:h-[400px] lg:h-full' src="https://i.ibb.co/xXs3bbX/banner-img.png" alt="" />
                        <div className="my-[40px] flex justify-center md:hidden">
                            <Link
                            // className='bg-[#f48225] btn text-xl font-semibold hover:bg-[#161c23] text-white items-center'
                            >
                                <Button
                                    variant="contained"
                                    className="flex gap-3 items-center"
                                    sx={{
                                        backgroundColor: '#f48225',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                        border: '1px solid #f48225',
                                        '&:hover': {
                                            backgroundColor: 'transparent',
                                            color: '#f48225',
                                            // border: '1px solid #f48225'
                                            // borderColor: '#f48225'
                                        },
                                    }}
                                >
                                    Explore Quniverse
                                    <HiArrowSmallRight />
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;