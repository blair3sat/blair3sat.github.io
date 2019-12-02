const withPlugins = require("next-compose-plugins");

const remarkSlug = require("remark-slug");
const toc = require("./toc");

// Generates Blog Index
const withBlog = require("next-mdx-blog");
const withMDX = require("@zeit/next-mdx")({
	options: { remarkPlugins: [toc, remarkSlug] }
});

module.exports = withPlugins([withMDX, withBlog], {
	assetPrefix: "/blog",
	pageExtensions: ["js", "mdx"],
	distDir: "build"
});
