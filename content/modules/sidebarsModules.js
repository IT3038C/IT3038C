/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  modules: [
    {
      collapsible: false,
      items: [
        {
          items: [
            {
              dirName: `module-1`,
              type: `autogenerated`,
            },
          ],
          label: `Module 1`,
          type: `category`,
        },
        {
          items: [
            {
              dirName: `module-2`,
              type: `autogenerated`,
            },
          ],
          label: `Module 2`,
          type: `category`,
        },
        {
          items: [
            {
              dirName: `module-3`,
              type: `autogenerated`,
            },
          ],
          label: `Module 3`,
          type: `category`,
        },
        {
          items: [
            {
              dirName: `module-4`,
              type: `autogenerated`,
            },
          ],
          label: `Module 4`,
          type: `category`,
        },
        {
          items: [
            {
              dirName: `module-5`,
              type: `autogenerated`,
            },
          ],
          label: `Module 5`,
          type: `category`,
        },
      ],
      label: `Modules`,
      link: {
        id: `modules`,
        type: `doc`,
      },
      type: `category`,
    },
  ],
};

module.exports = sidebars;
