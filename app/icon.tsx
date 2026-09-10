import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// `[LR.]` no sobrevive a 16px, así que el favicon se queda con las iniciales y
// el punto de color: es la parte de la marca que sigue siendo legible ahí.
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
          background: "#000",
          color: "#fff",
          fontSize: 32,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
        }}
      >
        LR<span style={{ color: "#67e8f9" }}>.</span>
      </div>
    ),
    size
  );
}
