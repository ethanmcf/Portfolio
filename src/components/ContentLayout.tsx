import React, { ReactNode } from "react";
interface CustomLayoutProps {
  children?: ReactNode;
  className?: string;
}
const ContentLayout = ({
  children = null,
  className = "",
}: CustomLayoutProps) => {
  return (
    <div
      className={`mx-auto max-w-lg bg-backgroundStart w-full px-4 lg:max-w-[600px] xl:ml-8 lg:px-8 lg:pt-20 lg:pb-20 pb-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
