import type { NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import StockCard from "~/components/StockCard";

const Home: NextPage = () => {
  const stockQuery = api.stock.all.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-pink-400">Preppy</span>
          </h1>

          {stockQuery.data ? (
            <div className="w-full max-w-2xl">
              {stockQuery.data?.length === 0 ? (
                <span>There are no stocks!</span>
              ) : (
                <div className="flex justify-center overflow-y-scroll px-4 text-2xl">
                  <div className="flex w-full flex-col gap-4">
                    {stockQuery.data?.map((p) => {
                      return <StockCard key={p.id} stock={p} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
