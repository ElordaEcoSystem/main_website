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
    </div>
  );
}

//Request_PTO
