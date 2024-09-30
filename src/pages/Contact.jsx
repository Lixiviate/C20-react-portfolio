import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[fieldName] = "This field is required";
    } else if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
      newErrors[fieldName] = "Invalid email address";
    } else {
      delete newErrors[fieldName];
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setShowErrorPopup(true);
      setTimeout(() => setShowErrorPopup(false), 3000);
      return;
    }

    setShowPopup(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "2rem" }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "0.25rem" }}>{errors.name}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && (
            <p style={{ color: "red", marginTop: "0.25rem" }}>{errors.email}</p>
          )}
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ width: "100%", padding: "0.5rem", minHeight: "100px" }}
          />
          {errors.message && (
            <p style={{ color: "red", marginTop: "0.25rem" }}>
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Send
        </button>
      </form>
      {showErrorPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#FF0000",
            color: "white",
            padding: "15px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Please fill out all fields before submitting.
        </div>
      )}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "15px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          }}
        >
          Thank you for reaching out! I will reply soon.
        </div>
      )}
    </div>
  );
}
