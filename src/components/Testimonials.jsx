/* eslint-disable react/prop-types */
import reviews from '../data/clients.json';
import { FaMapMarkerAlt } from "react-icons/fa";
const Testimonials = ({ishome = false}) => {

    const snapy = ishome ? ' flex justify-center items-center w-full snap-x  overflow-x-scroll scroll-smooth space-x-10 py-10' : ' flex flex-col justify-center items-center';

    const snapDiv = ishome ? 'flex  max-w-xl snap-center shrink-0 bg-indigo-50 rounded-md p-2 justify-center items-center gap-2' : 'w-lg flex flex-col justify-center items-start';

    const snapimg = ishome ? ' w-full px-6' : '';
    return (    
        <>
            <div className=" w-11/12  mx-auto my-10">
                {/* head title  */}
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className=" text-2xl font-semibold">Testimonials</h1>
                    <p>What our clients says</p>
                </div>
                {/* testimonials  */}
                <div className={snapy}>  
                    {
                        reviews.map((review) => {
                            return (
                                <div key={review.id} className={snapDiv}>
                                    <div className={snapimg}>
                                        <img className=' w-full' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
                                    </div>
                                    {/* reviews of client */}
                                    <div>
                                        <div>
                                            <h2 className=' font-bold py-2'>{review.name}</h2>
                                            <p className=' pb-4'><strong>Massage:</strong>{review.message}</p>
                                        </div>
                                        <div>
                                            <hr className=' bg-gray-300 h-[2px]'/>
                                            <div className=' flex justify-between items-center py-2'>
                                                <FaMapMarkerAlt />
                                                <span>{review.location}</span> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Testimonials