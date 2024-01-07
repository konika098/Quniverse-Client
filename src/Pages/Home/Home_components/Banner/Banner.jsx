import { HiArrowSmallRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
            <div className='bg-[#e8f4f4] h-[600px] '>
                <div className='flex justify-between items-center w-[1280px] mx-auto'>
                    <div className='ml-10'>
                        <h1 className='text-9xl mb-4 font-bold text-[#161c23]'><span>Qu</span>niverse</h1>
                        <h1 className='text-2xl mb-2  text-gray-800 font-semibold'>Unleash Your Curiosity:<snap className='text-[#f48225]'> Ask, Discover, Share!</snap></h1>
                        <div>
                        <Link 
                        className='bg-[#f48225] btn text-xl font-semibold hover:bg-[#161c23] text-white items-center'>Explore Quniverse <HiArrowSmallRight/></Link>

                        </div>
                    </div>
                    <div>
                    <div  style={{ width: '900px',height:'590px' }} className=" bg-[url('https://i.ibb.co/f0Zkwqx/shape-6.png')]  bg-cover ">
                      <img className=' w-[800px] ' src="https://i.ibb.co/xXs3bbX/banner-img.png" alt="" />
                       
                    </div>

                          
                    </div>
                </div>

            </div>
            
        </>
    );
};

export default Banner;