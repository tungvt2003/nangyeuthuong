import HomeActivate from "@components/HomeActivate";
import HomeCarousel from "@components/HomeCarousel";
import HomeContact from "@components/HomeContact";
import HomeIntroduce from "@components/HomeIntroduce";
import HomeResult from "@components/HomeResult";
import HomeSponsor from "@components/HomeSponsor";

export default function Home() {
  return (
    <>
      <section id="carousel">
        <HomeCarousel />
      </section>

      <section id="introduce">
        <HomeIntroduce />
      </section>

      <section id="activate">
        <HomeActivate />
      </section>

      <section id="result">
        <HomeResult />
      </section>

      <section id="sponsor">
        <HomeSponsor />
      </section>

      <section id="contact">
        <HomeContact />
      </section>
    </>
  );
}
