import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code.” So here’s the proof. <br />
        Some of my favorite projects ↓
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "FixFlow AI — Autonomous Incident Response",
    desc: "AI detects failures, analyzes root causes, creates tickets, generates PRs, runs tests, and verifies fixes — resolving outages in minutes, not hours.",
    url: "https://github.com/Kritagya123611/FixFLow-AI",
  },
  {
    id: 2,
    title: "SwiftSearch — High-speed CLI Search Tool",
    desc: "Lightning-fast Go-based search engine using concurrency + inverted indexing to search filenames & content across huge directory structures.",
    url: "https://github.com/Kritagya123611/SwiftSearch",
  },
  {
    id: 3,
    title: "CreatorVault — Web3 Creator Economy SaaS",
    desc: "Multi-tenant platform enabling creators to launch branded storefronts for NFTs, digital assets, exclusive content, and services.",
    url: "https://github.com/Kritagya123611/Creator-Vault",
  },
  {
    id: 4,
    title: "GoBalancer — Cloud-ready HTTP Load Balancer",
    desc: "Round-robin routing, Redis-based state, health checks, and Dockerized deployment — scalable, concurrent & production-ready.",
    url: "https://github.com/Kritagya123611/GoBalancer-Streamlined-Traffic-Orchestrator-in-Go",
  },
];

export default Projects;
