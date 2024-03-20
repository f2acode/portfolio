import React from "react";
import luna from "../images/portfolio/luna.png";
import diary from "../images/portfolio/diary.png";
import computeiro from "../images/portfolio/computeiro.png";
import flutter from "../images/portfolio/flutter.png";
import { Card, Descriptions, List, Row, Col } from "antd";
const { Meta } = Card;

const projectList = [
  {
    title: "Luna Co-founder",
    description:
      "Founded and developed a insurance tech startup. I was responsible for the entire tech stack, from the website to the data engineering.",
    url: "https://luna.ac/",
    image: luna,
    role: "Co-founder & Developer",
    type: "Entrepreneurship",
  },
  {
    title: "Mobile app (Diary)",
    description:
      "Creation and development of a daily notes application with more than 100k downloads and a 4.7 rating on GooglePlay.",
    url: "https://play.google.com/store/apps/details?id=me.correria.correria",
    image: diary,
    type: "Entrepreneurship",
    role: "Co-founder & Developer",
  },
  {
    title: "Mobile app (Computeiro)",
    description: "Open source app that provides exams and resources about POSCOMP.",
    url: "",
    image: computeiro,
    type: "Non-profit",
    role: "Developer",
  },
  {
    title: "Flutter package - Pricing cards",
    description: "Open source Flutter package to easily show pricing cards on their application.",
    url: "https://github.com/f2acode/pricing_cards",
    image: flutter,
    type: "Open-source",
    role: "Developer",
  },

  {
    title: "Flutter package - Flutter Crisp",
    description: "Open source Flutter package to connect with Crisp on their application.",
    url: "https://github.com/lunahq/flutter-crisp",
    image: flutter,
    type: "Open-source",
    role: "Developer",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Open Portfolio</h2>
      <hr />
      <Row>
        <Col span={18} offset={3}>
          <List
            style={{ textAlign: "center" }}
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 3,
              lg: 3,
              xl: 3,
              xxl: 3,
            }}
            dataSource={projectList}
            renderItem={(project) => (
              <List.Item>
                <Card
                  key={project.title}
                  hoverable
                  cover={<img alt={project.imageAltText} src={project.image} />}
                  style={{ width: 300 }}
                  size="small"
                  onClick={() => {
                    window.location.href = project.url;
                  }}
                >
                  <Meta title={project.title} description={project.description} />
                  <br />
                  <Descriptions
                    bordered
                    size="small"
                    items={[
                      {
                        key: `Card details role ${project.title}`,
                        label: "Role",
                        children: project.role,
                        span: 3,
                      },
                      {
                        key: `Card details type ${project.title}`,
                        label: "Type",
                        children: project.type,
                        span: 3,
                      },
                    ]}
                  />
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </section>
  );
};

export default Portfolio;
