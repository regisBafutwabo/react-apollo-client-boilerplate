import { Language } from "apollo/Models";
import { i18nMutations } from "../../apollo/Operations/Client/Mutations/index";

export class I18nService {
    public static async changeLanguage(language: Language) {
        await i18nMutations.updateLanguage(language);
    }
}
