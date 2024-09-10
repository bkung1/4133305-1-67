import Navbar from "@/components/about/Navbar";
import SideMenu from "@/components/about/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main> {children}</main>

      <div className=" flex"></div>
      <SideMenu></SideMenu>
      <footer></footer>
    </>
  );
}
