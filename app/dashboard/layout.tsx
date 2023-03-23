import { Sidebar, Navbar } from "./components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
