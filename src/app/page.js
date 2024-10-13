import HeroSection from "@/components/HeroSection";
import Destination from "@/components/Destination";
import HotDeals from "@/components/HotDeals";
import AboutShorter from "@/components/AboutShorter";
import Coppon from "@/components/Coppon";

export default function Home() {
  return (
    <>
      <main className='container mx-auto'>
        <article>
          <section>
            <HeroSection />
          </section>
          <section>
            <Destination />
          </section>
          <section>
            <HotDeals />
          </section>
          <section>
            <AboutShorter />
          </section>
          <section>
            <Coppon/>
          </section>
        </article>
      </main>
    </>
  );
}
