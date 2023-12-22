import type { Metadata } from "next";
import "../../styles/globals.css";
import { ReactElement } from "react";
import SplitLayout from "../components/SplitLayout";

export const metadata: Metadata = {
  title: "Ethan McFarland",
  description: "My portfolio website",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactElement }) {
  return (
    <SplitLayout>
      <div
        className={
          "flex-1 relative bg-backgroundStart text-text-dark inset-0 overflow-y-auto scroll-auto l-0"
        }
      >
        {children}
      </div>
    </SplitLayout>
  );
}
