// import { REQUEST_PTO } from "@/app/needed/constans";

import { useTranslations } from "next-intl";
export default function RequestPTO() {
  const t = useTranslations("Request_PTO");
  console.log(t("Request"));
  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-prime">
        Перечень Необходимой технической документации для подписания декларации
        о соответствии
      </h2>

      <div className="mt-4"></div>
      {/* {t("Request").map((item, i) => {
        return (
          <>
            <p>
              <span className="text-prime font-bold">
                {i + 1}
                {`)`}
              </span>
              &nbsp;
              <span>{item};</span>
            </p>
          </>
        );
      })} */}
    </div>
  );
}

//Request_PTO
