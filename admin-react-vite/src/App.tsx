import React from "react";
import { Layout } from "@arco-design/web-react";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

const App: React.FC = () => {
    return (
        <Layout className="h-screen w-screen">
            <Sider>Sider</Sider>
            <Layout>
                <Header className="bg-[#ccc]">Header</Header>
                <Content>Content</Content>
            </Layout>
        </Layout>
    );
};
export default App;
