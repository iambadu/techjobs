import Head from "next/head";
import Header from "./header.js";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>Github | {title}</title>
    </Head>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
