import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Import images directly (most reliable method)
import homeScreen from "/assets/home_screen.png";
import rickScreenshot from "/assets/rick_screenshot_1.png";
import screenshot1 from "/assets/screenshot_1.png";

const projects = [
  {
    id: 1,
    title: "Cashiro",
    description: "A beautiful offline expense tracker android app built using kotlin and jetpack compose.",
    image: homeScreen, // Using imported image
    tags: ["Kotlin", "jetpack compose", "RoomDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/ritesh-kanwar/Cashiro",
  },
  {
    id: 2,
    title: "Rick & Morty Wiki ",
    description:
      "Android app exploring the Rick and Morty universe | Built with Kotlin, Jetpack Compose, Ktor & Coil",
    image: rickScreenshot, // Using imported image
    tags: ["Kotlin", "Ktor", "Rest API"],
    demoUrl: "#",
    githubUrl: "https://github.com/ritesh-kanwar/Rick-and-Morty-Wiki",
  },
  {
    id: 3,
    title: "Tiny-Heros Platformer",
    description:
      "An addictive 2D infinite runner platformer built with JavaScript & Kaplay.js. Jump, dash & survive endless adventures in your browser.",
    image: screenshot1, // Using imported image
    tags: ["Javascript", "HTML", "Tailwind CSS"],
    demoUrl: "https://modestcat.itch.io/tiny-heros",
    githubUrl: "https://github.com/ritesh-kanwar/Tiny-Heros",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onLoad={() => console.log(`✅ Loaded: ${project.title}`)}
                  onError={(e) => {
                    console.error(`❌ Failed to load: ${project.title}`, e);
                  }}
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ritesh-kanwar?tab=repositories"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
