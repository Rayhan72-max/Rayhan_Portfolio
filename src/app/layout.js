import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../Component/Navbar";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rayhan Patwary",
  description: "Rayhan patwary Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
       <head>
        
        <link rel="shortcut icon" href="/favicon/favicon.ico"></link>
      </head> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased lg:overflow-x-hidden`}
      >
        
        <div>
        <Navbar></Navbar>
        </div>
        {children}
        
        
      </body>
    </html>
  );
}
