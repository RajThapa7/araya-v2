import { SearchPage } from "@/features";
import { metaGenerator } from "@/features/metagenerator/metagenerator";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    ...metaGenerator({
      title: `${searchParams?.query} | Araya Arts Store`,
    }),
  };
}
const Search = () => {
  return (
    <>
      <SearchPage />
    </>
  );
};

export default Search;
