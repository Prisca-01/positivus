import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";


export default function Home() {
  return (
    <div className="container py-10 font-[family-name:var(--font-geist-sans)]">
      <section className="">
        <Header />
      </section>
      <section className="">
        <Hero />
      </section>
      <section className="">
        <Services />
      </section>
    </div>
  );
}
