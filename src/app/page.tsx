import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen bg-gradient-to-b from-[#b597f6] to-[#96c6ea] text-white">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold">Hello World</h1>
        </div>
      </main>
    </HydrateClient>
  );
}
