import { AppHeader, Footer } from '@/components';

const layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div>
    <AppHeader />
    {children}
    <Footer />
  </div>
);

export default layout;
