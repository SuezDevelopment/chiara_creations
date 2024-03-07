import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/layout/page";
import { homePageMeta } from "@/data/data";
import Header from "@/components/ui/header";
import Contact from "@/components/ui/contact";

export default function Home() {
  const {title, description} = homePageMeta;
  return (
    <Page title={title} description={description}>
      <Header />
      <Contact />
      <footer className="bg-black py-12">
    </Page>
  );
}
