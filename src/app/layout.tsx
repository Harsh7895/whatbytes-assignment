import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import {Asidebar} from "@/components/asidebar";


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


export const metadata: Metadata = {
  title: "Skill Dashboard - Analyze Your Progress",
  description:
    "Track your skill test performance with detailed statistics, rank, and question analysis. Update your score and monitor syllabus-wise progress.",
  keywords: [
    "Skill Dashboard",
    "Skill Test Analysis",
    "Progress Tracking",
    "HTML Test",
    "Quick Statistics",
    "Question Analysis",
    "Syllabus Analysis",
    "Update Score",
    "Comparison Graph",
  ],
  openGraph: {
    title: "Skill Dashboard - Analyze Your Progress",
    description:
      "Track and improve your skill test performance. View statistics, rank, and syllabus-wise analysis in an interactive and responsive dashboard.",
    url: "https://whatbytes-assignment-tan.vercel.app/", 
    type: "website",
    images: [
      {
        url: "/target.png", 
        width: 1200,
        height: 630,
        alt: "Skill Dashboard - Analyze Your Progress",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased `}

      >
        <Header/>
        <div className="h-screen  w-screen  md:flex">
          <Asidebar/>
        {children}
        </div>
      </body>
    </html>
  );
}
