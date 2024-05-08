import Layout from "@/components/Layout";
import { useFormik } from "formik";


const NuevaCuenta = () => {

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            password: "",
        },
        // validationSchema: Yup.object({
        //     nombre: Yup.string()
        //         .max(15, "Máximo 15 caracteres")
        //         .required("Requerido"),
        //     apellido: Yup.string()
        //         .max(15, "Máximo 15 caracteres")
        //         .required("Requerido"),
        //     email: Yup.string()
        //         .email("Email inválido")
        //         .required("Requerido"),
        //     password: Yup.string()
        //         .min(8, "Mínimo 8 caracteres")
        //         .required("Requerido"),
        // }),
        onSubmit: valores => {
            console.log('enviado');
            console.log(valores);
        },
    });

    return (
        <>
            <Layout>
                <h1 className="text-center text-2xl text-white font-light">Crear Nueva Cuenta</h1>

                <div className="flex justify-center mt-5">
                    <div className="w-full max-w-sm">
                        <form 
                            className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                            onSubmit={formik.handleSubmit}
                        >
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Nombre
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Nombre Usuario"
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                    Apellido
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="apellido"
                                    type="text"
                                    placeholder="Apellido Usuario"
                                    value={formik.values.apellido}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                                    Email
                                    
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email Address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
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
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <input
                                type="submit"
                                className="bg-blue-800 w-full mt-5 p-5 uppercase hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                value="Crear Cuenta"
                            />
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default NuevaCuenta;