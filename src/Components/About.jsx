import { GithubFilled, LinkedinFilled, MailFilled, StarFilled } from "@ant-design/icons";
import { Button, Card, Divider, Flex, Layout, Tag, Typography } from "antd";
import React from "react";

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

  return (
    <Content id="about" style={{ padding: "2rem 0", display: "flex", justifyContent: "center" }}>
      <img src={tech} alt={imageAltText} style={imageStyle} />
      <Card
        className="responsive-card"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "rgb(255 255 255 / 95%)",
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
        <Flex wrap="wrap" gap="small" align="center" justify="center">
          {skillsList.map((skill) => (
            <Tag color="geekblue" key={skill} style={{ fontSize: "medium" }}>
              {skill}
            </Tag>
          ))}
        </Flex>
        <Divider />
        <Flex wrap="wrap" gap="large" justify={"center"} align={"center"}>
          <Button
            id="portfolioButton"
            className="buttonConnection"
            type="primary"
            icon={<StarFilled />}
            size={"large"}
            onClick={() => {
              window.location.href = "#portfolio";
            }}
          >
            Portfolio 🚀
          </Button>
          <Button
            id="linkedinConnection"
            className="buttonConnection"
            type="primary"
            icon={<LinkedinFilled />}
            size={"large"}
            onClick={() => {
              window.open(linkedIn, "_blank");
            }}
          >
            LinkedIn
          </Button>
          <Button
            id="githubConnection"
            className="buttonConnection"
            type="primary"
            icon={<GithubFilled />}
            size={"large"}
            onClick={() => {
              window.open(gitHub, "_blank");
            }}
          >
            GitHub
          </Button>
          <Button
            id="emailConnection"
            className="buttonConnection"
            type="primary"
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
