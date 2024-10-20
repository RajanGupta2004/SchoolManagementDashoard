import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashBoardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">

            {/* left */}
            <div className="w-[14%] md:w-[8%] lg:w-[14%] ">
                <Link href="/" className="flex items-center justify-center md:justify-start gap-2 p-3">
                    <Image src="/logo.png" width={32} height={32} alt="logo" quality={100} />
                    <span className="font-semibold hidden lg:block">ApnaSchool </span>
                </Link>

                {/* all menus */}
                <Menu />
            </div>


            {/* right */}
            <div className="w-[86%] md:w-[92%] lg:w[86%] bg-slate-50 overflow-scroll">
                <Navbar />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
