const getStories = (htmlString) => {
  let section = htmlString.replace(/[\r\n\t]+/gm, "");
  const latestSections = section.match(
    /<section class="homepage-module latest" data-module_name="Latest Stories">(.*?)<\s*\/\s*section>/g
  )[0];
  const anchors = latestSections.match(/<\s*a href=[^>]*>(.*?)<\s*\/\s*a>/g);
  const stories = anchors.map((anchor) => {
    return {
      title: anchor.match(/<a [^>]+>([^<]+)\<\/a\s*?\>/)[1],
      link: `https://time.com${anchor.match(/<a href=(\/[^>]+\/)/)[1]}`,
    };
  });
  return stories;
};

module.exports = getStories;
