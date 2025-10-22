import { motion } from "framer-motion";
import React from "react";

import reactIcon from "../../assets/icons/react.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";
import csharpIcon from "../../assets/icons/csharp.svg";
import pythonIcon from "../../assets/icons/python.svg";
import dotnetIcon from "../../assets/icons/dotnet.svg";
import aspnetIcon from "../../assets/icons/aspnet.svg";

import profilePic from "../../assets/profile.jpg"; // your picture

const techIcons = [
  { src: reactIcon, name: "React" },
  { src: typescriptIcon, name: "TypeScript" },
  { src: aspnetIcon, name: "ASP.NET" },
  { src: dotnetIcon, name: ".NET" },
  { src: csharpIcon, name: "C#" },
  { src: pythonIcon, name: "Python" },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center bg-card/50 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl animate-fade-in">
        {/* Left Section — Profile & Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <img
            src={profilePic}
            alt="Kevin Argueta"
            className="w-48 h-48 rounded-3xl object-cover mb-6 border-4 border-[#c93c46]/60 shadow-[0_0_25px_rgba(201,60,70,0.3)]"
          />
          <h2 className="text-4xl font-semibold mb-4 text-[#c93c46]">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I’m{" "}
            <span className="text-[#c93c46] font-medium">Kevin Argueta</span>, a
            Computer Science student at VCU passionate about building tools that
            combine <span className="text-[#c93c46]">AI</span>,{" "}
            <span className="text-[#c93c46]">forensics</span>, and{" "}
            <span className="text-[#c93c46]">full-stack development</span>. I’ve
            developed applications across WinUI3, WPF, React, and ASP.NET —
            focusing on clean architecture, performance, and delightful user
            experiences. Outside of coding, I’m constantly experimenting with
            new technologies to push my technical creativity further.
          </p>
        </motion.div>

        {/* Right Section — Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center"
        >
          {techIcons.map((icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center group"
            >
              <div className="w-16 h-16 p-3 rounded-2xl bg-[#c93c46]/10 group-hover:bg-[#c93c46]/20 transition-all flex items-center justify-center shadow-[0_0_15px_rgba(201,60,70,0.15)]">
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-muted-foreground group-hover:text-[#c93c46] transition-colors">
                {icon.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
