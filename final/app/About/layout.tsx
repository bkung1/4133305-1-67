import Navbar from "@/components/about/Navbar";

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
      <footer></footer>
    </>
  );
}
