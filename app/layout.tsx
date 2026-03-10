import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "عيادة مها دهلان لمعالجة تساقط الشعر",
  description:
    "عيادة د. مها دهلان - حلول طبية متكاملة لعلاج تساقط الشعر وزراعته بأحدث التقنيات في جدة",
  icons: {
    icon: "/logo.avif",
    apple: "/logo.avif",
  },
  openGraph: {
    title: "عيادة مها دهلان لمعالجة تساقط الشعر",
    description:
      "عيادة د. مها دهلان - حلول طبية متكاملة لعلاج تساقط الشعر وزراعته بأحدث التقنيات في جدة",
    images: ["/logo.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        {/* Google Ads gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10989762778"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10989762778');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
