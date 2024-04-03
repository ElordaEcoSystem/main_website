import Image from "next/image";
import Link from "next/link";

export const Header = ({ locale }) => {
  return (
    <div
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center"
    >
      <div className="container flex justify-around">
        <div className="">
          <Link href="/" className="text-prime font-bold text-2xl">
            {/* <img src="./assets/img/logo.png" alt="" /> */}
            <Image
              src="/image/b_logo.png"
              width={0}
              height={0}
              sizes="84px"
              className="h-full w-full "
            />
          </Link>
        </div>
        <nav className="flex justify-center">
          <ul className="flex gap-6 text-prime font-semibold text-base items-center">
            <Link href={`/${locale}/about`}>Об организации</Link>
            <Link href={`/${locale}/press_center`}>Пресс-центр</Link>
            <Link href={`/${locale}/procurement`}>Закупки</Link>
            <Link href={`/${locale}/jobs`}>Вакансии</Link>
            <Link href={`/${locale}/compliance`}>Антикор</Link>
            <Link href={`/${locale}/requestPTO`}>Техническая документации</Link>
          </ul>
        </nav>
        <div className=" text-prime font-semibold text-base flex items-center">
          <div>ru</div>
        </div>
      </div>
    </div>
  );
};
