module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
  eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
  eleventyConfig.addPassthroughCopy({ 'src/.htaccess': '.htaccess' });


  // change input and output folders
  return {
    dir: {
      input: "src",
      output: "public_html",
    },
    pathPrefix: "/~mliu102"
  };
};
