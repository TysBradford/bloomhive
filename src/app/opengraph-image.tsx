import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "MooHive - Where AI video creators thrive";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAF9F7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Stacked cards visual */}
        <div
          style={{
            display: "flex",
            position: "relative",
            width: 280,
            height: 200,
            marginBottom: 48,
          }}
        >
          {/* Card 3 (back) */}
          <div
            style={{
              position: "absolute",
              width: 240,
              height: 160,
              borderRadius: 12,
              background: "linear-gradient(135deg, #059669 0%, #0891B2 100%)",
              transform: "rotate(6deg) translateY(40px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            }}
          />
          {/* Card 2 (middle) */}
          <div
            style={{
              position: "absolute",
              width: 240,
              height: 160,
              borderRadius: 12,
              background: "linear-gradient(135deg, #F59E0B 0%, #E11D48 100%)",
              transform: "rotate(3deg) translateY(20px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
            }}
          />
          {/* Card 1 (front) */}
          <div
            style={{
              position: "absolute",
              width: 240,
              height: 160,
              borderRadius: 12,
              background: "linear-gradient(135deg, #7C3AED 0%, #312E81 100%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Logo text */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#1C1917",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          MooHive
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#78716C",
            letterSpacing: "-0.01em",
          }}
        >
          Where AI video creators thrive
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
