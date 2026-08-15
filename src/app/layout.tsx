import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

// 2A: Explicitly load 300 (light), 400 (regular), 500 (medium) weights
// so browser never synthesises font-light
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://derimicity.in";

// 2B: Full Open Graph + Twitter Card metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Derimi City | Luxury Township Bihar | Residential Plots in Parsa Saran",
    template: "%s | Derimi City",
  },
  description:
    "Derimi City is a Premium Township in Bishunpura by Derimi Estate Pvt. Ltd. Offering luxury residential plots in Parsa Saran, Bihar with world-class amenities.",
  keywords: [
    "Derimi Estate Pvt. Ltd.",
    "Derimi City",
    "Premium Township in Bishunpura",
    "Residential Plots in Parsa Saran",
    "Luxury Township Bihar",
    "real estate Bihar",
    "plot for sale Bihar",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Derimi City",
    title: "Derimi City | Luxury Township Bihar",
    description:
      "A Premium Township in Bishunpura. Discover premium residential plots in Parsa Saran by Derimi Estate Pvt. Ltd.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derimi City - Luxury Township Bihar",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Derimi City | Premium Township in Bishunpura",
    description:
      "Luxury Township Bihar featuring exclusive residential plots in Parsa Saran by Derimi Estate Pvt. Ltd.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

// 2B: JSON-LD structured data for RealEstateListing
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "Organization"],
  name: "Derimi Estate Pvt. Ltd.",
  alternateName: "Derimi City",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Derimi City is a Premium Township in Bishunpura offering luxury residential plots in Parsa Saran, Bihar. Developed by Derimi Estate Pvt. Ltd.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bishunpura, Parsa Saran",
    addressLocality: "Saran",
    addressRegion: "Bihar",
    postalCode: "",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-80022-20084",
    contactType: "Sales",
    availableLanguage: ["English", "Hindi"],
  },
  areaServed: {
    "@type": "Place",
    name: "Bishunpura, Parsa Saran, Bihar, India",
    description: "Premium Township in Bishunpura, Luxury Township Bihar",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Derimi City Plot Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        name: "600 Sqft Residential Plot",
        price: "1050600",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "1800 Sqft Residential Plot",
        price: "3151800",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col font-sans bg-primary-black text-primary-white">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
