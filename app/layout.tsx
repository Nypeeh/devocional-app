import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Script
          src="https://cdn.trackfyads.com/scripts/utms/latest.js"
          strategy="afterInteractive"
          {...({ "omit-subids": "true", "omit-xcod": "true" } as any)}
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
