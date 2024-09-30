import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#d6fbe5",
        textAlign: "center",
        borderRadius: "10px 10px 10px 10px",
        marginTop: "20px",
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
