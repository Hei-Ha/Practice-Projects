import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header, Content, Footer } = Layout
import '../layout.less'
import { Routes, Route } from 'react-router-dom'
import routerConfig from '@/router/router'

interface propsValue {
    handleCollapsed: Function;
    collapsed: boolean;
}

interface RouterConfigType {
    name: 'string',
    key: string;
    path: string;
    rules: string[];
    element: React.ReactElement;
    children?: RouterConfigType[];
}
// @ts-ignore
const getRouterDom = (routerConfig: RouterConfigType[]) => {
    return routerConfig.map(item => {
        if (item.children?.length > 0) {
            return getRouterDom(item.children);
        } else {
            return <Route path={item.path} element={item.element} key={item.path} />
        }
    })
}


export const ContentContainer = (props: propsValue): JSX.Element => {
    return <Layout className={props.collapsed ? 'collapsed' : 'noCollapsed'} style={{ height: '100%'}}>
        <Header style={{ padding: 0, background: '#FFFFFF'}}>
            {props.collapsed ?
                <MenuUnfoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} />
                :
                <MenuFoldOutlined
                    className={'collapsedIcon'}
                    onClick={() => { props.handleCollapsed() }} /> }
        </Header>
        <Content className={'contentContinuer'}>
            <Routes>
                {getRouterDom(routerConfig as RouterConfigType[])}
                {/*{routerConfig.map((item) => {*/}
                {/*    if (item.children?.length > 0) {*/}
                {/*        return item.children.map(i => {*/}
                {/*            return <Route path={`${item.path}/${i.path}`} element={i.element} key={i.path} />*/}
                {/*        })*/}
                {/*    } else {*/}
                {/*        return <Route path={item.path} element={item.element} key={item.path} />*/}
                {/*    }*/}
                {/*})}*/}
            </Routes>
        </Content>
        <Footer className={'footer'}>
            Design by AntDesign
        </Footer>
    </Layout>
}
