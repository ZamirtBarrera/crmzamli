import Layout from "@/components/Layout";


const Login = () => {

    return (
        <>
            <Layout>
                <h1 className="text-center text-2xl text-white font-light">Login</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Email
                                    
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                />
                            </div>

                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                    
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                    id="password"
                                    type="password"
                                    placeholder="Password Address"
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-blue-800 w-full mt-5 p-5 uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                value="Login"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login;