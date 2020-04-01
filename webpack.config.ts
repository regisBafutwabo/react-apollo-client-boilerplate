import path from "path";

const SRC_PATH = path.join(__dirname, "./src");
const STORIES_PATH = path.join(__dirname, "./src/stories");

module.exports = ({ config }: any) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
            {
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    configFileName: "./tsconfig.json",
                },
            },
            { loader: require.resolve("react-docgen-typescript-loader") },
        ],
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
