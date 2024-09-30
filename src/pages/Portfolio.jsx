import challenge19Image from "../assets/c19ss.png";
import challenge18Image from "../assets/c18ss.png";
import challenge14Image from "../assets/c14ss.png";
import challenge13Image from "../assets/c13ss.png";
import challenge12Image from "../assets/c12ss.png";
import project2Image from "../assets/p2ss.png";

const projects = [
  {
    title: "BookNest",
    image: project2Image,
    githubLink: "https://github.com/Lixiviate/P2-Book-Nest",
  },
  {
    title: "PWA Editor",
    image: challenge19Image,
    deployedLink: "https://c19-pwa-editor.onrender.com",
    githubLink: "https://github.com/Lixiviate/C19-PWA-Editor",
  },
  {
    title: "NoSQL Social Network API",
    image: challenge18Image,
    deployedLink:
      "https://drive.google.com/file/d/1_9tFAerVSXp6hLwoY5nK0ROTo9eLHRiS/view",
    githubLink: "https://github.com/Lixiviate/C18-NoSQL-Social-Network-API",
  },
  {
    title: "MVC Tech Blog",
    image: challenge14Image,
    githubLink: "https://github.com/Lixiviate/C14-MVC-Tech-Blog",
  },
  {
    title: "ORM Ecommerce Backend",
    image: challenge13Image,
    deployedLink:
      "https://drive.google.com/file/d/1BhxlD28T8R08Df3a0g7fF7vdFcAPPQYw/view",
    githubLink: "https://github.com/Lixiviate/C13-ORM-Ecommerce-Backend",
  },
  {
    title: "SQL Employee Tracker",
    image: challenge12Image,
    deployedLink:
      "https://drive.google.com/file/d/1xElCkefVpux2sOjWfLmoYHJaoP3Z2y20/view",
    githubLink: "https://github.com/Lixiviate/C12-SQL-Employee-Tracker",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ border: "1px solid #ddd", padding: "10px" }}
          >
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "auto" }}
            />
            <div>
              {project.deployedLink && (
                <>
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.deployedLink.includes("drive.google.com")
                      ? "Demo Video"
                      : "Deployed App"}
                  </a>
                  <span> | </span>
                </>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
