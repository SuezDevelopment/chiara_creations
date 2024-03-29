import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/layout/page";
import { homePageMeta } from "@/data/data";
import Header from "@/components/ui/header";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  const {title, description} = homePageMeta;
  return (
    <Page title={title} description={description}>
      <Header />
      <Contact />
      <Footer />
    </Page>
  );
}
