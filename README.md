# S,M,L,XL - Architizer Design Kit


## About

The purpose of this kit is to enable Architizer’s designers to be familiar with our styles and components and to be able to use the symbols and assets in here to piece together future designers. It will further serve as a complement to our living style guide that serves as the bridge between our designers and engineers.

## How to use this

The best way to use this file is to download it from GitHub or find it in our [_Design Resources](https://www.dropbox.com/sh/7lyl5cwkbrlbiks/AAAe901ekNM6ErFaCEWNRXTua?dl=0) folder on Dropbox, and then copy it into your Sketch Templates folder (Finder -> Go To Folder -> ~/Library/Application Support/com.bohemiancoding.sketch3/Templates/). When then starting a new project in Sketch, use the "New From Template" menu item and open the file. You'll then have all the symbols and styles at your disposal.

You can also drag and drop the elements you want to use from the template file that lives in Dropbox, but then you won't have your grids or anything already setup. Another option is to copy this file itself and simply delete all the artboards/pages so that all the components are available to you via the “Insert > Symbols” menu. For the most part the components in this document are at the scale to be used at our base 1200px wide breakpoint. When building for responsive or if you need more information about a particular element, reference the respective Sketch document in the _AppKit or _UIKit folders in our Dropbox folder.

Ultimately, both designers and engineers should have a solid enough understanding of our UI components that designers will not need to concern themselves with making everything pixel-perfect and defined by visual specs because the implementation in code will already have been defined and understood by all parties. Everything down to the sizing and spacing of elements is to be defined in a hierarchical system in this document and reflected in code.

A note about where this document lives. The working copy of it lives in our [_Design Resources](https://www.dropbox.com/sh/7lyl5cwkbrlbiks/AAAe901ekNM6ErFaCEWNRXTua?dl=0) folder on Dropbox and the master version lives in Github, with the most updated date in its file name. Changes should not be regularly made on the Dropbox version of the file. When style changes happen and items need to be added, we will do so as a team and update the “master file” which lives here, in Github, which documents all the changes made over time and grants us access to older versions.

## Semantic Kitchen Sink Quick Setup

```bash
npm install -g gulp
npm install semantic-ui
cd semantic
gulp build
```
Then open `index-semantic.html` in your browser. No server needed.

If you intend to change Semantic styles, run `gulp watch`.