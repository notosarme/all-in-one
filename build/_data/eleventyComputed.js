module.exports = {
  series: (data) => {
    if (!data.page?.filePathStem) return null;
    return data.page.filePathStem.split("/")[2];
  },

  story: (data) => {
    if (!data.page?.filePathStem) return null;
    return data.page.filePathStem.split("/")[3];
  }
};
