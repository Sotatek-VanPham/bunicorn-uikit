import React from "react";
import { LangType } from "../types";
interface Props {
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
    isDark: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
