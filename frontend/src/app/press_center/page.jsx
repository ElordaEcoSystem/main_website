import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchBlogs } from "../needed/services";
export default async function PressCenter() {
  const blogs = await fetchBlogs();
  const domain = "http://127.0.0.1:1337";
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-prime">Новости</h2>
      <div className="flex flex-col gap-5">
        {blogs?.data?.map((blog) => {
          const imageUrl =
            domain + blog.attributes.thumbnail.data.attributes.url;
          return (
            <div>
              <div className="grid grid-cols-[207px_auto] gap-4" key={blog.id}>
                <Image
                  src={imageUrl}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-52  w-52 object-cover justify-center"
                ></Image>
                <div className="py-3 px-4">
                  <Link
                    href={`press_center/${blog.id}`}
                    className="text-lg font-bold text-prime"
                  >
                    {blog.attributes.title}
                  </Link>
                  <p className="text-sm mt-2 line-clamp-5">
                    {blog.attributes.description[0].children[0].text}
                  </p>
                  <div className="text-gray-400 text-sm mt-2">
                    {blog.attributes.date_of_publication}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
