import Link from "next/link";

interface ILinkProps {
  link: string;
  title: string;
}

export default function MyLink({ link, title }: ILinkProps) {
  return (
    <div className="text-primary uppercase w-fit group flex flex-col gap-2.5">
      <Link
        href={link}
        className="font-semibold transition-smooth group-hover:text-[#ff8389]"
      >
        {title}
      </Link>
      <div className="w-full bg-primary h-[1px] rounded-full relative">
        <div className="bg-[#ff8389] w-0 transition-smooth h-full group-hover:w-full"></div>
      </div>
    </div>
  );
}
