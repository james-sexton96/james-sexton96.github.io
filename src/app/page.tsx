import {
  NavBar,
  HeroSection,
  AboutMe,
  WorkHistory,
  PublicationsList,
  ContactSection,
  Footer,
} from "../components";
import { publications, workHistory } from "../data";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutMe />
        <WorkHistory items={workHistory} />
        <PublicationsList publications={publications} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
