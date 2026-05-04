import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Com Maria — Sua Companheira Espiritual no WhatsApp",
  description:
    "Descubra como a Maria pode chegar toda manhã no seu WhatsApp com um devocional personalizado, versículo e oração pensados para você.",
  openGraph: {
    title: "Com Maria — Sua Companheira Espiritual no WhatsApp",
    description:
      "Devocional diário personalizado, orações e acolhimento a qualquer hora. Direto no WhatsApp. Sem app para baixar.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          src="https://cdn.trackfyads.com/scripts/utms/latest.js"
          strategy="afterInteractive"
          data-omit-subids="true"
          data-omit-xcod="true"
        />
        <Script id="trackfy-config" strategy="afterInteractive">
          {`window.pixelId = "cmori662d0002v80n92bbjdfm";`}
        </Script>
        <Script
          src="https://cdn.trackfyads.com/scripts/tracking/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

