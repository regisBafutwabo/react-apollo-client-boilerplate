import { ItemType } from "antd/es/menu/hooks/useItems";

export type LanguageMenuProps = {
    languages: ItemType[];
    changeLanguage: (event: any) => Promise<void>;
};
