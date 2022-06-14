import SectionFixed from "../components/structure/section/SectionFixed";
import Layout from "../components/structure/Layout";
import IntroContent from "../components/pages/landing/IntroContent";
import SectionFlex from "../components/structure/section/SectionFlex";
import ProjectBody from "../components/pages/landing/ProjectBody";

const LandingPage = () => {
  return (
    <Layout>
      <SectionFixed style="black">
        <IntroContent/>
      </SectionFixed>
      <SectionFlex style="black">
        <ProjectBody/>
      </SectionFlex>
    </Layout>
  );
};

export default LandingPage;
