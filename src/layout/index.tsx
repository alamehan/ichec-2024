import { ReactNode } from 'react';
import { Layout } from 'antd';
import NavbarHere from "./navbar/Navbar";
import FooterHere from "./footer/Footer";
const { Content } = Layout;

export default function index({ children }: { children: ReactNode }) {
  return (
    <Layout>
      <NavbarHere />
      <Content>
        {children}
      </Content>
      <FooterHere />
    </Layout>
  );
}