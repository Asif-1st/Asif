import Skills from './Skills.jsx'
import { Link } from 'react-router-dom';
const Hero = () => {
    const imgSrc = "https://www.pngitem.com/pimgs/m/455-4557075_custom-software-development-hd-png-download.png";
    return (
        <>
            <div>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-11/12 md:w-3/5 mx-auto my-16 gap-8">
                    <div className="flex justify-center items-start flex-col">
                        <div className=' relative'>
                            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[2.58em] w-full fill-blue-300/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
                            <h1 className=" font-Montserrat text-3xl my-5 max-w-80 font-semibold">Crafting Code, Building Solutions</h1>
                        </div>
                        <p className=' max-w-4xl'>Hi, I am <strong className=' text-blue-700'>[Asif]</strong>, a Front-End Web Developer passionate about creating innovative, efficient, and scalable solutions. With expertise in Html, Css, Javascript, TailwindCss, React, FramerMotion etc, I turn ideas into impactful digital experiences.</p>
                        <strong className=" mt-5 font-medium">Skills And Technologies:</strong>
                        <Skills />
                        <button className=" px-3 hover:bg-indigo-600 hover:scale-105 transition-all rounded-md py-2 bg-indigo-500 text-white font-semibold  mt-6"><Link to='*a'>Get in Touch</Link></button>
                    </div>
                    <div className="">
                        <img src={imgSrc} className=" rounded-full w-full h-auto" alt="Software" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero