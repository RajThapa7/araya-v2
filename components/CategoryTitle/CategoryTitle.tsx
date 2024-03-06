export default function CategoryTitle({ title }: { title: string }) {
  return (
    <div className="w-full border-b-2 border-gray-300 pb-3 relative">
      <h2 className="font-medium text-gray-900 text-xl after:bg-accent-dark after:h-[2px] after:w-24 after:absolute after:-bottom-[1px] after:left-0 after:rounded-l-lg">
        {title}
      </h2>
    </div>
  );
}
