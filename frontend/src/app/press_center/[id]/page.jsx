import Image from "next/image";
import { fetchBlogs } from "@/app/needed/services";

export default async function Post({ params }) {
  const blogs = await fetchBlogs();
  const findObj = blogs.data.find(
    (obj) => parseInt(obj.id, 10) === parseInt(params.id, 10)
  );

  const domain = "http://127.0.0.1:1337";
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-prime">
        {findObj.attributes.title}
      </h2>
      <p>{findObj.attributes.description[0].children[0].text}</p>

      <div className="flex flex-col gap-5">
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
      </div>
    </section>
  );
}
