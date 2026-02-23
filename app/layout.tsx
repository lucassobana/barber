// app/layout.tsx
import { Space_Grotesk, Permanent_Marker } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${spaceGrotesk.variable} ${permanentMarker.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}