import Head from "next/head";
import Header from "./header";

export interface LayoutProps {
  title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>Techjobs | {title}</title>
    </Head>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
