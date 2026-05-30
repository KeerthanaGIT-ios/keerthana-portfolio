"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
  title: "Movie Discovery Platform",
  tech: "Flutter • Riverpod • Firebase • Firestore",
  description:
    "Built a scalable movie discovery platform with Firebase-powered real-time updates, admin dashboard, movie management, favorites, and optional video trailer playback. Developed rapidly using AI-assisted development with Antigravity while maintaining production-style architecture and state management.",
  link: "https://github.com/KeerthanaGIT-ios/Digify_Task",
  image1: "movie-1.png",
  image2: "movie-2.png",
},
  {
    
    title: "Caribou Coffee",
    tech: "SwiftUI • Animations • State Management",
    description:
      "Developed reward-based spin wheel gamification feature using SwiftUI.",
    link: "https://apps.apple.com/in/app/caribou-coffee-kuwait/id6474421059",
    image1: "caribou-1.png",
    image2: "caribou-2.png",
  },

  {
    title: "B-Fab",
    tech: "Flutter • Riverpod • MVVM",
    description:
      "Built scalable e-commerce modules with modern Flutter architecture.",
    link: "https://apps.apple.com/in/app/bfab-shop-trends-online/id6751481702",
    image1: "bfab-1.png",
    image2: "bfab-2.png",
  },

  {
    title: "Agappe Diagnostics",
    tech: "UIKit • GraphQL • MVVM",
    description:
      "Implemented barcode scanner and improved app stability.",
    link: "https://apps.apple.com/in/app/agappe-diagnostics/id1243372726",
    image1: "agappe-1.png",
    image2: "agappe-2.png",
  },

  {
    title: "GrandLimo",
    tech: "Swift • Objective-C • Maps API",
    description:
      "Worked on taxi booking functionalities with live vehicle tracking.",
    link: "https://apps.apple.com/in/app/grand-limo-%D8%AC%D8%B1%D8%A7%D9%86%D8%AF-%D9%84%D9%8A%D9%85%D9%88/id1169943077",
    image1: "grandlimo-1.png",
    image2: "grandlimo-2.png",
  },
];

const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Flutter",
  "Dart",
  "Firebase",
  "Riverpod",
  "MVVM",
  "Swift Concurrency",
  "Git",
  "Postman",
  "Bloc",
  "AI-Assisted Development",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070707] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="font-semibold text-xl">
            Keerthana G
          </h1>

          <div className="flex gap-4">
            <a
              href="https://github.com/KeerthanaGIT-ios"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/keerthana-gopi-08b294244/"
              target="_blank"
              className="hover:text-purple-400 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-40 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
              Available for opportunities
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              iOS &
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Flutter
              </span>
              <br />
              Developer
            </h1>

            <p className="text-zinc-400 text-lg leading-8 mt-8 max-w-xl">
              Crafting scalable mobile experiences using SwiftUI,
              UIKit, Flutter, and modern mobile architectures.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="mailto:keerthanagopi407@gmail.com"
                className="px-6 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
              >
                Contact Me
              </a>

              <a
                href="https://github.com/KeerthanaGIT-ios"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/keerthana-gopi-08b294244/"
                target="_blank"
                className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-purple-500/10 transition flex items-center gap-2"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full"></div>

              <img
                src="/profile.jpg"
                alt="Keerthana"
                className="relative w-[320px] md:w-[380px] h-[460px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            About Me
          </h2>

          <p className="text-zinc-400 leading-8 text-lg">
            Passionate mobile developer with 3+ years of experience
            building scalable iOS and Flutter applications.
            Experienced in SwiftUI, UIKit, Firebase, MVVM,
            Riverpod, and production-level app development.
          </p>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={skill}
              className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-purple-500/10 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-12">
          <div className="border-l border-purple-500/40 pl-6">
            <h3 className="text-2xl font-semibold">
              Web and Crafts
            </h3>

            <p className="text-purple-300 mt-2">
              iOS Developer • Dec 2024 – Present
            </p>

            <p className="text-zinc-400 mt-4 leading-7">
              Integrated APIs, collaborated with backend developers,
              fixed production bugs, and improved application stability.
            </p>
          </div>

          <div className="border-l border-cyan-500/40 pl-6">
            <h3 className="text-2xl font-semibold">
              Indipro Technologies
            </h3>

            <p className="text-cyan-300 mt-2">
              iOS Developer • Aug 2022 – Dec 2024
            </p>

            <p className="text-zinc-400 mt-4 leading-7">
              Developed and maintained production applications,
              implemented features, and optimized app performance.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">
          Featured Apps
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300"
            >
            <div className="grid grid-cols-2 gap-4 mb-6">
  <img
    src={`/apps/${project.image1}`}
    alt={project.title}
    className="w-full h-72 object-cover rounded-[24px] border border-white/10 hover:scale-[1.02] transition duration-300"
  />

  <img
    src={`/apps/${project.image2}`}
    alt={project.title}
    className="w-full h-72 object-cover rounded-[24px] border border-white/10 hover:scale-[1.02] transition duration-300"
  />
</div>
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="text-purple-300 mt-3">
                {project.tech}
              </p>

              <p className="text-zinc-400 mt-5 leading-7">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center gap-2 mt-6 text-white hover:text-purple-400 transition"
              >
                View App
                <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-32 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s Build
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Amazing Apps
            </span>
          </h2>

          <p className="text-zinc-400 mt-8 text-lg">
            Open to iOS and Flutter opportunities.
          </p>

          <a
            href="mailto:keerthanagopi407@gmail.com"
            className="inline-flex items-center gap-3 mt-10 px-8 py-5 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </section>
    </main>
  );
}