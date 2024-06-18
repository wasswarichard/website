import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
