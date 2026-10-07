"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const LanguageSwitchButton = () => {
  const [language, setLanguage] = useState("");
  const router = useRouter();
  const t = useTranslations("navigation");

  function setLanguagePage(path: string) {
    setLanguage(path);
    router.push(path);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{t("openLanguageMenu")}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("selectLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(e) => setLanguagePage(e)}
          className="p-2"
        >
          <DropdownMenuRadioItem value="/de" className="cursor-pointer">
            Deutsch
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/en" className="cursor-pointer">
            English
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="/pl" className="cursor-pointer">
            Polski
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitchButton;
