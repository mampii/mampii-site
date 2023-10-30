import React, { FC } from "react";
import Header from "../Header";
import Footer from "../Footer";

type LayoutProps = {
  children: any;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
