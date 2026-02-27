
import Datsun from "@/components/ui/datsun";
import Navbar from "@/features/layout/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto">
        <h1 className="text-3xl font-bold">Hello World</h1>
        {/* <Cube/>
        <Sphere/> */}
        <Datsun/>
      </div>
    </>
  );
}
