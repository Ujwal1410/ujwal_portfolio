import type { Metadata, Viewport } from "next";
import { Anton, Archivo, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f0ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
};

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ujwal Kulal — Associate Software Engineer · AIML Engineer",
  description:
    "Portfolio of Ujwal Kulal — associate software engineer building AI assessment platforms, live proctoring, RAG pipelines, and self-hosted infrastructure at production scale.",
  authors: [{ name: "Ujwal Kulal" }],
  openGraph: {
    title: "Ujwal Kulal — Associate Software Engineer · AIML Engineer",
    description:
      "AI assessment platforms, real-time proctoring, RAG pipelines, and self-hosted infrastructure for 10K+ concurrent users.",
    type: "website",
    images: ["/images/ujwal-profile.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${oswald.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
