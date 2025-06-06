import "@/styles/globals.css";
import React from "react";
import { type Metadata } from "next";
import { DevtoolsProvider } from 'creatr-devtools';
import { ThemeProvider } from 'next-themes';
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1
};
export const metadata: Metadata = {
  title: {
    default: "Portfolio Profissional",
    template: "%s | Portfolio"
  },
  description: "Portfolio profissional moderno e elegante",
  applicationName: "Portfolio",
  keywords: ["portfolio", "desenvolvedor", "designer", "profissional", "trabalhos"],
  authors: [{
    name: "Desenvolvedor"
  }],
  creator: "Desenvolvedor",
  publisher: "Portfolio",
  icons: {
    icon: [{
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    }, {
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png"
    }, {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon"
    }],
    apple: [{
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    }]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Portfolio"
  },
  formatDetection: {
    telephone: false
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html suppressHydrationWarning lang="pt-BR" data-unique-id="f2a9c3a8-6e1d-4af5-adbf-e6126a1a5585" data-file-name="app/layout.tsx">
      <body className="antialiased" data-unique-id="63571031-005e-499d-8392-6e0ab10bdf9c" data-file-name="app/layout.tsx">
        <ThemeProvider attribute='class'>
          <DevtoolsProvider>
            {children}
          </DevtoolsProvider>
        </ThemeProvider>
      </body>
    </html>;
}