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
        GitHub
      </a>
      <span style={{ margin: "0 10px" }}>|</span>
      <a
        href="https://www.linkedin.com/in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <span style={{ margin: "0 10px" }}>|</span>
      <a
        href="https://stackoverflow.com/users/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stack Overflow
      </a>
    </footer>
  );
}

export default Footer;
