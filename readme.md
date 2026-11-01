# All-In-One Otaku Site

A preview of the site is available [here on Vercel](https://all-in-one-template-site.vercel.app).

You are free to use this site and modify it however you wish. Credit is appreciated, either to this Github or my website [ectobe.ing](https://ectobe.ing). Do not claim as your own, and please redirect people to this project for as long as it remains up, if you are asked about the code. Thanks!

## Table of Contents
1. [Set Up](#set-up)
2. [Basic Usage](#basic-usage)
3. [Using Git and Github](#using-git-and-github)
4. [Hosting Your Site](#hosting-your-site)

## Set Up

**Necessary:**
- HTML knowledge
- Markdown knowledge
- Code editing software
- Node.JS (explained below)

**Bonus:**
- CSS knowledge
- Javascript knowledge
- Git, and a Github account

It would be good to familiarize yourself with 11ty, but you can follow this guide to run this project. 

**Benefits for you:**
- Decide to change the layout of a type of page? It updates every single one at once.
- You can change the style of your entire website by updating one style link.
- If you know Javascript/Nunjucks/Liquid, you can create your own custom templates and filters to do whatever you want with.
- Writers:
  - Chapter lists in menus are updated automatically.
  - Next/Previous buttons are added on chapters automatically.
  - No worrying about HTML syntax when writing. Markdown is as close to the natural writing experience as possible.
  - *Do* have your stories in HTML? You can just paste that in, and Markdown automatically converts it.
  - You can insert images, videos, audio files, whatever you want, just like a regular webpage, without worrying about formatting hassles.
  - Tag pages are automatically created, and you can choose what you find important to be tagged.
  - You choose what fandoms (or other series) to sort by.
- Artists:
  - You can upload images to your site or another service.
  - All you do is make a markdown page with a title, date, tags, and/or any comments on the piece, and link to the image.
  - The page for the image is automatically created, tag pages created and linked on the gallery main page, and thumbnail neatly displayed.


**Basic Resources:**
- [Learn Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5) - Start here if you know nothing about HTML.
- [Markdown Guide](https://commonmark.org/help/) - The Markdown basics, in case you don't know them.
- [How the heck do I use Eleventy?](https://medium.com/@tarngerine/how-the-heck-do-i-use-eleventy-the-intro-guide-i-wish-i-had-84d9b2689031) - Start here for a basic overview of 11ty.
- [11ty Rocks](https://11ty.rocks) - For tutorials and further reading and development.
- [Advanced Markdown Guide](https://github.com/DavidWells/advanced-markdown) - In case you want to get fancy.

**Code Editors:**
Next, I highly recommend installing Visual Studio Code or a similar program. You want something where you can open your project folder and see all the folders and files inside of it, and has access to a terminal. Note that VSCode is the easiest one to set-up, has all the built in features you need, and has a useful extension market. You don't need to use any of its AI features, and can turn them off in the settings using `chat.disableAIFeatures`.
- [Visual Studio Code](https://code.visualstudio.com/) 
- [VSCodium](https://vscodium.com/) - Open source alternative.
- [Sublime Text](https://www.sublimetext.com/) - I haven't tried it, but some recommend it.

**Node.JS:**
Node.JS is essentially a program that allows you to run JavaScript on your computer, and is used for building websites and doing work on the terminal.

For Windows, you can install an msi version from the official website [here](https://nodejs.org/en/download), or you can install from the command panel via winget:
- Open your Command Panel in Administrator Mode and type in `winget` to ensure it's installed (most Windows come with it).
- Run the command `winget install -e --id OpenJS.NodeJS.LTS`
- It might take a few minutes to install. Close and re-open Command Panel once it's finished.
- Run `node -v` and `npm -v` to ensure they're installed and functioning.

For Mac, you can also install from the official website [here](https://nodejs.org/en/download), or you can install via [Homebrew](https://brew.sh) (I recommend using Homebrew, very useful).
- Press `Command + Space` to open Spotlight, type `Terminal` and select it.
- Install Homebrew if you haven't already, using `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
- Once you have Homebrew, run `brew install node` and wait for it to install.
- Run `node -v` and `npm -v` to ensure they're installed and functioning.

**Now you can get the project ready!**

1. Download this code by clicking the green **Code** button, and clicking **Download Zip**.
2. Unzip the file wherever you want it, then open your code editor, and select that whole unzipped folder.
3. In the terminal, type `npm install`. This will install everything related to the project (11ty files, etc)
4. You're ready to start working on your site! Here are some useful terminal commands:
   1. `npm run start` - preview your site at localhost:8080, automatically updates as you code. (This is a script that automatically runs `npx @11ty/eleventy --serve`)
   2. `npm run build` - builds your site to its output folder (automatically set to `/_site/`). (This is a script that automatically runs `npx @11ty/eleventy`)
   3. [More on the 11ty website](https://www.11ty.dev/docs/usage/) 

## Basic Usage

### Titles:
- `mainHeaderTitle` is a persistent field in `/_includes/base.liquid` that is used as the website name in several places, such as in the sidebar title on works pages. 
- `title` can be set on any page and it is what displays in the tab of your website, and in some places (such as novels and art), displays the title of the work. This is automatically processed in some cases.

### Novels:
- The example folders `bram-stoker`, `charles-dickens`, should be deleted after reviewing them.
- There is an `alternativeIndex.liquid` page with a simpler view. You can delete this or replace `index.liquid` with it if you prefer it.
- For each series you want, create a folder inside `/novels/`. 
  - Inside that folder, create a json file with the same name as the folder. (EG for a folder called `bram-stoker`, inside it create `bram-stoker.json`).
  - Create a field called seriesTitle, and for the data have it be whatever you want the series to be listed as.
  - Following the Bram Stoker example, it would be `{ "seriesTitle": "Bram Stoker" }`
  - All stories created within this folder will now automatically be added to the same series.
- Inside each series folder, create new folders for the works under that series. 
  - Inside these works folders there must be an `index.md` file. A template of the `index.md` file is available [in this gist](https://gist.github.com/notosarme/61b3a7b511392a0c308f8c4c6ac2fa2e).
  - `categories` is a list of categories you want the story to be labeled by and searched by (in the novel tags list). You could put warnings, tropes, character names, ships, etc.
  - `blurb` works like a summary, showing below the title in places where novels are listed out.
  - `imgs` are a list of image links (locally or off-site hosted) that will display in a gallery at the bottom of the page.
  - Chapters:
    - Create chapters using the format of `1.md`, `2.md`, etc.
    - For the chapter files, you only need `title` and `chapter` fields. The `chapter` field should JUST be the chapter number.
    - You can use HTML formatting inside markdown files, so mix and match however you wish. You can create html (or liquid) files instead of md, but I recommend keeping it to md for simplicity.

### Art:
- The example folders `consectetur`, `dolor`, `ipsum`, `lorem`, and `sit-amet` should be deleted after reviewing them.
- For each main category tag you want, create a folder inside `/art/`.
  - Inside that folder, create a json file with the same name as the folder. (EG for a folder called `original-characters`, inside it create `original-characters.json`).
  - Create a field called tags, and for the data have it be whatever you want the series to be listed as.
  - Following the Original Characters example, it would be `{ "tags": "Original Characters" }`
  - If you want a specific page to have multiple tags, put it in one folder, and then in the header add the other tag(s) you want, like `tags: ["second-category"]`. Tags automatically stack unless overridden.
- For each artwork, create a markdown file like `title-here.md`. A template is available [in this gist](https://gist.github.com/notosarme/29684a22f34852bc27dc33ea9fa0fcd5).

### Wiki:
- The example folders `examples`, `splatoon`, and `transformers` should be deleted after reviewing them.
- There is an `alternativeIndex.liquid` page with a simpler view. You can delete this or replace `index.liquid` with it if you prefer it.
- For each category tag you want, create a folder inside `/wiki/`.
  - Inside that folder, create a json file with the same name as the folder. (EG for a folder called `blue-team`, inside it create `blue-team.json`).
  - Create a field called tags, and for the data have it be whatever you want the series to be listed as.
  - Following the Blue Team example, it would be `{ "tags": "Blue Team" }`
  - If you want a specific page to have multiple tags, put it in one folder, and then in the header add the other tag(s) you want, like `tags: ["second-category"]`. Tags automatically stack unless overridden.
- For each wiki page, create a markdown file like `title-here.md`. A template is available [in this gist](https://gist.github.com/notosarme/1b84c015fe61aea5f97fd365939b857a).
- You can add new traits to the wiki trait box by going to `/_includes/wikiPage.liquid`, and following the instructions under the table. This can be done at any time!

### Misc:
- The `/assets/` folder contains folders with example images in them. These are unnecessary and you can make whatever folder structure you want in assets. 
- You should be putting images, fonts, and other assets in the `/assets/` folder, and style sheets in the `/styles/` folder/. 
  - If you want them to be in another folder, add a new `eleventyConfig.addPassthroughCopy` configuration in the `.eleventy.js` file.
- A note: tags and categories for wiki, art, and novels do NOT cross over or connect with each other. They're all separate.
- Anything you don't want eleventy to transfer to your finished site (eg WIP or test pages) can be added to the `.eleventyignore` file.

### Basic Troubleshooting:
 - While testing your website on 11ty's server, you can press `ctrl-c` to close the server, and re-open it. Sometimes changes regarding data don't register without resetting the server.
 - 11ty's build isn't always destructive (that is, removing deleted files from the export folder). If things don't seem to be updating correctly, just delete the export (`_site`) folder and rebuild.
 - If there are any critical errors, feel free to message me.

## Using Git and Github

Note: You can also use git to install this project *and* it will allow you to save variations of your site and revert changes! You can even make "branches" that allow you to make experimental changes that you can choose to apply to your main project, or discard. If you want to learn Git and GitHub, I recommend the following:
- [Git and GitHub for Poets](https://www.youtube.com/watch?v=BCQHnlnPusY) - Video tutorial
- [A Poet's Guide to Git](https://writerly.dev) - Written tutorial 
- [Learn Git Branching](https://learngitbranching.js.org) - Interactive tutorial

You can also use the [Github Desktop Client](https://desktop.github.com/download/) for a visual, non-terminal based experience.

If using git, make a `.gitignore` file and add `node_modules` to it, along with anything else you don't want git to see. (Note: `node_modules` is all that stuff that npm installed by reading the `package-lock.json` file!)

## Hosting Your Site

You can host your site on basically any service that allows website hosting. Neocities is a popular option, as is Nekoweb. If you buy a domain, they often have services that allow you to host your site on them. The main thing of note is that you do not upload anything from your `/build/` folder, you only want to host your `/_site/` folder! 

Neocities has a useful option called [Deploy to Neocities](https://github.com/marketplace/actions/deploy-to-neocities). This makes it so whenever there is an update pushed to your `/_site/` folder to Github, it automatically updates everything on Neocities for you. No manually uploading everything yourself! I'll go over the basic steps here:

- At the root of your project, create `/.github/workflows/neocities.yml`, and paste in the code from [this gist](https://gist.github.com/notosarme/fe14085882b142297f00149ee5267109).
- Go to your website's settings in Neocities, go to API Key, and generate a key if you haven't already.
- Copy the key, go to the github.com repo for your website. Go to Settings > Secrets and Variables > Actions.
- Create a New repository secret, call it `NEOCITIES_API_TOKEN`, and for the secret, put the API key you copied.
- Now whenever you push changes to Github, it should send those changes to Neocities for you! 
- Quick note on the `neocities.yml` code:
  - `branches: -main` is saying that its only looking at pushes done to your "main" branch. Assuming you're not using an old version of git that calls it "master", this is fine.
  - `api_token: ${{ secrets.NEOCITIES_API_TOKEN }}` is using the name of the Github Secret you created
  - `dist_dir: _site` is the name of the folder that its going to look at to send to Neocities.
  - `cleanup: false` is looking at if it should delete files that don't exist in what you're pushing. It's a good idea to set this to `true` at least sometimes to do a cleanup.
