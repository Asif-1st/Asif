import Field from "./Field.jsx";
import field from "../data/field.json";
import { Link } from "react-router-dom";

const About = () => {

    const imgsrc = "https://png.pngtree.com/png-vector/20240208/ourmid/pngtree-software-development-isometric-web-concept-png-image_11719508.png";
    return (
        <div>
            <div className=" w-11/12 md:w-3/5 mx-auto py-14">
                <h1 className=" text-xl font-semibold font-Montserrat">About</h1>
                <div className=" my-14 flex flex-col-reverse gap-10 justify-between items-center md:flex-row-reverse">
                    <div>
                        <h1 className=" text-2xl font-Montserrat max-w-lg font-semibold mb-5">Creative Web Developer | Problem Solver | Technology Enthusiast</h1>
                        <p className=" pb-3 max-w-xl">I am a passionate software developer with expertise in [specific languages/technologies]. Over the years, I have worked on  web development creating efficient and scalable solutions that address complex challenges. I am driven by a love for problem-solving and a commitment to staying updated with the latest industry trends.</p>
                        <p className=" pb-3 max-w-xl">When I am not coding, I enjoy Traveling, which helps keep me balanced and inspired. I am always eager to connect with others and contribute to projects that make a meaningful impact.</p>
                        <button className="px-5 rounded-md py-2 bg-indigo-500 text-white font-semibold  mt-6"><Link to='*'>See More</Link></button>
                    </div>
                    <div>
                        <img src={imgsrc} alt="img" />
                    </div>
                </div>
                <div className=" flex justify-center items-center md:items-start gap-4 flex-col md:flex-row">
                    {
                        field.map(item => (
                            <Field key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default About