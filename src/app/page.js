import HeroSection from "@/components/HeroSection";
import Destination from "@/components/Destination";
import HotDeals from "@/components/HotDeals";

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
          <section className="mt-20">
            <HotDeals />
          </section>
        </article>
      </main>
    </>
  );
}
