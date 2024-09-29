import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <a
        href="https://github.com/Lixiviate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub style={{ marginRight: "5px" }} /> GitHub
      </a>
      <span style={{ margin: "0 10px" }}>|</span>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin style={{ marginRight: "5px" }} /> LinkedIn
      </a>
      <span style={{ margin: "0 10px" }}>|</span>

      <a
        href="https://stackoverflow.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow style={{ marginRight: "5px" }} /> Stack Overflow
      </a>
    </footer>
  );
}
export default Footer;
