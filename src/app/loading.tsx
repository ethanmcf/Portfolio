import ContentLayout from "../components/ContentLayout";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <ContentLayout className={"scroll-none overflow-hidden"}>
        <div
          role="status"
          className="w-full animate-pulse h-screen mt-8 opacity-70"
        >
          <div className="h-[300px] bg-white/30 rounded-xl w-full mt-20 [&+*]:mt-8" />
          <div className="h-6 bg-white/30 rounded-full  w-[17rem] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[7rem] mb-8" />

          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-1rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-5rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-3rem)] mb-4" />

          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-3rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-1rem)] mb-8" />

          <div className="h-5 bg-white/30 rounded-full  w-[13rem] mb-4" />
          <ul className="text-sm space-y-4 w-full list-disc list-inside ml-2">
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-6rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-8rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
              </div>
            </li>
          </ul>
          <div className="h-[300px] bg-white/30 rounded-xl w-full mt-20 [&+*]:mt-8" />
          <div className="h-6 bg-white/30 rounded-full  w-[17rem] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[7rem] mb-8" />

          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-1rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-5rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-3rem)] mb-4" />

          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-3rem)] mb-2" />
          <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-1rem)] mb-8" />

          <div className="h-5 bg-white/30 rounded-full  w-[13rem] mb-4" />
          <ul className="text-sm space-y-4 w-full list-disc list-inside ml-2">
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-6rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-8rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-2rem)] mb-2" />
              </div>
            </li>
            <li className={"text-white/30"}>
              <div className="ml-6 -mt-4">
                <div className="h-2.5 bg-white/30 rounded-full  w-[calc(100%-4rem)] mb-2" />
              </div>
            </li>
          </ul>
        </div>
      </ContentLayout>
    </>
  );
}
