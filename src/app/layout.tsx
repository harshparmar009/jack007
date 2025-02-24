import type { Metadata } from "next";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Jack Info Soft IT Solution Company",
  description: "Grow your business with Jack-Info Soft, a design & development studio.",
  openGraph: {
    images: [
      {
        url: 'https://www.google.com/maps/uv?viewerState=lb&pb=!1s0x11ae81c94242f451:0x2a6b0cac40414137!5sGlobstand+technologies&imagekey=!1e10!2sAF1QipPrTTNGxsOszQTXFD3b68e40o0V_LiVsTWwh-H6&cr=rp_35',
        width: 1200,
        height: 630,
        alt: 'Logo',
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
    <html lang="en">
      <body className="font-poppins">

        {children}
        {/* <Analytics /> */}

      </body>
    </html>
  );
}