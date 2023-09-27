import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
    '@chromaui/addon-visual-tests',
    {
      name: '@chromaui/addon-visual-tests',
      options: {
        projectId: 'Project:6511db327b8c8fa710d60d18',
        projectToken: 'chpt_6a460545677e332',
      },
    },
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['./static'],
};

export default config;
