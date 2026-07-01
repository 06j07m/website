module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets/fontawesome': 'assets/fontawesome' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/images': 'assets/images' });
  eleventyConfig.addPassthroughCopy({ 'src/assets/js': 'assets/js' });
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
