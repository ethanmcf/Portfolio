import Image, { StaticImageData } from "next/image";
interface CustomImageProps {
  src: StaticImageData;
  title: string;
  subTitle?: string;
}
export default function ArticleHeader({
  src,
  title,
  subTitle = "",
}: CustomImageProps) {
  return (
    <>
      <div className="relative mt-20 overflow-hidden rounded-xl [&+*]:mt-8">
        <Image src={src} alt="UofT" loading="lazy" width={1000} height={200} />
      </div>
      <h1 className="text-2xl text-title-dark font-bold">{title}</h1>
      <p className="text-grey text-xs mb-8">{subTitle}</p>
    </>
  );
}
