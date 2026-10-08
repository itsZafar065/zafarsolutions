import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #38bdf8 0%, #a855f7 50%, #4ade80 100%)",
          borderRadius: "9px",
          padding: "2px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#070417",
            borderRadius: "7px",
            fontFamily: "sans-serif",
            fontWeight: "900",
            fontSize: "14px",
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#38bdf8" }}>Z</span>
          <span style={{ color: "#4ade80" }}>S</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
