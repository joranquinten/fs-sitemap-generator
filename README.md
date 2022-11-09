# FS Sitemap Generator

[Package on npm](https://www.npmjs.com/package/fs-sitemap-generator)

## Table of Contents
- [FS Sitemap Generator](#fs-sitemap-generator)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Requirements](#requirements)
  - [Usage](#usage)
  - [Methods](#methods)
    - [generateSitemap](#generatesitemap)
  - [Contributing](#contributing)
  - [Disclaimer](#disclaimer)

## Introduction

This package uses the fs to generate an XML sitemap. This is useful for when you're dealing with SSR generated websites which don't natively support an on the fly sitemap generation.

In most cases this script can be executed as an additional command after the build (tested and verified on [Netlify](https://netlify.com)) and can then be submitted to search engines.

## Requirements

You need nodeJS to run the script (but you'd probably have it installed anyway). Also, create a file to execute (see `example.js`).

## Usage

Install with the following command:

```bash
npm i fs-sitemap-generator
```

You should add the action of generating the sitemap after the SSR generation has taken place. You only need to do this on the deployment. In the example the contents of `example.js` would have been stored on `sitemap.js`.

For instance, you can simply enter:

```bash
npm generate && node example
```

## Methods

There's only one method and it takes a couple of arguments as configuration.

### generateSitemap

Reads into the file system of the specified folder and assumes that all folders point to a servable index file (which most SSR generators will provide):

|Name|Type|Description|
|-|-|-|
|sourceFolder|String|The folder where the SSR generated content is stored|
|ignoreFolders|Array|List of foldernames to ignore while generating|
|domain|String|Main domain to build a full URL|
|outputFile|String|Destination file (usually a combination of sourceFolder + sitemap.xml|

```js
generateSitemap(
    SOURCE_FOLDER,
    IGNORE_FOLDERS,
    DOMAIN,
    OUTPUT_FILE
  );
```

## Contributing

If you want to contribute, feel free to drop me a line or open up an Issue on the repo. Then we can discuss how the change would fit in with the code.

## Disclaimer

It's a simple script which is based on a lot of assumptions of a standard build. It may not suit more custom scenarios but that was never the intention.