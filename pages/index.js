import Head from "next/head";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/contact";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/Header";
import { Hero } from "../components/hero/Hero";
import { Projects } from "../components/projects/projects";
import { RecentBlogs } from "../components/recent-blogs/recentBlogs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Satyaranjan Rout | Developer</title>
      </Head>
      <div className="contain">
        <Header />
        <Hero />
        <About />
        <Projects />
        <RecentBlogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
