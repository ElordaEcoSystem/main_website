import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_DATA } from "@/app/needed/constans";

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      "http://127.0.0.1:1337/api/blogs?populate=*",
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export default async function PressCenter() {
  const blogs = await fetchBlogs();
  console.log(blogs);

  // const pathToThumbnail = "/image/posts";
  return (
    <section className="container py-12 flex flex-col gap-4 ">
      {/* <div>
        {blogs?.data?.map((blog) => (
          <div key={blog.id}>{blog.attributes.Thumbnail}</div>
        ))}
      </div> */}
      <h2 className="text-3xl font-bold text-prime">Новости</h2>
      <div className="flex flex-col gap-5">
        {blogs?.data?.map((blog) => {
          return (
            <div className="grid grid-cols-[207px_auto] gap-4" key={blog.id}>
              {/* <Image
                src={""}
                width={0}
                height={0}
                sizes="100vw"
                className="h-52  w-52 object-cover justify-center"
              ></Image> */}
              <div className="py-3 px-4">
                <Link
                  href={`press_center/${blog.id}`}
                  className="text-lg font-bold text-prime"
                >
                  {blog.attributes.title}
                </Link>
                {/* <p className="text-sm mt-2 line-clamp-5">{blog.description}</p>
                <div className="text-gray-400 text-sm mt-2">{blog.date}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
