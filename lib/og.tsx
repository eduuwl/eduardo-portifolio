import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };

/** Card de Open Graph no estilo da marca (fundo escuro, selo neon), reusado pelas rotas dinâmicas. */
export function renderBrandOgImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "88px 96px",
          backgroundColor: "#111312",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#00ff3f",
            fontWeight: 700,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 920,
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#bfbfbf", maxWidth: 860 }}>
          {subtitle}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 72,
            left: 96,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: "#00ff3f" }} />
          <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 3, color: "#00ff3f", textTransform: "uppercase" }}>
            Noteron
          </div>
        </div>
      </div>
    ),
    ogImageSize,
  );
}
