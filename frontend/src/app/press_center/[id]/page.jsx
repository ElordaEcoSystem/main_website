import { NEWS_DATA } from "@/app/needed/constans";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Image from "next/image";

export default function Post({ params }) {
  const item = NEWS_DATA[params.id];
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-prime">{item.title}</h2>
      <p>{item.description}</p>
      {/* <div className="flex flex-col gap-5">
          <div className="flex">
            <Image
              src={`image/`}
              width={0}
              height={0}
              sizes="100vw"
              className="h-52 w-52 object-cover justify-center"
            ></Image>
            <div className="py-3 px-4">
              <Link
                href={`press_center/${item.id}`}
                className="text-lg font-bold text-prime"
              >
                {item.label}
              </Link>
              <p className="text-sm mt-2 line-clamp-5">{item.description}</p>
              <div className="text-gray-400 text-sm mt-2">{item.date}</div>
            </div>
          </div>
        </div> */}
    </section>
  );
}
