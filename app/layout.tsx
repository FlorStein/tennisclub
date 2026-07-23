import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.GITHUB_PAGES === "true"
  ? "https://florstein.github.io/tennisclub/"
  : "https://casatilia.club/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Casa Tilia — Tennis & Social Club",
  description: "Un club privado de tenis, mesa y encuentros en Palermo Chico, Buenos Aires.",
  openGraph: {
    title: "Casa Tilia — Tennis & Social Club",
    description: "El arte de pertenecer. Buenos Aires.",
    images: [`${siteUrl}og.png`],
  },
  twitter: { card: "summary_large_image", images: [`${siteUrl}og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
