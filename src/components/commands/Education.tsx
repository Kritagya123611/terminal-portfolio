import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
  title: "B.Tech in Computer Science & Engineering",
  desc: "KIET Group of Institutions | CGPA: 8.67 (Till 3rd Sem)",
},
{
  title: "Class 12 — 87%",
  desc: "Sunbeam School, Mughalsarai",
},
{
  title: "Class 10 — 93%",
  desc: "Sunbeam School, Mughalsarai",
},

];

export default Education;
