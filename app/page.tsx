"use client";

import { Inter } from "next/font/google";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home(): React.JSX.Element {
  return (
    <div className={`min-h-screen bg-background ${inter.className}`}>
      <Header />

      <main className="max-w-[1200px] mx-auto px-6">
        <Hero />
        <About />

        <section className="border-t border-border">
          <ProjectCard
            company="VERCEL"
            title="Website"
            link="#"
            description="A comprehensive web application built with modern technologies. Leveraging Next.js, TypeScript, and AWS for scalable performance."
            year="2024"
          />

          <ProjectCard
            company="NOW"
            title="Desktop"
            link="#"
            description="The application was highlighted on Electron front page along with other well-known apps such as: Visual Studio Code, Figma, Skype, Slack, Discord, and many more."
            year="Since 2017"
          />

          <ProjectCard
            company="API SERVICES"
            title="Backend Infrastructure"
            link="#"
            description="Developed a scalable microservices architecture using Node.js and Express, featuring RESTful APIs, real-time WebSocket integration, and MongoDB database. Implemented JWT authentication and automated testing."
            year="2023"
            type="backend"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
