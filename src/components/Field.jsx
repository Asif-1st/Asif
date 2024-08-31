/* eslint-disable react/prop-types */
import { useState } from "react";

const Field = ( {item} ) => {
  let para1 = item.description;
  let para2 = item.description.substring(0, 100);
  const [expand, setexpand] = useState(false)
  let data;
  data = !expand ? para2 : para1;
  const expanded = () => {
    setexpand(!expand);
  }
  return (
    <div className={`w-full md:w-1/2 flex-col justify-start items-start p-3 ${item.bgColor} rounded-md Hover:${item.bgHover}`}>
      <h1 className=" text-lg font-bold py-2">{item.title}</h1>
      <p className=" transition-all ">{data}</p>
      <button className=" py-1 px-2 bg-indigo-500 text-white rounded-md my-2" onClick={expanded}>{
        expand? "Read Less" : "Read More"
      }</button>
    </div>
  )
}

export default Field