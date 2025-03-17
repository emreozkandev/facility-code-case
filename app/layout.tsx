import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  applicationName: "App Name",
  authors: [{ name: "Author Name" }],
  creator: "Creator Name",
  publisher: "Publisher Company",
  formatDetection: {
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
