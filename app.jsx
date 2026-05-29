import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null,
  });
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, resume: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("resume", form.resume);

      const response = await fetch(
        "http://localhost:5678/webhook-test/resume-screen",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.text();
      console.log("RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data);
      }

      alert("Success");

      setForm({
        name: "",
        email: "",
        resume: null,
      });
      setFileName("");
    } catch (error) {
      console.error("FULL ERROR:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: "20px",
    }}>
      <div style={{
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
        padding: "50px",
        maxWidth: "500px",
        width: "100%",
      }}>
        <div style={{
          textAlign: "center",
          marginBottom: "40px",
        }}>
          <h1 style={{
            color: "#667eea",
            fontSize: "32px",
            margin: "0 0 10px 0",
            fontWeight: "700",
          }}>
            🚀 AI Resume Screener
          </h1>
          <p style={{
            color: "#999",
            fontSize: "14px",
            margin: "0",
          }}>
            Get instant AI feedback on your resume
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
              fontWeight: "600",
              fontSize: "14px",
            }}>
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "14px",
                boxSizing: "border-box",
                transition: "border-color 0.3s",
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
              fontWeight: "600",
              fontSize: "14px",
            }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              style={{
                width: "100%",
                padding: "12px 15px",
                border: "2px solid #e0e0e0",
                borderRadius: "10px",
                fontSize: "14px",
                boxSizing: "border-box",
                transition: "border-color 0.3s",
                outline: "none",
              }}
              onFocus={(e) => e.target.style.borderColor = "#667eea"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label style={{
              display: "block",
              marginBottom: "8px",
              color: "#333",
              fontWeight: "600",
              fontSize: "14px",
            }}>
              📄 Upload Resume
            </label>
            <label style={{
              display: "block",
              padding: "30px",
              border: "2px dashed #667eea",
              borderRadius: "10px",
              textAlign: "center",
              cursor: "pointer",
              background: "#f8f9ff",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0f2ff";
              e.currentTarget.style.borderColor = "#764ba2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#f8f9ff";
              e.currentTarget.style.borderColor = "#667eea";
            }}>
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                required
                style={{
                  display: "none",
                }}
              />
              <div style={{
                color: "#667eea",
                fontWeight: "600",
                marginBottom: "5px",
              }}>
                {fileName ? `✓ ${fileName}` : "Click or drag to upload"}
              </div>
              <div style={{
                color: "#999",
                fontSize: "12px",
              }}>
                PDF, DOC, DOCX or TXT (Max 5MB)
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              background: loading ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {loading ? "Submitting..." : "🚀 Submit Resume"}
          </button>
        </form>
      </div>
    </div>
  );
}
