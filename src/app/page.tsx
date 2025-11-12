import Image from "next/image";
import heroImage from "../../public/cereal-killer-pt2-printed-oversized-tee-printed-oversized-tees-in-your-shoe-225786.jpg";
import heroImage2 from "../../public/cereal-killer-pt2-printed-oversized-tee-printed-oversized-tees-in-your-shoe-818444.webp";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="lg:w-3/5 mx-auto mt-16 sm:w-full">
        <div className="px-7">
          <h1 className="text-3xl font-bold ">
            Every Store, Every Option, At Your Fingertips
          </h1>
          <h1 className="text-3xl text-end font-bold mt-4 mb-8">
            No More Shopping FOMO
          </h1>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="flex justify-center lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
            <Image
              src={heroImage}
              alt="hero Image people wearing clothes on the beach"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="flex justify-center lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
            <Image
              src={heroImage2}
              alt="hero Image people wearing clothes on the beach"
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          <Link href={"/shop"}>
            <button
              type="button"
              className="cursor-pointer text-white mt-10 text-3xl cursor-pointer bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-30 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Find Your Look Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
