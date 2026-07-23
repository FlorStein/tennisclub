import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://casatilia.club"),
  title: "Casa Tilia — Tennis & Social Club",
  description: "Un club privado de tenis, mesa y encuentros en Palermo Chico, Buenos Aires.",
  openGraph: {
    title: "Casa Tilia — Tennis & Social Club",
    description: "El arte de pertenecer. Buenos Aires.",
    images: ["/og.png"],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
