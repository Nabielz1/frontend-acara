import { useState } from "react";
import PageHead from "@/components/commons/PageHead";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f3f4f6",
      fontFamily: "sans-serif",
    }}>
      <PageHead title="Login" />

      <div style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        padding: "40px 36px",
        width: "100%",
        maxWidth: "400px",
      }}>
        <h1 style={{ margin: "0 0 4px", fontSize: "24px", fontWeight: 700, color: "#111" }}>
          Login
        </h1>
        <p style={{ margin: "0 0 28px", fontSize: "14px", color: "#6b7280" }}>
          Masukkan email dan password kamu
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500, color: "#374151" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="contoh@email.com"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500, color: "#374151" }}>
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "10px 42px 10px 14px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#9ca3af",
                  fontSize: "14px",
                  padding: 0,
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#ef4444",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "20px", fontSize: "13px", color: "#6b7280", textAlign: "center" }}>
          Belum punya akun?{" "}
          <a href="/auth/register" style={{ color: "#ef4444", fontWeight: 600, textDecoration: "none" }}>
            Daftar di sini
          </a>
        </p>
      </div>
    </main>
  );
}
