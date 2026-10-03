import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — Transformo problemas reais em software.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const line = "#1f232a";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0b0d",
          backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          color: "#eceae5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "2px solid #2c313a",
              background: "#0a0b0d",
              color: "#c6f36b",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            eu
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 600 }}>{siteConfig.name}</span>
            <span style={{ fontSize: 22, color: "#959ca6" }}>{siteConfig.role}</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", background: "#0a0b0d", paddingTop: 8 }}>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: 84, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            <span>Transformo problemas reais em&nbsp;</span>
            <span style={{ color: "#c6f36b" }}>software.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "#959ca6" }}>
            Sistemas web · Automações · APIs · Dados & IA
          </div>
        </div>
      </div>
    ),
    size,
  );
}
