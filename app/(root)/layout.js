import "../globals.css";
import Navbar from "@/components/homepage/Navbar";

export const metadata = {
   title: "Scavenger Hunt",
   description: "Learn about the countless blockchain ecosystems",
};

export default function RootLayout({children}) {
   return (
      <html lang="en">
         <body className={` antialiased`}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}