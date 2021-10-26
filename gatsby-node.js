exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/products`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
