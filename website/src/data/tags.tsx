/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - `title` is your project's name (no need for the "Docs" suffix)
 * - A short (≤120 characters) description of your project
 * - Use relevant tags to categorize your site (read the tag descriptions below)
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - If your website is open-source, add your source link. The link should open
 *   to a directory containing the `docusaurus.config.js` file
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the GitHub interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remain correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 */

export type Tag = {
    label: string;
    description: string;
    color: string;
};

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    author: string;
    source: string;
    tags: TagType[];
};
  
  // NN: Updated TagType to suit Static Web Apps
export type TagType =
| 'featured'
| 'azurekubernetesservice'
| 'azurecontainerapps'
| 'azurefunctions'
| 'azureopenai'
| 'azureeventgrid'
| 'azurelogicapps'
| 'github'
| 'cosmosdb'
| 'serverless'
| 'cloudnative'
| 'ai'
| 'database'
| 'devtools'
| 'kubernetes'
| 'blog'
| 'codesample'
| 'video'
;


// LIST OF AVAILABLE TAGS
// Each tag in lit about must have a defined object here
// One or more tags can be associated per card
// Tag Metadata:
//   - label = short name seen in tag
//   - description = explainer for usage
//   - color = color of the dot in tag
// Some tags are special:
//    - 'featured` can only be added by admin (for quality templates)
//    - 'help wanted` must associate "source" with an open issue
export const Tags: {[type in TagType]: Tag} = {

    //============  FOR REGULAR USE

    // Products
    featured: {
        label: ' ♥️ Featured',
        description:
        'Most popular',
        color: 'red', //'#e9669e',
    },
    azurekubernetesservice: {
        label: 'Azure Kubernetes Service',
        description: 'Azure Kubernetes Service',
        color: '#5A57E6',
    },
    azurecontainerapps: {
        label: 'Azure Container Apps',
        description: 'Azure Container Apps',
        color: '#5A57E6',
    },
    azurefunctions: {
        label: 'Azure Functions',
        description: 'Azure Functions',
        color: '#5A57E6',
    },
    azureopenai: {
        label: 'Azure OpenAI',
        description: 'Azure OpenAI',
        color: '#5A57E6',
    },
    azureeventgrid: {
        label: 'Azure Event Grid',
        description: 'Azure Event Grid',
        color: '#5A57E6',
    },
    azurelogicapps: {
        label: 'Azure Logic Apps',
        description: 'Azure Logic Apps',
        color: '#5A57E6',
    },
    github: {
         label: 'GitHub',
         description: 'GitHub',
         color: '#5A57E6',
    },
    cosmosdb: {
        label: 'Azure Cosmos DB',
        description: 'Azure Cosmos DB',
        color: '#5A57E6',
    },

    // ---- Technology
    serverless: {
        label: 'Serverless',
        description: 'Serverless',
        color: '#8661c5',
    },
    cloudnative: {
        label: 'Cloud-native',
        description: 'Cloud-native',
        color: '#8661c5',
    },
    ai: {
    label: 'AI',
    description: 'AI',
    color: '#8661c5',
    },
    database: {
    label: 'Database',
    description: 'Database',
    color: '#8661c5',
    },
    devtools: {
    label: 'Dev Tools',
    description: 'Dev Tools',
    color: '#8661c5',
    },
    kubernetes:{
    label: 'Kubernetes',
    description: 'Kubernetes',
    color: '#8661c5',
    },

    // ---- Content Type
    blog: {
        label: 'Blog',
        description: 'Blog',
        color: '#C03BC4',
    },
    codesample: {
        label: 'Code Sample',
        description: 'Code Sample',
        color: '#C03BC4',
    },
    video: {
        label: 'Video',
        description: 'Video',
        color: '#C03BC4',
    }
};