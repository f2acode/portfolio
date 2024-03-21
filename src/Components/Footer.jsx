import { Layout, Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";

const { Text } = Typography;
const { Footer } = Layout;

const CustomFooter = (props) => {
  const { name } = props;

  return (
    <Footer id="contacts" style={{ textAlign: "center" }}>
      <Text>
        ©{new Date().getFullYear()} Created by {name}
      </Text>
    </Footer>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CustomFooter;
