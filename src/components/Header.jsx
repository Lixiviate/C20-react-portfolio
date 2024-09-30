import bannerImage from "../assets/bannerImage.jpg";

function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        backgroundColor: "#f0f0f0",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
        Lixiviate
      </h1>
    </header>
  );
}

export default Header;
