import type { Metadata } from "next";
import "@styles/globals.css";
import { ReactElement } from "react";
import SplitLayout from "@src/components/SplitLayout";

export const metadata: Metadata = {
  title: "Ethan McFarland",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactElement }) {
  // const pathname = usePathname();
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
