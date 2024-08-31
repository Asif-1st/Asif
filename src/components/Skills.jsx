import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const TechnologyStack = () => {
    const icons = [
        { id: 1, icons: <FaHtml5 /> },
        { id: 2, icons: <FaCss3 /> },
        {id: 3, icons: <RiTailwindCssFill />},
        {id: 4, icons: <FaReact />},
        {id: 5, icons: <IoLogoJavascript />}
    ];
    return (
        <ul className="flex justify-start items-start mt-2 gap-4">
            {icons.map((icons) => {
                return(
                    <li key={icons.id} className=" text-2xl">{icons.icons}</li>
                )
            })}
        </ul>
    );
}

export default TechnologyStack;