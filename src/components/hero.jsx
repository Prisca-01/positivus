import Image from "next/image";

export default function Hero() {
  return (
    <div className="container md:px-28 mt-16">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-5xl font-bold w-[450px] leading-snug">
            Navigating the digital landscape for success
          </h1>
          <p className="text-gray-700 w-[390px]">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="bg-black text-white px-3 w-[250px] py-3 rounded-lg hover:bg-gray-800">
            Book a consultation
          </button>
        </div>
        <Image
          src="/hero-image.svg"
          alt="hero"
          width={1720}
          height={980}
          className="w-full max-w-[50%] object-cover"
        />
      </div>
      {/* Brand Icons */}
      <div>
        <div className="flex flex-row gap-24 mt-20">
          <div className="flex flex-col items-center">
            <Image src="/amazon.svg" alt="icon" width={100} height={100} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/dribble.svg" alt="icon" width={100} height={100} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/hubspot.svg" alt="icon" width={100} height={100} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/notion.svg" alt="icon" width={100} height={100} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/netflix.svg" alt="icon" width={100} height={100} />{" "}
          </div>
          <div className="flex flex-col items-center">
            <Image src="/zoom.svg" alt="icon" width={100} height={100} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
