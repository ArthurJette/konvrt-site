import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KONVRT — Convertir pour performer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSyne(): Promise<ArrayBuffer | null> {
  try {
    const cssResp = await fetch(
      "https://fonts.googleapis.com/css2?family=Syne:wght@700",
      {
        headers: {
          // Vieux User-Agent : force Google Fonts à renvoyer un fichier .ttf
          // (next/og supporte woff/ttf, pas woff2).
          "User-Agent":
            "Mozilla/5.0 (Windows NT 5.1; Win32; rv:1.9.2) Gecko/20100115 Firefox/3.6",
        },
      }
    );
    if (!cssResp.ok) return null;
    const css = await cssResp.text();
    const match = css.match(/src:\s*url\(([^)]+)\)/);
    if (!match) return null;
    const fontResp = await fetch(match[1]);
    if (!fontResp.ok) return null;
    return await fontResp.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const syne = await loadSyne();

  const fontFamily = syne ? "Syne" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.10) 35%, rgba(250,250,249,0) 70%), #FAFAF9",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#475569",
            fontFamily,
            fontWeight: 500,
          }}
        >
          KONVRT
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily,
            fontWeight: 700,
            fontSize: 140,
            lineHeight: 1.05,
            letterSpacing: "-0.045em",
            color: "#0F172A",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex" }}>Convertir</div>
          <div style={{ display: "flex" }}>
            <span>pour&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#4F46E5" }}>
              performer.
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 64,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontSize: 28,
            color: "#475569",
            fontFamily,
            fontWeight: 500,
          }}
        >
          konvrt.fr
        </div>
      </div>
    ),
    {
      ...size,
      fonts: syne
        ? [
            {
              name: "Syne",
              data: syne,
              style: "normal",
              weight: 700,
            },
          ]
        : undefined,
    }
  );
}
