import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function Services() {
  return (
    <div className="container md:px-28 mt-24">
      <div className="flex flex-row gap-6 items-center">
        <h2 className="bg-neonGreen w-[15%] font-bold p-1 text-3xl rounded-lg">
          Services
        </h2>
        <p className="w-[490px] text-base leading-4">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-2 mt-12 gap-10">
        <div className="flex justify-between p-9 bg-slate-100 rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-neonGreen text-center text-xl w-40 rounded-lg">
              Search engine
            </p>
            <p className="bg-neonGreen text-center text-xl w-36 rounded-lg">
              optimization
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-black w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-neonGreen font-extrabold " />
              </div>
              <span>Learn more</span>
            </div>
          </div>
          <Image
            src="/search.svg"
            alt="search engine optimization"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
        {/*  */}
        <div className="flex justify-between p-9 bg-neonGreen rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-white text-center text-xl w-40 rounded-lg">
              Pay-per-click
            </p>
            <p className="bg-white text-center text-xl w-36 rounded-lg">
              advertising
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-black w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-neonGreen font-extrabold " />
              </div>
              <span>Learn more</span>
            </div>
          </div>
          <Image
            src="/click.svg"
            alt="click"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
        {/*  */}
        <div className="flex justify-between p-9 bg-black rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-white text-center text-xl w-36 rounded-lg">
              Social Media
            </p>
            <p className="bg-white text-center text-xl w-28 rounded-lg">
              Marketing
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-white w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-black font-extrabold " />
              </div>
              <span className="text-white">Learn more</span>
            </div>
          </div>
          <Image
            src="/social.svg"
            alt="social media marketing"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
        {/*  */}
        <div className="flex justify-between p-9 bg-slate-100 rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-neonGreen text-center w-20 text-xl rounded-lg">
              Email
            </p>
            <p className="bg-neonGreen text-center text-xl rounded-lg">
              Marketing
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-black w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-neonGreen font-extrabold " />
              </div>
              <span>Learn more</span>
            </div>
          </div>
          <Image
            src="/email.svg"
            alt="email marketing"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
        {/*  */}
        <div className="flex justify-between p-9 bg-neonGreen rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-white text-center text-xl w-24 rounded-lg">
              Content{" "}
            </p>
            <p className="bg-white text-center text-xl w-24 rounded-lg">
              Creation
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-black w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-neonGreen font-extrabold " />
              </div>
              <span>Learn more</span>
            </div>
          </div>
          <Image
            src="/content.svg"
            alt="content creation"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
        {/*  */}
        <div className="flex justify-between p-9 bg-black rounded-3xl border-black border-2 border-b-4">
          <div>
            <p className="bg-neonGreen text-center text-xl w-36 rounded-lg">
              Analytics and
            </p>
            <p className="bg-neonGreen text-center text-xl w-24 rounded-lg">
              Tracking
            </p>
            <div className="flex mt-24 items-center gap-2">
              <div className="flex justify-center bg-white w-7 h-7 rounded-full items-center">
                <BsArrowUpRight className=" text-black font-extrabold " />
              </div>
              <span className="text-white">Learn more</span>
            </div>
          </div>
          <Image
            src="/analytics.svg"
            alt="social media marketing"
            width={200}
            height={50}
            // className="w-full max-w-[50%] object-cover"
          />
        </div>
      </div>

      {/*  */}

      <div className="flex flex-col lg:flex-row items-center p-10 justify-between  gap-8 rounded-3xl bg-slate-100 h-[285px] mt-24">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Let&apos;s make things happen</h3>
          <p className="text-gray-700 text-base max-w-[390px]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white px-3 w-[230px] py-3 rounded-lg hover:bg-gray-800">
            Get your free proposal
          </button>
        </div>
        <Image
          src="/star.svg"
          alt="star"
          width={420}
          height={100}
          className="-ml-10 lg:-ml-6"
        />
      </div>
      {/* CASE STUDIES */}
      <div className="mt-28">
        <div className="flex flex-row gap-6 items-center">
          <h2 className="bg-neonGreen font-bold p-1 text-xl rounded-lg">
            Case Studies
          </h2>
          <p className="w-[490px] text-base leading-4">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-12 bg-black p-10 rounded-3xl text-white gap-8">
          <div className="flex-1 lg:px-4">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <span className="flex items-center mt-6 text-neonGreen">
              Learn more <BsArrowUpRight className="ml-4" />
            </span>
          </div>

          <div className="hidden lg:block border-l border-white"></div>

          <div className="flex-1 lg:px-4">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <span className="flex items-center mt-6 text-neonGreen">
              Learn more <BsArrowUpRight className="ml-4" />
            </span>
          </div>

          <div className="hidden lg:block border-l border-white"></div>

          <div className="flex-1 lg:px-4">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <span className="flex items-center mt-6 text-neonGreen">
              Learn more <BsArrowUpRight className="ml-4" />
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
