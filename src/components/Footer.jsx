import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div className=" w-11/12 md:w-3/5 mx-auto">
                <div className=" flex justify-center items-center pt-6">
                    <h1 className=" text-xl font-bold">@sif.dev</h1>
                </div>
                <div className=" flex justify-center items-center py-5 space-x-3">
                    <Link to='/'>Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="works">Works</Link>
                    <Link to="Reviews">Testimonial</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <p className=" text-center py-4 bg-gray-200">�� 2021 all rights reserved | Designed by ASIF</p>
        </>
    )
}

export default Footer