/* eslint-disable react/prop-types */

const Contact = ({ishome = false}) => {

    const userName =(e) => {
        console.log(e.target.value);
    }

    const ControlInput = (e) => {
        e.preventDefault();
    }
    return (
        <div className=" bg-gray-100">
            <div className=" w-11/12 md:w-3/5 mx-auto py-10 ">
                <div className=" flex justify-start items-center py-8">
                {ishome ? <h1 className=" text-2xl font-bold">Contact Me</h1> : '' }    
                </div>
                <form action="/" onSubmit={ControlInput}>
                    <div className=" bg- max-w-md mx-auto bg-white rounded-lg">
                        <div className=" flex justify-center items-center py-8">
                            <h1 className=" text-2xl font-bold">Login</h1>
                        </div>
                        <fieldset className=" flex flex-col justify-center items-start p-4">
                            <div className=" flex flex-col justify-center items-start space-y-2 w-full">
                                <label className=" font-semibold mt-8" htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required className=" border-2 rounded-md p-1 w-full"  onChange={userName}/>
                            </div>
                            <div className=" flex flex-col justify-center items-start space-y-2 w-full">
                                <label className=" font-semibold mt-8" htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" className=" border-2 rounded-md p-1 w-full" required />
                            </div>
                            <div className=" flex flex-col justify-center items-start space-y-2 w-full">
                                <label className=" font-semibold mt-8" htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required className=" w-full p-1 border-2"></textarea>
                            </div>
                            <div>
                                <div className="flex justify-center items-center my-3">
                                    <input type="checkbox" id="agree" name="agree" required className="mr-2" />
                                    <label htmlFor="agree">I agree to the terms and conditions</label>
                                </div>  
                            </div>
                            <div className=" py-5">
                                <input type="submit" value="Submit" className=" bg-indigo-400 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-indigo-500 transition-all animate-bounce"/>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact