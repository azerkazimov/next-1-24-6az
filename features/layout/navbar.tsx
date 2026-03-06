import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-transparent">
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-between">
                    {/* <a href="/"> */}
                    <Link href="/"> 
                    {/* image  */}
                        <Image src="/moto.png" alt="EV-B" width={100} height={100} />
                    </Link>
                    {/* menu */}
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-lg font-medium hover:font-bold duration-300 transition-all">Home</Link>
                        <Link href="/products" className="text-lg font-medium hover:font-bold duration-300 transition-all">Products</Link>
                        <Link href="/gallery" className="text-lg font-medium hover:font-bold duration-300 transition-all">Gallery</Link>
                        <Link href="/contact" className="text-lg font-medium hover:font-bold duration-300 transition-all">Contact</Link>
                    </div>
                    
                    {/* Button */}
                    <Button variant="primary" className="py-6 transform translate-x-[-100px]">Login</Button>
                </div>
            </div>
        </nav>
    )
}