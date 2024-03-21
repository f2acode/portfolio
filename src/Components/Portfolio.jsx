import { Badge, Card, Descriptions, Flex, Layout, Modal, Tag, Typography } from "antd";

import React from "react";

import computeiro from "../images/portfolio/computeiro.png";
import diary from "../images/portfolio/diary.png";
import flutter from "../images/portfolio/flutter.png";
import luna from "../images/portfolio/luna.png";

const { Content } = Layout;
const { Title, Link, Text } = Typography;

const projectList = [
  {
    title: "Luna",
    description:
      "Insurance brokerage startup, innovating through technology, UX and customer service.",
    liveProject: "https://luna.ac/",
    image: luna,
    role: "Co-founder & Developer",
    period: "2020 - 2023",
  },
  {
    title: "Diary",
    description: "Daily notes App with more than 100k downloads and a 4.7 rating on GooglePlay.",
    liveProject: "https://play.google.com/store/apps/details?id=me.correria.correria",
    image: diary,
    role: "Founder & Developer",
    period: "2020 - 2024",
  },
  {
    title: "Computeiro",
    description: "Non-profit open source app that provides exams and resources about POSCOMP.",
    sourceCode: "https://github.com/f2acode/computeiro",
    image: computeiro,
    role: "Principal developer",
    period: "2019",
  },
  {
    title: "Pricing cards",
    description: "Open source Flutter package to easily show pricing cards on their application.",
    liveProject: "https://pub.dev/packages/pricing_cards",
    sourceCode: "https://github.com/f2acode/pricing_cards",
    image: flutter,
    role: "Principal developer",
    period: "2020 - present",
  },
  {
    title: "Flutter Crisp",
    description: "Open source Flutter package to connect with Crisp on their application.",
    liveProject: "https://pub.dev/packages/crisp",
    sourceCode: "https://github.com/lunahq/flutter-crisp",
    image: flutter,
    role: "Developer",
    period: "2020 - present",
  },
];

const Portfolio = () => {
  const onClickProject = (project) => {
    Modal.info({
      title: (
        <Title level={1} style={{ margin: 0 }}>
          {project.title}
        </Title>
      ),
      maskClosable: true,
      icon: null,
      width: "80%",
      footer: null,
      closable: true,
      content: (
        <>
          <Title level={3} style={{ margin: "10px 0", fontWeight: 300 }} type="secondary">
            {project.description}
          </Title>
          <Descriptions
            bordered
            column={1}
            items={[
              {
                key: "1",
                label: "Period",
                children: <Text>{project.period}</Text>,
              },
              {
                key: "2",
                label: "Role",
                children: <Text>{project.role}</Text>,
              },
              {
                key: "3",
                label: "Live project",
                children: (
                  <>
                    {project.liveProject ? (
                      <Badge
                        status="success"
                        text={
                          <Link href={project.liveProject} target="_blank">
                            {project.liveProject}
                          </Link>
                        }
                      />
                    ) : (
                      <Badge status="error" text="Unavailable" />
                    )}
                  </>
                ),
              },
              {
                key: "4",
                label: "Source code",
                children: (
                  <>
                    {project.sourceCode ? (
                      <Badge
                        status="success"
                        text={
                          <Link href={project.sourceCode} target="_blank">
                            {project.sourceCode}
                          </Link>
                        }
                      />
                    ) : (
                      <Badge status="error" text="Unavailable" />
                    )}
                  </>
                ),
              },
            ]}
          />
        </>
      ),
    });
  };

  return (
    <Content
      id="portfolio"
      style={{
        padding: "2rem 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "rgb(255 255 255 / 95%)",
        }}
      >
        <Flex vertical justify={"center"} align={"center"} gap={"medium"}>
          <Title level={1}>Portfolio</Title>
          <Flex wrap="wrap" gap="small" justify={"center"} align={"center"}>
            {projectList.map((project) => (
              <Card
                className="card"
                key={project.title}
                hoverable
                style={{
                  width: 300,
                  margin: "10px",
                  border: "groove",
                }}
                size="small"
                onClick={() => onClickProject(project)}
              >
                <img
                  alt={project.imageAltText}
                  src={project.image}
                  style={{ width: "90%", border: "6px solid #fff", background: "white" }}
                />
                <Title level={2}>{project.title}</Title>
                <Flex vertical wrap="wrap" gap="small" justify={"center"} align={"center"}>
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
                {/* <Button type="primary" size={"large"} onClick={() => onClickProject(project)}>
                  Details
                </Button> */}
              </Card>
            ))}
          </Flex>
        </Flex>
      </Card>
    </Content>
  );
};

export default Portfolio;
