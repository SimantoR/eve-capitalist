"use client";

import Image from 'next/image';
import { useAppContext } from "app/AppContext";
import { Inter, Kanit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const kanit = Kanit({ weight: '400', subsets: ['latin'] })

export default function Home() {
    const context = useAppContext();

    return (
        <div className="container dark:text-gray-400 py-4 space-y-4">
            <h1 className="text-2xl lg:text-3xl">
                Welcome to <span style={kanit.style}>EVE Capitialist</span>
            </h1>
            <p>
                This platform provides organizations with tools and services. This
                service is hosted and mintained by <u>StarGaze</u>, <u>Raduulle</u> and <u>GunSlinger</u>.
            </p>
        </div>
    );
}
