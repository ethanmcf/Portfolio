import type { Metadata } from "next";
import "../../styles/globals.css";
import SplitLayout from "../components/SplitLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Ethan McFarland",
  description: "My portfolio website",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position={"bottom-center"} containerClassName={"w-full"} />
        <SplitLayout>
          <div
            className={
              "flex-1 relative bg-backgroundStart text-text-dark inset-0 overflow-y-auto scroll-auto l-0"
            }
          >
            {children}
          </div>
        </SplitLayout>
      </body>
    </html>
  );
}
