import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./framer/styles.css";

import NavigationFramerComponent from "./framer/navigation";
import Contact from "./pages/Contact";
import Cosa from "./pages/cosa-facciamo";
import { privacytext, websiteConfig } from "./config/website";
import FooterFramerComponent from "./framer/footer";
import HeroFramerComponent from "./framer/hero";
import ThePlatformFramerComponent from "./framer/the-platform";
import DashboardFramerComponent from "./framer/dashboard";
import SectionWrapper from "./components/SectionWrapper";
import TickerFramerComponent from "./framer/ticker";
import TheProblemWeSolvedFramerComponent from "./framer/the-problem-we-solved";
import ExploreFramerComponent from "./framer/explore";
import PrivacyFramerComponent from "./framer/privacy";
import TeamFramerComponent from "./framer/team";

export default function App() {
  const [variant, setVariant] = useState("Desktop");
  const [footerVariant, setFooterVariant] = useState("Desktop");

  const deviceRef = useRef<"Phone" | "Tablet" | "Desktop">("Desktop");
  const prevScrollYRef = useRef(0);

  const getDevice = () => {
    const width = window.innerWidth;
    if (width < 768) return "Phone";
    if (width < 1024) return "Tablet";
    return "Desktop";
  };

  useEffect(() => {
    const updateDevice = () => {
      const device = getDevice();
      deviceRef.current = device;
      setFooterVariant(device);

      if (device === "Phone") setVariant("Phone Close");
      else if (device === "Tablet") setVariant("Tablet Close");
      else setVariant("Desktop");
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const prevY = prevScrollYRef.current;
      const device = deviceRef.current;

      if (currentY > prevY + 10) {
        // Scroll down
        if (device === "Phone") setVariant("Phone Scroll");
        else if (device === "Tablet") setVariant("Tablet Scroll");
        else setVariant("Desktop Scroll");
      } else if (currentY < prevY - 10) {
        // Scroll up
        if (device === "Phone") setVariant("Phone Close");
        else if (device === "Tablet") setVariant("Tablet Close");
        else setVariant("Desktop");
      }

      prevScrollYRef.current = currentY;
    };

    window.addEventListener("resize", updateDevice);
    window.addEventListener("scroll", handleScroll);
    updateDevice(); // Run once on mount

    return () => {
      window.removeEventListener("resize", updateDevice);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.location.hash === "#team") {
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [window.location.hash]);

  return (
    <Router>
      <div className="relative bg-black min-h-screen w-full overflow-x-hidden overflow-y-auto">
        {/* Fixed Nav always on top */}
        <div className="fixed top-0 left-0 w-full z-[9999]">
          <NavigationFramerComponent.Responsive
            homeLink={websiteConfig.navigation.homeLink}
            teamLink={websiteConfig.navigation.teamLink}
            cosaLink={websiteConfig.navigation.cosaLink}
            lavoraLink={websiteConfig.navigation.lavoraLink}
            contactLink={websiteConfig.navigation.contactLink}
            key={variant}
            className="!w-full"
            variants={{ base: variant as any }}
          />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Content below nav */}
                <SectionWrapper
                  ul="home"
                  slug="#hero"
                  name="HeroFramerComponent"
                >
                  <HeroFramerComponent.Responsive
                    className="!w-full"
                    arrowLink={"/#team"}
                    title={websiteConfig.hero.title}
                    words={websiteConfig.hero.words}
                    glowText={websiteConfig.hero.glowText}
                    chaosText={websiteConfig.hero.chaosText}
                    subheading={websiteConfig.hero.subheading}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ul="home"
                  slug="#platform"
                  name="ThePlatformFramerComponent"
                >
                  <ThePlatformFramerComponent.Responsive
                    className="!w-full"
                    title={websiteConfig.thePlatform.title}
                    tag={websiteConfig.thePlatform.tag}
                    subheading={websiteConfig.thePlatform.subheading}
                    body={websiteConfig.thePlatform.body}
                    li1={websiteConfig.thePlatform.li1}
                    li2={websiteConfig.thePlatform.li2}
                    li3={websiteConfig.thePlatform.li3}
                    li4={websiteConfig.thePlatform.li4}
                    li5={websiteConfig.thePlatform.li5}
                    li6={websiteConfig.thePlatform.li6}
                    li7={websiteConfig.thePlatform.li7}
                  />
                </SectionWrapper>
                <DashboardFramerComponent.Responsive
                  className="!w-full"
                  title={websiteConfig.dashboard.title}
                  point1={websiteConfig.dashboard.point1}
                  paragraph1={websiteConfig.dashboard.paragraph1}
                  point2={websiteConfig.dashboard.point2}
                  paragraph2={websiteConfig.dashboard.paragraph2}
                  point3={websiteConfig.dashboard.point3}
                  paragraph3={websiteConfig.dashboard.paragraph3}
                  point4={websiteConfig.dashboard.point4}
                  paragraph4={websiteConfig.dashboard.paragraph4}
                  point5={websiteConfig.dashboard.point5}
                  paragraph5={websiteConfig.dashboard.paragraph5}
                />
                <TickerFramerComponent.Responsive className="!w-full" />
                <TheProblemWeSolvedFramerComponent.Responsive
                  className="!w-full"
                  tag={websiteConfig.theProblemWeSolved.tag}
                  title={websiteConfig.theProblemWeSolved.title}
                  subheading={websiteConfig.theProblemWeSolved.subheading}
                  box1Title={websiteConfig.theProblemWeSolved.box1Title}
                  box1Paragraph={websiteConfig.theProblemWeSolved.box1Paragraph}
                  box1Li1={websiteConfig.theProblemWeSolved.box1Li1}
                  box1Li2={websiteConfig.theProblemWeSolved.box1Li2}
                  box1Li3={websiteConfig.theProblemWeSolved.box1Li3}
                  box1Li4={websiteConfig.theProblemWeSolved.box1Li4}
                  box1Li5={websiteConfig.theProblemWeSolved.box1Li5}
                  box1LastLine={websiteConfig.theProblemWeSolved.box1LastLine}
                  box1Sidetext={websiteConfig.theProblemWeSolved.box1Sidetext}
                  box2Title={websiteConfig.theProblemWeSolved.box2Title}
                  box2Paragraph={websiteConfig.theProblemWeSolved.box2Paragraph}
                  box2Li1={websiteConfig.theProblemWeSolved.box2Li1}
                  box2Li2={websiteConfig.theProblemWeSolved.box2Li2}
                  box2Li3={websiteConfig.theProblemWeSolved.box2Li3}
                  box2Li4={websiteConfig.theProblemWeSolved.box2Li4}
                  box2Li5={websiteConfig.theProblemWeSolved.box2Li5}
                  box2Sidetag={websiteConfig.theProblemWeSolved.box2Sidetag}
                  box3Title={websiteConfig.theProblemWeSolved.box3Title}
                  box3Paragraph={websiteConfig.theProblemWeSolved.box3Paragraph}
                  box3Li1={websiteConfig.theProblemWeSolved.box3Li1}
                  box3Li2={websiteConfig.theProblemWeSolved.box3Li2}
                  box3Li3={websiteConfig.theProblemWeSolved.box3Li3}
                  box3Li4={websiteConfig.theProblemWeSolved.box3Li4}
                  box3Sidetag={websiteConfig.theProblemWeSolved.box3Sidetag}
                  box4Li5={websiteConfig.theProblemWeSolved.box4Li5}
                />
                <ExploreFramerComponent.Responsive
                  className="!w-full"
                  tag={websiteConfig.explore.tag}
                  title={websiteConfig.explore.title}
                  hospitalTitle1={websiteConfig.explore.hospitalTitle1}
                  hospitalLogo1={websiteConfig.explore.hospitalLogo1}
                  hospitalTitle2={websiteConfig.explore.hospitalTitle2}
                  hospitalLogo2={websiteConfig.explore.hospitalLogo2}
                  hospitalParagraph1={websiteConfig.explore.hospitalParagraph1}
                  hospitalParagraph2={websiteConfig.explore.hospitalParagraph2}
                />

                <SectionWrapper
                  ul="home"
                  slug="#privacy"
                  name="PrivacyFramerComponent"
                >
                  <PrivacyFramerComponent.Responsive
                    className="!w-full"
                    label01={privacytext.privacy.label01}
                    label02={privacytext.privacy.label02}
                    label03={privacytext.privacy.label03}
                    label04={privacytext.privacy.label04}
                    gDPRTitle={privacytext.privacy.title1}
                    confidentialTitle={privacytext.privacy.title2}
                    certificateTitle={privacytext.privacy.title3}
                    formazioneTitle={privacytext.privacy.title4}
                    gDPRLi1={privacytext.privacy.GDPRli1}
                    gDPRLi2={privacytext.privacy.GDPRli2}
                    gDPRLi3={privacytext.privacy.GDPRli3}
                    gDPRLi4={privacytext.privacy.GDPRli4}
                    gDPRLi5={privacytext.privacy.GDPRli5}
                    gDPRLi6={privacytext.privacy.GDPRli6}
                    box4Li1={privacytext.privacy.Formazioneli1}
                    box4Li2={privacytext.privacy.Formazioneli2}
                    box4Li3={privacytext.privacy.Formazioneli3}
                    box4Li4={privacytext.privacy.Formazioneli4}
                    box4Li5={privacytext.privacy.Formazioneli5}
                  />
                </SectionWrapper>
                <SectionWrapper
                  ul="home"
                  slug="#team"
                  name="TeamFramerComponent"
                >
                  <TeamFramerComponent.Responsive
                    className="!w-full"
                    arrowLink={"/#hero"}
                    image1={websiteConfig.team.image1}
                    name1={websiteConfig.team.name1}
                    designation1={websiteConfig.team.designation1}
                    linkedinLink1={websiteConfig.team.linkedin1}
                    image2={websiteConfig.team.image2}
                    name2={websiteConfig.team.name2}
                    designation2={websiteConfig.team.designation2}
                    linkedinLink2={websiteConfig.team.linkedin2}
                    image3={websiteConfig.team.image3}
                    name3={websiteConfig.team.name3}
                    designation3={websiteConfig.team.designation3}
                    linkedinLink3={websiteConfig.team.linkedin3}
                    image4={websiteConfig.team.image4}
                    name4={websiteConfig.team.name4}
                    designation4={websiteConfig.team.designation4}
                    linkedinLink4={websiteConfig.team.linkedin4}
                    image5={websiteConfig.team.image5}
                    name5={websiteConfig.team.name5}
                    designation5={websiteConfig.team.designation5}
                    linkedinLink5={websiteConfig.team.linkedin5}
                    image6={websiteConfig.team.image6}
                    name6={websiteConfig.team.name6}
                    designation6={websiteConfig.team.designation6}
                    linkedinLink6={websiteConfig.team.linkedin6}
                    image7={websiteConfig.team.image7}
                    name7={websiteConfig.team.name7}
                    designation7={websiteConfig.team.designation7}
                    linkedinLink7={websiteConfig.team.linkedin7}
                    image8={websiteConfig.team.image8}
                    name8={websiteConfig.team.name8}
                    designation8={websiteConfig.team.designation8}
                    linkedinLink8={websiteConfig.team.linkedin8}
                    image9={websiteConfig.team.image9}
                    name9={websiteConfig.team.name9}
                    designation9={websiteConfig.team.designation9}
                    linkedinLink9={websiteConfig.team.linkedin9}
                    image10={websiteConfig.team.image10}
                    name10={websiteConfig.team.name10}
                    designation10={websiteConfig.team.designation10}
                    linkedinLink10={websiteConfig.team.linkedin10}
                  />
                </SectionWrapper>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cosa-facciamo" element={<Cosa />} />
        </Routes>

        <FooterFramerComponent.Responsive
          homeLink={websiteConfig.footer.homeLink}
          teamLink={websiteConfig.footer.teamLink}
          cosaLink={websiteConfig.footer.cosaLink}
          lavoraLink={websiteConfig.footer.lavoraLink}
          gdprLink={websiteConfig.footer.gdprLink}
          certificateLink={websiteConfig.footer.certificateLink}
          confidentialLink={websiteConfig.footer.confidentialLink}
          contactLink={websiteConfig.footer.contactLink}
          formazioneLink={websiteConfig.footer.formazioneLink}
          phone={websiteConfig.footer.phone}
          linkedInLink={websiteConfig.footer.linkedInLink}
          email={websiteConfig.footer.email}
          className="!w-full"
          variants={{ base: footerVariant as any }}
        />
      </div>
    </Router>
  );
}
