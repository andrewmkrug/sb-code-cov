module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  core: {
    builder: "webpack5"
  },
  features: {
    interactionsDebugger: true // 👈 Enable playback controls
  }
};
