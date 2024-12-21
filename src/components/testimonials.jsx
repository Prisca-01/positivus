import { FaRegCommentAlt } from "react-icons/fa";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="container md:px-28 mt-32">
      <div className="flex flex-row gap-6 items-center">
        <h2 className="bg-neonGreen w-[15%] font-bold p-1 text-2xl rounded-lg">
          Testimonials
        </h2>
        <p className="w-[420px] text-base leading-4">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <div className="bg-black rounded-3xl p-12 mt-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="grid grid-col-1">
            <div className="flex flex-col">
              <div className="p-6 border-neonGreen rounded-3xl border-solid border-2">
                <p className="text-base text-white leading-relaxed">
                  &ldquo;We have been working with Positivus for the past year
                  and have seen a significant increase in website traffic and
                  leads as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence.&ldquo;
                </p>
              </div>
              {/* User Details */}
              <div className="mt-6 flex flex-col items-start gap-1">
                <h3 className="font-bold text-lg text-neonGreen">Jane Doe</h3>
                <p className="text-white">Marketing Director at XYZ Corp</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-col-1">
            <div className="flex flex-col">
              <div className="p-6 border-neonGreen rounded-3xl border-solid border-2">
                <p className="text-base text-white leading-relaxed">
                  &ldquo;We have been working with Positivus for the past year
                  and have seen a significant increase in website traffic and
                  leads as a result of their efforts. The team is professional,
                  responsive, and truly cares about the success of our business.
                  We highly recommend Positivus to any company looking to grow
                  their online presence.&ldquo;
                </p>
              </div>
              {/* User Details */}
              <div className="mt-6 flex flex-col items-start gap-1">
                <h3 className="font-bold text-lg text-neonGreen">Jane Doe</h3>
                <p className="text-white">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mt-32">
        <div className="flex flex-row gap-6 items-center">
          <h2 className="bg-neonGreen w-[15%] font-bold p-1 text-2xl rounded-lg">
            Contact Us
          </h2>
          <p className="w-[290px] text-base leading-4">
            Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs
          </p>
        </div>
        <div className="flex justify-between items-center bg-slate-100 rounded-3xl mt-12 pl-10 py-10">
          <div className="form">
            <form action="submit">
              <div className="flex gap-2">
                <input type="radio" name="" id="first" className="radio"/>
                <label htmlFor="first">Say Hi</label>
                <input type="radio" name="" id="second" className="radio ml-8" />
                <label htmlFor="second">Get a Quote</label>
              </div>
              <div className="mt-8">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-6 py-2 mt-2 border-2 border-black rounded-lg"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="name">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-6 py-2 mt-2 border-2 border-black rounded-lg"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message">Message*</label>
                <textarea
                  name="message"
                  className="w-full px-6 py-2 mt-2 border-2 border-black  rounded-lg"
                  id="message"
                  placeholder="Message"
                  cols="40"
                  rows="7"
                ></textarea>
              </div>
              <button type="submit" className="bg-black w-full rounded-lg mt-6 py-3 text-white">Send Message</button>
            </form>
          </div>
          {/* <div> */}
            <Image src="/contact.svg" alt="contact" className="absolute -right-28" width={500} height={900} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
