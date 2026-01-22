import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
});

export const metadata = {
  title: "Samin Yeasar - Full-Stack Developer",
  description: "Portfolio of Samin Yeasar, Full-Stack MERN Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmMono.variable}>
        {children}
      </body>
    </html>
  );
}
