import { Button, Card, Flex, Layout, Tag, Typography } from "antd";

import React from "react";
import computeiro from "../images/portfolio/computeiro.png";
import diary from "../images/portfolio/diary.png";
import flutter from "../images/portfolio/flutter.png";
import luna from "../images/portfolio/luna.png";

const { Content } = Layout;
const { Title } = Typography;

const projectList = [
  {
    title: "Luna",
    description:
      "Insurance brokerage startup, innovating through technology, UX and customer service.",
    url: "https://luna.ac/",
    image: luna,
    role: "Co-founder & Developer",
    period: "2020 - 2023",
  },
  {
    title: "Diary",
    description: "Daily notes App with more than 100k downloads and a 4.7 rating on GooglePlay.",
    url: "https://play.google.com/store/apps/details?id=me.correria.correria",
    image: diary,
    role: "Founder & Developer",
    period: "2020 - 2023",
  },
  {
    title: "Computeiro",
    description: "Non-profit open source app that provides exams and resources about POSCOMP.",
    url: "",
    image: computeiro,
    role: "Principal developer",
    period: "2019",
  },
  {
    title: "Pricing cards",
    description: "Open source Flutter package to easily show pricing cards on their application.",
    url: "https://github.com/f2acode/pricing_cards",
    image: flutter,
    role: "Principal developer",
    period: "2020 - present",
  },
  {
    title: "Flutter Crisp",
    description: "Open source Flutter package to connect with Crisp on their application.",
    url: "https://github.com/lunahq/flutter-crisp",
    image: flutter,
    role: "Developer",
    period: "2020 - present",
  },
];

const Portfolio = () => {
  return (
    <Content
      id="portfolio"
      style={{ padding: "2rem 0", display: "flex", justifyContent: "center" }}
    >
      <Card
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Flex vertical justify={"center"} align={"center"} gap={"medium"}>
          <Title level={1}>Public Portfolio</Title>
          <Flex wrap="wrap" gap="small" justify={"center"} align={"center"}>
            {projectList.map((project) => (
              <Card
                className="card"
                key={project.title}
                hoverable
                style={{
                  width: 300,
                  margin: "10px",
                  backgroundColor: "#e5e5e56b",
                  border: "groove",
                }}
                size="small"
                onClick={() => {
                  window.open(project.url, "_blank");
                }}
              >
                <img
                  alt={project.imageAltText}
                  src={project.image}
                  style={{ width: "90%", border: "6px solid #fff", background: "white" }}
                />
                <Title level={2}>{project.title}</Title>
                <Flex wrap="wrap" gap="small" justify={"center"} align={"center"}>
                  <Tag color="green" style={{ fontSize: "medium" }}>
                    {project.period}
                  </Tag>
                  <Tag color="geekblue" style={{ fontSize: "medium" }}>
                    {project.role}
                  </Tag>
                </Flex>
                <Title level={5} style={{ fontWeight: "400" }}>
                  {project.description}
                </Title>
                <br />
                <Button
                  type="primary"
                  size={"large"}
                  onClick={() => {
                    window.open(project.url, "_blank");
                  }}
                >
                  View reference
                </Button>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Content>
  );
};

export default Portfolio;
