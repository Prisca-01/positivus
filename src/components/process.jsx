"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

const processSteps = [
  {
    id: 1,
    title: "Consultation",
    details:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: 2,
    title: "Research and Strategy Development",
    details:
      "We conduct in-depth research and craft a data-driven strategy tailored to your business goals.",
  },
  {
    id: 3,
    title: "Implementation",
    details:
      "We put the strategy into action with precision, using industry-leading tools and methods.",
  },
  {
    id: 4,
    title: "Monitoring and Optimization",
    details:
      "We continuously monitor and optimize campaigns for maximum performance and ROI.",
  },
  {
    id: 5,
    title: "Reporting and Communication",
    details:
      "We provide transparent reports and maintain open communication throughout the project lifecycle.",
  },
  {
    id: 6,
    title: "Continual Improvement",
    details:
      "We ensure ongoing improvements to keep your business competitive in an ever-changing market.",
  },
];

export default function Process() {
  const [openSteps, setOpenSteps] = useState([]);

  const toggleStep = (id) => {
    setOpenSteps((prev) =>
      prev.includes(id) ? prev.filter((step) => step !== id) : [...prev, id]
    );
  };

  return (
    <div className="container md:px-28 mt-24">
      <div className="flex flex-col md:flex-rowgap-6 items-center">
        <h2 className="bg-neonGreen w-[30%] font-bold p-1 text-2xl rounded-lg hidden md-visible">
          Our Working Process
        </h2>
        <p className="w-[250px] text-base leading-4 text-center">
          Step-by-step guide to achieving your business goals.
        </p>
      </div>

      <div className="w-full flex flex-col mt-12 gap-6 px-4">
        {processSteps.map(({ id, title, details }) => (
          <div
            key={id}
            className={`border-2 border-b-4 border-black rounded-3xl p-6 ${
              openSteps.includes(id) ? "bg-neonGreen" : "bg-slate-100"
            }`}
          >
            <div className="flex flex-row justify-between items-center">
              <p className="flex items-center">
                <span className="font-extrabold text-4xl mr-4">{`0${id}`}</span>
                <span className="font-bold">{title}</span>
              </p>

              <div
                className={`flex justify-center items-center w-7 h-7 rounded-full cursor-pointer ${
                  openSteps.includes(id) ? "bg-slate-100" : ""
                } border-black border-2`}
                onClick={() => toggleStep(id)}
              >
                {openSteps.includes(id) ? (
                  <FaMinus className="text-black font-extrabold" />
                ) : (
                  <FaPlus className="text-black font-extrabold" />
                )}
              </div>
            </div>

            {openSteps.includes(id) && (
              <>
                <hr className="my-4 border-black" />
                <p className="text-base text-black">{details}</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="mt-24">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <h2 className="bg-neonGreen font-bold px-2 py-1 text-2xl rounded-lg">
            Team
          </h2>
          <p className="w-[450px] text-base leading-4 text-center">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies{" "}
          </p>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 mt-12 px-4">
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image src="/ceo.svg" alt="CEO" width={100} height={100} />

              <div className="flex flex-col absolute top-14 right-8">
                <h3 className="font-bold text-base">John Smith</h3>
                <p className="text-base">CEO and Founder</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              10+ years of experience in digital marketing. Expertise in SEO,
              PPC, and content strategy.
            </p>
          </div>

          {/*  */}
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image
                src="/jane.svg"
                alt="operations"
                width={100}
                height={100}
              />

              <div className="flex flex-col absolute top-14 right-0">
                <h3 className="font-bold text-base">Jane Doe</h3>
                <p className="text-base">Director of Operations</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              7+ years of experience in project management and team leadership.
              Strong organizational and communication skills
            </p>
          </div>

          {/*  */}
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image
                src="/michael.svg"
                alt="SEO specialist"
                width={100}
                height={100}
              />

              <div className="flex flex-col absolute top-14 right-0">
                <h3 className="font-bold text-base">Michael Brown</h3>
                <p className="text-base">Senior SEO Specialist</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              5+ years of experience in SEO and content creation. Proficient in
              keyword research and on-page optimization
            </p>
          </div>
          {/*  */}
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image
                src="/emily.svg"
                alt="ppc manager"
                width={100}
                height={100}
              />

              <div className="flex flex-col absolute top-14 right-12">
                <h3 className="font-bold text-base">Emily Johnson</h3>
                <p className="text-base">PPC Manager</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              3+ years of experience in paid search advertising. Skilled in
              campaign management and performance analysis{" "}
            </p>
          </div>
          {/*  */}
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image
                src="/brian.svg"
                alt="social media specialist"
                width={100}
                height={100}
              />

              <div className="flex flex-col absolute top-14 right-0">
                <h3 className="font-bold text-base">Brian Williams</h3>
                <p className="text-base">Social Media Specialist</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              4+ years of experience in social media marketing. Proficient in
              creating and scheduling content, analyzing metrics, and building
              engagement{" "}
            </p>
          </div>
          {/*  */}
          <div className="bg-white p-6 border-black border-2 border-b-4 rounded-3xl relative">
            <Image
              src="/linkedin.svg"
              alt="LinkedIn icon"
              width={30}
              height={50}
              className="absolute top-6 right-6"
            />

            <div className="flex relative gap-4">
              <Image
                src="/sarah.svg"
                alt="content creator"
                width={100}
                height={100}
              />

              <div className="flex flex-col absolute top-14 right-12">
                <h3 className="font-bold text-base">Sarah KIm</h3>
                <p className="text-base">Content Creator</p>
              </div>
            </div>

            {/* Horizontal Line and Description */}
            <hr className="my-4 border-black" />
            <p className="text-base text-black">
              2+ years of experience in writing and editing{" "}
            </p>
            <p className="text-base text-black">
              Skilled in creating compelling, SEO-optimized content for various
              industries
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end justify-center">
        <button className="bg-black mt-8 text-white px-3 w-[350px] lg:w-[200px] py-3 rounded-lg hover:bg-gray-800">
          See all Team
        </button>
      </div>
    </div>
  );
}
