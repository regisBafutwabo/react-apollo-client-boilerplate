/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const fs = require("fs");
const chalk = require("chalk");

module.exports = {
    input: [
        "src/pages/**/*.{ts,tsx}",
        "src/components/**/*.{ts,tsx}",
        // Use ! to filter out files or directories
        "!src/**/*.queries.{js,jsx}",
        "!src/apollp/*",
        "!src/i18n/**",
        "!**/node_modules/**",
        "!**/build/**",
    ],
    output: "./src/locales/",
    options: {
        debug: true,
        func: {
            list: ["i18next.t", "i18n.t", "t"],
            extensions: [".ts", ".tsx"],
        },
        lngs: ["en", "ko"],

        defaultValue: "__STRING_NOT_TRANSLATED__",
        resource: {
            loadPath: "./src/locales/{{lng}}/{{ns}}.json",
            savePath: "{{lng}}/{{ns}}.json",
            jsonIndent: 2,
            lineEnding: "\n",
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: "{{",
            suffix: "}}",
        },
    },
    transform: function customTransform(file, enc, done) {
        const { parser } = this;
        const content = fs.readFileSync(file.path, enc);
        let count = 0;

        parser.parseFuncFromString(
            content,
            { list: ["i18next._", "i18next.__"] },
            (key, options) => {
                parser.set(key, { ...options, nsSeparator: false, keySeparator: false });
                ++count;
            },
        );

        if (count > 0) {
            console.log(
                `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
                    JSON.stringify(file.relative),
                )}`,
            );
        }

        done();
    },
};
