/* eslint-disable react/prop-types */
import project from '../data/project.json';
import { FaStar } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
export default function Example({ ishome = false }) {
  let data = ishome ? project.slice(0, 6) : project;
  return (
    <div>
      <div className=' mx-auto  w-11/12 lg:w-3/5 my-16'>
        <h1 className=' my-16 text-2xl font-semibold'>{ishome ? 'Works' : 'Projects'}</h1>

        {/* projects container  */}
        <div className=' grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {data.map((item) => {
            return (
              <div key={item.id} className=' rounded-lg hover:scale-105  transition-all bg-gray-50'>
                <div className=' p-4'>
                  <div className=' w-full h-48 flex justify-center items-center bg-gray-200 uppercase rounded-md'>300<HiMiniXMark />300</div>
                </div>
                <div className=' p-3'>
                  <h2 className=' text-gray-500 font-bold py-3'>{item.name}</h2>
                  <p className=' pb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                  <div className=' md:space-y-2 lg:flex md:justify-between md:items-center'>
                    <div className=' flex justify-start items-center'>
                      <FaStar className=' text-yellow-400' />
                      <FaStar className=' text-yellow-400' />
                      <FaStar className=' text-yellow-400' />
                      <FaStar className=' text-yellow-400' />
                      <FaStar className=' text-yellow-400' />
                      {item.rating}
                    </div>
                    <button className=' bg-indigo-500 px-2 py-1 rounded-sm text-white hover:bg-indigo-600'><a>Live Preview</a></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
