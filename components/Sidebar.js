import Link from "next/link";
import { useRouter } from "next/router";


const Sidebar = () => {

    // routing de next
    const router = useRouter();

    return (
        <aside className="bg-gray-700 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
            <div >
                <p className="text-white text-2xl font-black">ZAMLI - Admin</p>
            </div>

            <nav className="mt-5 list-none">
                <li className={router.pathname === "/" ? "bg-blue-800 p-3": "p-3"}>
                    <Link href="/" legacyBehavior={true}>
                        <a className="text-white block">
                            Clientes
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/pedidos" ? "bg-blue-800 p-3": "p-3"}>
                    <Link href="/pedidos" legacyBehavior={true}>
                        <a className="text-white block">
                            Pedidos
                        </a>
                    </Link>
                </li>
                <li className={router.pathname === "/productos" ? "bg-blue-800 p-3": "p-3"}>
                    <Link href="/productos" legacyBehavior={true}>
                        <a className="text-white block">
                            Productos
                        </a>
                    </Link>
                </li>
            </nav>
        </aside>
    );
}

export default Sidebar;