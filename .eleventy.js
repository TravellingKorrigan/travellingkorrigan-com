const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebc, {
    // Global no-import components
    components: "_components/**/*.webc",
  });

  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.addWatchTarget("./_components/");
  eleventyConfig.addWatchTarget("./_includes/");

  // Games, all locales mixed: every consumer filters on data.locale.
  // Sorted by the `order` frontmatter value, then by title.
  eleventyConfig.addCollection("games", (collectionApi) =>
    collectionApi
      .getFilteredByTag("games")
      .sort(
        (a, b) =>
          (a.data.order ?? 999) - (b.data.order ?? 999) ||
          String(a.data.title).localeCompare(String(b.data.title))
      )
  );

  eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site",
    },
  };
};
