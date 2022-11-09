const fs = require("fs");
const path = require("path");

const generateSitemap = (
  sourceFolder,
  ignoreFolders,
  domain,
  outputFileName
) => {
  const _flatten = (lists = []) => lists.reduce((a, b) => a.concat(b), []);

  const _getDirectories = (srcpath = []) => {
    return fs
      .readdirSync(srcpath)
      .filter((path) => !ignoreFolders.includes(path))
      .map((file) => path.join(srcpath, file))
      .filter((path) => fs.statSync(path).isDirectory());
  };

  const _getDirectoriesRecursive = (srcpath) => [
    srcpath,
    ..._flatten(_getDirectories(srcpath).map(_getDirectoriesRecursive)),
  ];

  const _grabFolders = (sourceFolder) =>
    _getDirectoriesRecursive(sourceFolder).map((f) =>
      f.replace(`${sourceFolder}`, "").replace(`${sourceFolder}/`, "")
    );

  const folders = _grabFolders(sourceFolder);
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const formattedFolders = folders
    .map(
      (f) => `
    <url>
        <loc>${domain}${f}</loc>
        <lastmod>${formattedDate}</lastmod>
    </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${formattedFolders}
</urlset>`;

  fs.writeFile(outputFileName, xml, (err) => {
    if (err) {
      console.error(err);
    }
    console.log(`XML file generated at ${outputFileName}`);
  });
};

module.exports = generateSitemap;
