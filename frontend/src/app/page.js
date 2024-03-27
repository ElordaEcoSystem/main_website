// import Image from 'next/image'

import { Banner } from "@/components/Banner";
import { News } from "@/components/News";
import { Perform } from "@/components/Perform";

export default async function Home() {
  return (
    <div className=" ">
      <main className="">
        <Banner />
        <Perform />
        <News />
      </main>
    </div>
  );
}
