import React from "react";
import MiniProjects from "@/components/MiniProjects/MiniProjects";
import AllProjects from "@/components/AllProjects/AllProjects";

const Projects = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-[#4a0050] to-[#040025] text-white">
      <AllProjects />
      <MiniProjects />
    </section>
  )
}

export default Projects