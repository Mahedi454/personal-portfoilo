import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <ProjectsSection showAll />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
