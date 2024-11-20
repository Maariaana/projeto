

import Link from "next/link";

export default function Header({ title }: any) {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <nav className="space-x-6">
                <Link href='/' className="Hover:text-blue-300">
                    Home
                </Link>
                <Link href='/blog' className="Hover:text-blue-300">
                    Blog
                </Link>
            </nav>
        </header>
    );
}