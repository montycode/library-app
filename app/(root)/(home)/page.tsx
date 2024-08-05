import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import { getAssets } from "@/sanity/actions";
import AssetsList from "@/components/AssetsList";
export const revalidate = 900;

interface Props {
  searchParams: { [key: string]: string };
}

const Page = async ({ searchParams }: Props) => {
  const assets = await getAssets({
    query: searchParams.query ?? "",
    assetType: searchParams.assetType ?? "featured",
    page: searchParams.page ?? "1",
  });

  return (
    <main className="flex-center p-4 mx-auto w-full md:w-[650px] lg:w-[850px] max-w-screen-2xl flex-col">
      <section className="text-center text-slate-800 w-full space-y-4">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl">Library</h1>
        <p className="text-slate-800">
          Browse for assets needed to report and present analysis.
        </p>
        <SearchForm />
        <Filters />
      </section>
      <section className="p-6">
        <Header
          query={searchParams.query}
          assetsType={searchParams.assetType}
        />
        <AssetsList assets={assets} />
      </section>
    </main>
  );
};

export default Page;
