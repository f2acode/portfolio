import { GithubFilled, LinkedinFilled, MailFilled, StarFilled } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Layout, Tag, Typography } from "antd";
import React, { useState } from "react";

const { Content } = Layout;
const { Title } = Typography;

import hand from "../images/hand.gif";
import tech from "../images/tech-animation.gif";

const imageAltText = "purple and blue abstract background";

const skillsList = [
  "Team management",
  "Software development",
  "Data engineering",
  "Software architecture",
  "Software design",
  "Entrepreneurship",
];

const imageStyle = {
  height: "100%",
  left: "50%",
  objectFit: "cover",
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  transform: "translate(-50%, 0)",
  width: "100%",
  zIndex: -1,
};

const About = (props) => {
  const { linkedIn, gitHub, email } = props;

  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    background: "linear-gradient(to right, darkred, red)",
    border: "none",
    color: "white",
    textShadow: "0px 0px 10px rgba(255,255,255,0.7)",
    transition: "transform 0.3s ease",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    transform: isHovered ? "scale(1.1) translateZ(0)" : "translateZ(0)",
  };

  return (
    <Content id="about" style={{ padding: "5rem 0", display: "flex", justifyContent: "center" }}>
      <img src={tech} alt={imageAltText} style={imageStyle} />
      <Card
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Title level={1} style={{ margin: 0 }}>
          Hi <img src={hand} alt="hand gesture" style={{ width: "32px" }} />, I&apos;m Felipe
          Augusto!
        </Title>
        <Title level={3} type="secondary" style={{ margin: 0 }}>
          Software/Data professional & Entrepreneur
        </Title>
        <Divider />
        <Title level={4} type="secondary" style={{ margin: 0 }}>
          Computer scientist and Master in modeling complex systems (USP).
        </Title>
        <Title level={4} type="secondary" style={{ margin: 0 }}>
          Self-taught with experience in front end, back end, mobile and data engineering.
        </Title>
        <Title code level={4}>
          Passionate about solving problems in new creative ways to drive innovation and impact.
        </Title>
        <Divider />
        <Flex wrap="wrap" gap="small">
          {skillsList.map((skill) => (
            <Tag color="geekblue" key={skill} style={{ fontSize: "medium" }}>
              {skill}
            </Tag>
          ))}
        </Flex>
        <Divider />
        <Flex wrap="wrap" gap="large" justify={"center"} align={"center"}>
          <Button
            key="porfolioShortcut"
            type="primary"
            style={buttonStyle}
            icon={<StarFilled />}
            size={"large"}
            onClick={() => {
              window.location.href = "#portfolio";
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Portfolio 🚀
          </Button>
          <Button
            key="linkedinConnection"
            type="primary"
            style={{ backgroundColor: "#0077b5" }}
            icon={<LinkedinFilled />}
            size={"large"}
            onClick={() => {
              window.open(linkedIn, "_blank");
            }}
          >
            LinkedIn
          </Button>
          <Button
            key="githubConnection"
            type="primary"
            style={{ backgroundColor: "#24292e" }}
            icon={<GithubFilled />}
            size={"large"}
            onClick={() => {
              window.open(gitHub, "_blank");
            }}
          >
            GitHub
          </Button>
          <Button
            key="emailConnection"
            type="primary"
            style={{ backgroundColor: "#D44638" }}
            icon={<MailFilled />}
            size={"large"}
            onClick={() => {
              window.open(`mailto:${email}`, "_blank");
            }}
          >
            Email
          </Button>
        </Flex>
      </Card>
    </Content>
  );
};

export default About;
