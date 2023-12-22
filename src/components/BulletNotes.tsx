import StarsSVG from "../../public/images/svgs/stars.svg";
interface CustomBulletProps {
  title: string;
  notes: string[];
}
export default function EducationPage({ title, notes }: CustomBulletProps) {
  return (
    <>
      <div className="flex mt-8 mb-2">
        <StarsSVG className="w-[20px] h-[20px] mr-3 mt-1" />
        <h3 className="font-semibold text-lg text-title-dark">{title}</h3>
      </div>
      <ul className="text-sm space-y-2.5 w-full list-disc list-inside ml-2">
        {notes.map((note: string, index: number) => (
          <li key={index}>
            <div className="ml-6 -mt-5">{note}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
