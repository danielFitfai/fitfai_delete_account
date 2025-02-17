export interface LayoutProps {
  children: React.ReactNode;
  navBarButtons: NavBarButtons[] | [];
  staticNavbar?: boolean;
  navBarLogoUrl?: string;
}

export interface NavBarButtons {
  name: string;
  redirectionUrl: string;
}
