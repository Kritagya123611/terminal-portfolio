import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, I’m <HighlightSpan>Kritagya</HighlightSpan> 
      </p>
      <p>
        I’m <HighlightAlt>a full-stack developer & systems enthusiast</HighlightAlt>{" "}
        from India.
      </p>
      <p>
        I love building high-impact products from intelligent DevOps automation
        tools to Web3 platforms and distributed backend systems. Always exploring
        cutting-edge tech including AI, cryptography, and cloud-native
        architectures.
      </p>
    </AboutWrapper>
  );
};

export default About;
