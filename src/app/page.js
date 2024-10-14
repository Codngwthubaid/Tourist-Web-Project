import HeroSection from "@/components/HeroSection";
import Destination from "@/components/Destination";
import HotDeals from "@/components/HotDeals";
import AboutShorter from "@/components/AboutShorter";
import Coppon from "@/components/Coppon";
import PopularTour from "@/components/PopularTour";
import BlogPost from "@/components/BlogPost";
import SubMail from "@/components/SubMail";

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
          <section>
            <PopularTour/>
          </section>
          <section>
            <BlogPost/>
          </section>
          <section>
            <SubMail/>
          </section>
        </article>
      </main>
    </>
  );
}
