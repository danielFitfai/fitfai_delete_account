import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import { LayoutProps } from './models/layoutProps.models';

function Layout({
  navBarButtons,
  navBarLogoUrl,
  staticNavbar,
  children
}: LayoutProps) {
  const navBarHeight = '68.5px';
  const footerHeight = '300px';

  return (
    <>
      <Navbar
        navBarButtons={navBarButtons}
        staticNavbar={staticNavbar}
        navBarLogoUrl={navBarLogoUrl}
      />
      <div
        style={{ minHeight: `calc(100vh - ${navBarHeight} - ${footerHeight})` }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
export default Layout;
