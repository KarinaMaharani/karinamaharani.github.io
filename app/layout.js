import "./globals.css";

export const metadata = {
  title: "Karina Maharani | Portfolio",
  description:
    "A static portfolio page for Karina Maharani featuring profile highlights, projects, experience, and contact links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
