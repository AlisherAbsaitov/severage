import React from "react";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return <div>{t("Footer")}</div>;
}
