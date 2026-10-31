const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require("fs");
const path = require("path");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRss); //Add RSS
  eleventyConfig.addPassthroughCopy("build/assets");
  eleventyConfig.addPassthroughCopy("build/styles");


  // Month DD, YYYY Filter
  eleventyConfig.addFilter("textDate", function (d) {
    const english = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
    return english.format(d);
  });

  // Capitalize Every Word Filter
  eleventyConfig.addFilter("title", function (str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  });

  // Remove Hypens Filter
  eleventyConfig.addFilter("whitespace", function (str) {
    return str.replace(/[-_]/g, ' ')
  });

  //Sort Collection Names By Alphabet Filter
  eleventyConfig.addFilter("alphabeticize", function (collection) {
    return [...collection].sort((a, b) =>
      a.data.name.localeCompare(b.data.name, undefined, {
        sensitivity: "base"
      })
    );
  });

  // Filter collection by year
  eleventyConfig.addFilter("sortByYear", function (collection, year) {
      return collection.filter(art =>
          art.date.getFullYear() === Number(year)
      );
  });

  // COLLECTION - FICS BY FANDOM
  eleventyConfig.addCollection("novels", function(collectionApi) {
    const novels = collectionApi.getFilteredByTag("novel");

    const series = {};

    novels.forEach(novel => {
      const seriesName = novel.data.seriesTitle || "Uncategorized";

      if (!series[seriesName]) {
        series[seriesName] = [];
      }

      series[seriesName].push(novel);
    });

    return Object.entries(series).map(([title, stories]) => ({
      title,
      stories
    }));
  });

  // COLLECTION - CHAPTERS PER STORY
  eleventyConfig.addCollection("chaptersByStory", function (collectionApi) {
    let chapters = collectionApi.getFilteredByTag("chapter");

    let stories = {};
    chapters.forEach(chapter => {
      let story = chapter.data.story;
      stories[story] = stories[story] || [];
      stories[story].push(chapter);
    });

    Object.keys(stories).forEach(story => {
      stories[story].sort((a, b) => a.data.chapter - b.data.chapter);
    });

    return stories;
  });


  // COLLECTION - CATEGORIES
  eleventyConfig.addCollection("categories", function (collectionApi) {
    let categories = new Set();
    let novels = collectionApi.getFilteredByTag("novel");
    novels.forEach((p) => {
      let cats = p.data.categories;
      cats.forEach((c) => categories.add(c));
    });
    return Array.from(categories);
  });

  // FILTER - BY CATEGORY
  eleventyConfig.addFilter("filterByCategory", function (novels, cat) {
    cat = cat.toLowerCase();
    let result = novels.filter((p) => {
      let cats = p.data.categories.map((s) => s.toLowerCase());
      return cats.includes(cat);
    });
    return result;
  });

  // ARTWORK COLLECTION
  eleventyConfig.addCollection("artwork", function (collectionApi) {
    return collectionApi.getFilteredByTag("artwork");
  });

  // ART TAGS COLLECTION
  eleventyConfig.addCollection("artTags", function (collectionApi) {
    const categories = new Map();

    const artworks = collectionApi
      .getFilteredByTag("artwork")
      .sort((a, b) => b.date - a.date);

    for (const item of artworks) {
      for (const tag of item.data.tags || []) {
        if (tag === "artwork") {
          continue;
        }

        if (!categories.has(tag)) {
          let tagUrl = tag.replace(/\s+/g, '-').toLowerCase();
          let title = tagUrl.replace(/\b\w/g, char => char.toUpperCase()).replace(/[-_]/g, ' ');
          categories.set(tag, {
            name: tag,
            title: title,
            url: `${tagUrl}`,
            image: item.data.url,
            artworks: [],
          });
        }

        categories.get(tag).artworks.push(item);
      }
    }

    return [...categories.values()]
      .sort((a, b) => a.name.localeCompare(b.name));
  });

  //ART YEARS COLLECTION
  eleventyConfig.addCollection("artYears", collection => {
    const artworks = collection.getFilteredByTag("artwork");

    return [...new Set(
      artworks.map(art => art.date.getFullYear())
    )].sort((a, b) => b - a);
  });

  // WIKI TAGS COLLECTION
  eleventyConfig.addCollection("wikiTags", function (collectionApi) {
    const categories = new Map();

    const wikiCharas = collectionApi
      .getFilteredByTag("wiki")
      .sort((a, b) => b.date - a.date);

    for (const item of wikiCharas) {
      for (const tag of item.data.tags || []) {
        if (tag === "wiki") {
          continue;
        }

        if (!categories.has(tag)) {
          let tagUrl = tag.replace(/\s+/g, '-').toLowerCase();
          let title = tagUrl.replace(/\b\w/g, char => char.toUpperCase()).replace(/[-_]/g, ' ');
          categories.set(tag, {
            name: tag,
            title: title,
            url: `${tagUrl}`,
            image: item.data.url,
            wikiCharas: [],
          });
        }

        categories.get(tag).wikiCharas.push(item);
      }
    }

    return [...categories.values()]
      .sort((a, b) => a.name.localeCompare(b.name));
  });


  return {
    dir: {
      input: "build",
      output: "_site"
    },
  };
};
