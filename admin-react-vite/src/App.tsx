import React from "react";
import {Layout} from "@arco-design/web-react";
import SilderMenu from "@src/components/layout/SilderMenu";
import {Outlet} from "react-router";
import CustomHeader from "@src/components/layout/header";

const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

const App: React.FC = () => {
    return (
        <Layout className="h-screen w-screen">
            <Sider>
                <SilderMenu/>
            </Sider>
            <Layout>
                <Header>
                    <CustomHeader />
                </Header>
                <Content className="bg-[#f5f7fa] px-2.5">
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;
