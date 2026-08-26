import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Crop Doctor Pro | AI Farm Intelligence", description: "Crop health monitoring, disease detection, irrigation guidance and farm analytics." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
