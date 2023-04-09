import getWikiResults from "@/lib/search/getWikiResults";
import Item from "./components/Item";

type Props = {
  searchParams: {
    q: string;
  };
};

export async function generateMetadata({
  searchParams: { q: searchTerm },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;

  const displayTerm = searchTerm?.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  };
}

export default async function SearchResults({
  searchParams: { q: searchTerm },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className=" mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.page_id} result={result} />;
        })
      ) : (
        <h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
      )}
    </main>
  );

  return content;
}
