import { Suspense } from 'react';

const layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => <Suspense>{children}</Suspense>;
export default layout;
