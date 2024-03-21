import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";

import { ConfigProvider, Layout } from "antd";
import "./styles.css";

const siteProps = {
  name: "Felipe Augusto",
  title: "Software/Data professional & Entrepreneur",
  email: "augustto.felipe@hotmail.com",
  gitHub: "https://github.com/f2acode",
  // instagram: "microsoft",
  linkedIn: "https://www.linkedin.com/in/felipe-augustox/",
  medium: "",
  // twitter: "microsoft",
  // youTube: "Code",
};

const primaryColor = "#164755";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          colorBgContainer: "#fff",
        },
      }}
    >
      <Layout
        style={{
          background: "#00000000",
        }}
      >
        <About {...siteProps} />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </Layout>
    </ConfigProvider>
  );
};

export default App;
