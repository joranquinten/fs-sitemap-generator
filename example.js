/**
 * Provide the domain of the website.
 */
const DOMAIN = "https://mockdomain.com";

/**
 * Array of folders to ignore if they match (as)
 */
const IGNORE_FOLDERS = ["ignore-this", "images", "assets"];

/**
 * The folder name where the generated files our stored relative to the script.
 */
const SOURCE_FOLDER = "_example";

/**
 * The file name where the generated file will be written.
 * It will assume to be stored on the ${SOURCE_FOLDER}/${OUTPUT_FILE_NAME}
 */
const OUTPUT_FILE_NAME = "sitemap.xml";

const generateSitemap = require("./src");

const __init = async () => {
  generateSitemap(
    SOURCE_FOLDER,
    IGNORE_FOLDERS,
    DOMAIN,
    `${SOURCE_FOLDER}/${OUTPUT_FILE_NAME}`
  );
};

__init();
