import Link from "next/link";
import { Links } from "../lib/LinksInterface";
export default function StyledExternalLink({ url, svg, title }: Links) {
  return (
    <main>
      <Link
        className="group relative flex items-center px-2 py-0.5 text-[0.8125rem]/6 font-medium gap-x-3"
        href={url}
        target={"_blank"}
      >
        <span className="absolute inset-0 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
        <div className="transition fill-grey group-hover:fill-blue">{svg}</div>
        <span className="self-baseline text-white">{title}</span>
      </Link>
    </main>
  );
}
