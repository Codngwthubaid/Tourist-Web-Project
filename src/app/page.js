import HeroSection from "@/components/HeroSection";
import Destination from "@/components/Destination";

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
      </article>
    </main>
  </>
  );
}
