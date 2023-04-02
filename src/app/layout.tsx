import Navbar from "@/components/Navbar";
import "./globals.css";
import SocialSideBar from "@/components/SocialSideBar";
import { League_Spartan } from "next/font/google";

export const metadata = {
  title: "Arlie Torers",
  description: "Generated by create next app",
};
const league = League_Spartan({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={league.className} lang="en">
      <body>
        <main className="flex">
          <main className="flex-1 relative">{children}</main>
          <div className="stickySidebar  ">
            <SocialSideBar />
          </div>
        </main>
      </body>
    </html>
  );
}
