import Image from "next/image";
import { Inter } from "next/font/google";
import Page from "@/components/layout/page";
import { homePageMeta } from "@/data/data";

export default function Home() {
  const {title, description} = homePageMeta;
  return (
    <Page title={title} description={description}>
      <
    </Page>
  );
}
