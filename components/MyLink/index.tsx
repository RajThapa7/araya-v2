import Link from "next/link";

interface ILinkProps {
  link: string;
  title: string;
}

export default function MyLink({ link, title }: ILinkProps) {
  return (
    <div className="text-primary uppercase w-fit group">
      <Link
        href={link}
        className="font-semibold transition-smooth group-hover:text-red-700"
      >
        {title}
      </Link>
      <div className="w-full bg-primary h-[1px] rounded-full mt-3 relative">
        <div className="bg-red-700 w-0 transition-smooth h-full group-hover:w-full"></div>
      </div>
    </div>
  );
}
