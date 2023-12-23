import Link from "next/link";
import { Links } from "../lib/LinksInterface";
interface CustomProps extends Links {
  active?: boolean;
}
export default function RadioButton({
  url,
  svg,
  title,
  active = false,
}: CustomProps) {
  return (
    <main>
      <Link
        className="group relative flex items-center px-2 py-0.5 text-[0.8125rem]/6 font-medium gap-x-3"
        href={url}
        target={"_self"}
      >
        <span
          className={`absolute inset-0 rounded-lg bg-white/5 transition group-hover:scale-100 group-hover:opacity-100 ${
            active ? "opacity-100 scale-100" : "scale-75 opacity-0"
          }`}
        />
        <div
          className={`transition ${
            active ? "fill-blue" : "fill-grey"
          } group-hover:fill-blue`}
        >
          {svg}
        </div>
        <span className="self-baseline text-white">{title}</span>
      </Link>
    </main>
  );
}
