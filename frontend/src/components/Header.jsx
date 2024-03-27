import Image from "next/image";
import Link from "next/link";

export const Header = ({ locale }) => {
  return (
    <header
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center"
    >
      <div className="container flex justify-around">
        <div className="">
          <Link href="/" className="text-prime font-bold text-2xl">
            {/* <img src="./assets/img/logo.png" alt="" /> */}
            <Image
              src="/image/Ресурс 1 синий.png"
              width={0}
              height={0}
              sizes="84px"
              className="h-full w-full "
            />
          </Link>
        </div>
        <nav className="flex justify-center">
          <ul className="flex gap-6 text-prime font-semibold text-base items-center">
            <Link href={`/about`}>Об организации</Link>
            <Link href={`/press_center`}>Пресс-центр</Link>
            <Link href={`/procurement`}>Закупки</Link>
            <Link href={`/jobs`}>Вакансии</Link>
            <Link href={`/compliance`}>Антикор</Link>
            <Link href={`/requestPTO`}>Техническая документации</Link>
          </ul>
        </nav>
        <div className=" text-prime font-semibold text-base flex items-center">
          <div>ru</div>
        </div>
      </div>
    </header>
  );
};
