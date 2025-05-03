import React from "react";
import { Layout } from "@arco-design/web-react";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const App: React.FC = () => {
    return (
        <Layout style={{ height: "400px" }}>
            <Header className="bg-[#ccc]">Header</Header>
            <Layout>
                <Sider>Sider</Sider>
                <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>
    );
};
export default App;
