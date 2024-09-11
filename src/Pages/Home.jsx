import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, EnvelopeIcon, RectangleStackIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeSolidIcon, HomeIcon as HomeOutlineIcon, RectangleStackIcon as StackSolidIcon, RectangleStackIcon as StackOutlineIcon, BriefcaseIcon as BriefcaseSolidIcon, BriefcaseIcon as BriefcaseOutlineIcon, EnvelopeIcon as EnvelopeSolidIcon, EnvelopeIcon as EnvelopeOutlineIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo1.png'
// import skillData from '../../skills.json'


import pythonImage from '../assets/skills/python.png';
import djangoImage from '../assets/skills/django.png';
import reactImage from '../assets/skills/react.png';
import postgresImage from '../assets/skills/psql.png';
import graphqlImage from '../assets/skills/graphql.png';
import htmlImage from '../assets/skills/html.png';
import gitImage from '../assets/skills/git.png';
import postmanImage from '../assets/skills/postman.png';
import swaggerImage from '../assets/skills/swagger.png';
import jupyterImage from '../assets/skills/jupyter.png';
import pandasImage from '../assets/skills/pandas.png';
import figmaImage from '../assets/skills/figma.png';

function Home() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const handleMouseEnter = (iconName) => {
        setHoveredIcon(iconName);
    };

    const handleMouseLeave = () => {
        setHoveredIcon(null);
    };


    const skillData = [
        { 
            title: "PYTHON",
            imageSrc: pythonImage
        },
        {
            title: "DJANGO",
            imageSrc: djangoImage
        },
        {
            title: "REACT",
            imageSrc: reactImage
        },
        {
            title: "POSTGRES",
            imageSrc: postgresImage
        },
        {
            title: "GRAPH QL",
            imageSrc: graphqlImage
        },
        {
            title: "HTML",
            imageSrc: htmlImage
        },
        {
            title: "GIT",
            imageSrc: gitImage
        },
        {
            title: "POSTMAN",
            imageSrc: postmanImage
        },
        {
            title: "SWAGGER",
            imageSrc: swaggerImage
        },
        {
            title: "JUPYTER",
            imageSrc: jupyterImage
        },
        {
            title: "PANDAS",
            imageSrc: pandasImage
        },
        {
            title: "FIGMA",
            imageSrc: figmaImage
        }
    ];

    return (
        <div className='w-svw max-h-svh min-h-svh hidescroll flex flex-col justify-between bg-black'>
            <div>

                <motion.div initial={{ opacity: 0, y: -100, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3 }} className='p-5 text-white'>
                    <div className='md:hidden block pb-2 border-b-[1px] border-[#2d2d2d]'>
                        <h1 className='uppercase font-semibold text-2xl text-shadow-md p-2 ml-10'>Muhammed sahal</h1>
                    </div>
                    <div className='hidden md:block'>
                        {/* <div className='flex justify-between items-center text-center pb-5 border-b-[1px] rounded-3xl border-[#2d2d2d] special-shadow  shadow-[0px_0px_10px_0px_#79ff5e]'> */}
                        <div className="flex justify-between items-center text-center pb-5 border-b-[1px] rounded-3xl border-[#2d2d2d] special-shadow shadow-[0px_0px_10px_0px_#79ff5e]">

                            {/* <div className='flex justify-between items-center pb-5 border-b-[1px] rounded-3xl border-[#2d2d2d] shadow-md shadow-[#79ff5e]'> */}
                            <div className='mt4'>
                                <h1 className='uppercase font-semibold text-2xl text-shadow-md mt-4 p-2 ml-10'>Muhammed sahal</h1>
                            </div>
                            <div className="flex gap-10 justify-end mr-24 items-center mt-4">
                                <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Home</h3>
                                <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Works</h3>
                                <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Skills</h3>
                                <h3 className=" hover:text-[#79ff5e] hover:scale-105 font-medium hover:cursor-pointer hover:shadow-[0_0_10px_#79ff5e]  p-2 rounded-xl w-24 text-center transition-shadow duration-300">Contact</h3>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <br />
                <div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} >
                        <h1 className=' text-[#FAFAFA] pl-1 pr-1  text-center text-xl sm:text-6xl font-semibold shadow-lg animate-pulse'><span className='opacity-50'>A Passionate </span><span className='text-[#79ff5e]'>FullStack</span><span className='opacity-50'> Developer </span><br /> <span className='opacity-50 '>Crafting </span><span className='text-[#79ff5e]'>Quality</span><span className='opacity-50 '>  Code.</span></h1>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='sm:pl-32 sm:pr-32 p-5 pt-14 pb-14' >
                        <p className='text-[#FAFAFA] opacity-70 font-extralight sm:text-2xl'>
                            I am Muhammed Sahal, a proficient full-stack developer specializing in Django and React. Committed to delivering top-notch solutions, I am driven by my passion for technology.
                            <br />
                            <br />
                            I'm on the lookout for a position that aligns with my skills and aspirations, where I can make a valuable impact.
                        </p>
                    </motion.div>
                    <h1 className='text-4xl font-semibold uppercase text-center text-white'>Skills </h1>
                    <br />
                    <div className='flex flex-wrap justify-center bg-black gap-5 p-5 w-full h-full'>
                        {skillData.map((item, index) => (
                            <div key={index} className='flex justify-center items-center p-5'>
                                <div className=' flex flex-col justify-center items-center rounded-3xl special-shadow shadow-[0px_0px_10px_0px_#79ff5e] w-52 h-52 '>
                                    <div className='flex justify-center  items-center '>
                                        <img src={item.imageSrc} alt="img" className='w-24 h-24 flex justify-center' />
                                    </div>
                                    <div className='flex justify-center  items-center '>
                                        <h2 className=' text-center uppercase font-semibold text-[#79ff5e] '>{item.title}</h2>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    <h1 className='text-center uppercase font-semibold bg-[#000000] text-4xl text-white'>Works</h1>
                    <div className='bg-red w-max-screen h-max-screen scroll-m-1 justify-center bg-[#000000] flex flex-wrap gap-5'>
                        <div className='w-[45rem] h-[30rem] bg-[#000000] rounded-3xl special-shadow shadow-[0px_0px_10px_0px_#79ff5e] mt-5'>
                        <img src={figmaImage} alt="works" className='w-full h-3/4 mt-3' />
                        </div>
                      
                    </div>
                </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 100, scale: 1 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.3 }} className='md:hidden block'>
                <div className="flex justify-between p-5 pt-3 items-center">
                    <div
                        onMouseEnter={() => handleMouseEnter('home')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'home' ? (
                            <HomeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <HomeIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('stack')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'stack' ? (
                            <StackSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <RectangleStackIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('briefcase')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'briefcase' ? (
                            <BriefcaseSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <BriefcaseIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                    <div
                        onMouseEnter={() => handleMouseEnter('envelope')}
                        onMouseLeave={handleMouseLeave}
                        className="h-6 w-6 hover:cursor-pointer hover:scale-105 transition-transform"
                    >
                        {hoveredIcon === 'envelope' ? (
                            <EnvelopeSolidIcon className="h-6 w-6 text-[#79ff5e]" />
                        ) : (
                            <EnvelopeIcon className="h-6 w-6 text-[#79ff5e]" />
                        )}
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Home