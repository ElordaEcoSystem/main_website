import Image from "next/image";
import Link from "next/link";
export const Banner = () => {
  return (
    <section id="banner" className="bg-prime">
      <div className="container flex justify-between gap-8">
        <div className="flex flex-col max-w-md  py-32">
          <div className="text-white text-4xl font-semibold">
            ГКП на ПХВ <br />
            "ELORDA ECO SYSTEM" <br /> акимата города Астана
          </div>
          <div className="text-white text-sm font-normal mt-10">
            Единая эксплуатационная организация для коллекторов и сооружений
            ливневой канализации занимающаяся их содержанием, ремонтом и
            реконструкцией, обеспечением безопасности в городе Астана и
            пригородных населенных пунктах.
          </div>
          <div className=" mt-10 flex gap-4">
            <Link
              href={"/about"}
              className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300"
            >
              Об организаций
            </Link>
            <Link
              href="/press_center"
              className="px-5 py-1 bg-white rounded-sm text-prime font-semibold text-sm hover:scale-105 transition-all duration-300"
            >
              Пресс центр
            </Link>
          </div>
        </div>
        <div className="py-40">
          <Image
            src="/image/w_logo.png"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
