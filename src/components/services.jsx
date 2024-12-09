import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";


export default function Services() {
  return (
    <div className="container md:px-28 mt-20">
      <div className="flex flex-row gap-6 items-center">
        <h2 className="bg-neonGreen font-bold p-1 text-xl rounded-lg">
          Services
        </h2>
        <p className="w-[490px] text-base leading-4">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-2 mt-12">
        <div className="flex justify-between">
          <div>
            <p className="bg-neonGreen font-bold p-1 text-xl rounded-lg">
              Search engine
            </p>
            <p className="bg-neonGreen font-bold p-1 text-xl rounded-lg">
              optimization
            </p>
            <BsArrowUpRight className="mt-24 text-neonGreen font-extrabold bg-black rounded-full"/>
            <span>Learn more</span>
          </div>
          <Image
            src="/search.svg"
            alt="search engine optimization"
            width={1020}
            height={280}
            className="w-full max-w-[50%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
