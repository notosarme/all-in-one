# Fic Archive Built In 11ty

## Table of Contents
1. [Set Up](#set-up)
2. [Project Layout](#project-layout)
3. [How To Use](#how-to-use)
    - [index.liquid](#indexliquid)
    - [archive.liquid & tagged.liquid](#archiveliquid--taggedliquid)
    - [feed.njk](#feednjk)
    - [/novels/ folder](#novels-folder)
    - [Story Index Page](#story-index-page)
    - [Story Chapter Pages](#story-chapter-pages)
    - [Liquid Templates](#liquid-templates)
4. [WIP](#wip)

## Set Up

**Necessary:**
- Basic HTML knowledge
- Basic Markdown knowledge
- Access to your terminal
- Node.JS

**Bonus:**
- A code editor where you can access your terminal and see all the files in your project (I recommend Visual Studio Code)
- Basic CSS knowledge
- Basic Javascript knowledge
- Git, and a Github account

It would be good to familiarize yourself with 11ty, but you can follow this guide to run this project. 

**Benefits for you, a writer:**
- Chapter lists in menus are updated automatically.
- Next/Previous buttons are added on chapters automatically.
- Decide to change the layout of your main reading page (or any others)? It updates every single one at once.
- You can change the style of your entire website by updating one style link.
- No worrying about HTML syntax when writing. Markdown is as close to the natural writing experience as possible.
- *Do* have your stories in HTML? You can just paste that in, and Markdown automatically converts it.
- You can insert images, videos, audio files, whatever you want, just like a regular webpage, without worrying about formatting hassles.
- Tag pages are automatically created, and you can choose what you find important to be tagged.
- You choose what fandoms (or other series) to sort by.
- If you know Javascript/Nunjucks/Liquid, you can create your own custom templates and filters to do whatever you want with.

**Basic Resources:**
- [Learn Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5) - Start here if you know nothing about HTML.
- [Markdown Guide](https://commonmark.org/help/) - The Markdown basics, in case you don't know them.
- [How the heck do I use Eleventy?](https://medium.com/@tarngerine/how-the-heck-do-i-use-eleventy-the-intro-guide-i-wish-i-had-84d9b2689031) - Start here for a basic overview of 11ty.
- [11ty Website](https://www.11ty.dev/) - For tutorials and further reading and development.
- [Advanced Markdown Guide](https://github.com/DavidWells/advanced-markdown) - In case you want to get fancy.

**Code Editors:**
Next, I highly recommend installing Visual Studio Code or a similar program. You want something where you can open your project folder and see all the folders and files inside of it. Note that VSCode is the easiest one to set-up, has all the built in features you need, and has a useful extension market. But it also loves to slap AI marketing everywhere due to it being a Microsoft product and so wanting you to use Co-Pilot. You don't need to use any of its AI features, and can turn them off in the settings using `chat.disableAIFeatures`.
- [Visual Studio Code](https://code.visualstudio.com/) 
- [VSCodium](https://vscodium.com/) - Open source alternative.
- [Sublime Text](https://www.sublimetext.com/) - I haven't tried it, but some recommend it.

Now you can get the project ready!

1. Download this code by clicking the green **Code** button, and clicking **Download Zip**.
2. Unzip the file wherever you want it, then open your code editor, and select that whole unzipped folder.
3. In the terminal, type `npm install`. This will install everything related to the project (11ty files, etc)
4. You're ready to start working on your site! Here are some useful terminal commands:
   1. `npx @11ty/eleventy --serve` - preview your site at localhost:8080, automatically updates as you code.
   2. `npx @11ty/eleventy` - builds your site to its output folder (automatically set to `/_site/`).
   3. [More on the 11ty website](https://www.11ty.dev/docs/usage/) 

Note: You can also use git to install this project *and* it will allow you to save variations of your site and revert changes! You can even make "branches" that allow you to make experimental changes that you can choose to apply to your main project, or discard. If you want to learn Git and GitHub, I recommend the following:
- [Git and GitHub for Poets](https://www.youtube.com/watch?v=BCQHnlnPusY) - Video tutorial
- [A Poet's Guide to Git](https://writerly.dev) - Written tutorial 
- [Learn Git Branching](https://learngitbranching.js.org) - Interactive tutorial

## Project Layout

The project looks something like this
```
.
├── build
│   ├── _data
│   ├── _includes
│   ├── assets
│   ├── novels
│   │   ├── fandom-1
│   │   │   ├── test-fic-1
│   │   │   └── test-fic-2
│   │   ├── fandom-2
│   │   │   ├── test-fic-3
│   │   │   └── test-fic-4
│   │   └── original
│   │       ├── test-fic-5
│   │       └── test-fic-6
│   └── styles
└── .eleventy.js
└── .eleventyignore
└── .gitignore
└── package-lock.json
└── package.json
└── readme.md
```

Terminology note: this project uses `series` as a category for sorting (like fandom), `story` for individual stories (like fics), and `novels` as an overarching term.

**Root:**
- `.eleventy.js` has all the custom filters, categories, etc set up in it. Highly recommend *not* touching that unless you know JS and 11ty.
- `.eleventy.ignore` is where you can put any files you don't want 11ty to output to your site.
- `.gitignore` is where you can put anything you want git to not commit.
- `package-lock.json` has all the package dependencies, and is what tells `npm install` *what* to install.
- `package.json` some information about the project.
- `readme.md` this file! :)

And now, the `/build/` folder. Everything in here is what is used to create the HTML site output. This will give you a high-level overview of the structure, and details on how to use these effectively will be below.

**index.liquid**
> Your homepage.

**tagged.liquid**
> Converts tag urls into a list of fics with that tag. EG if you put "Angst" as a tag in a header, it will automatically create `YOUR-URL.com/tagged/angst`, which will list all fics with "Angst" in the header.

**archive.liquid**
> A list of all your fics in one place, ordered by date.

**feed.njk**
> Sets up your RSS feed, which will be accessible at `YOUR-URL.com/feed.xml/`

**/_data/eleventyComputed.js** 
> Used in templates to detect series and story from the current URL.

**/_includes/**
> Contains all the templates used to build pages. 

**/assets/**
> Add images or other assets here. You can create subfolders freely.

**/novels/**
> The overarching folder for your fics. Create folders in here per fandom (or whatever other sorting you want), and then create new folders in those subfolders per story!

**/styles/main.css/**
> Basic CSS file that has the main framework of the site.

**/styles/style-#.css**
> The various pre-made themes.

## How To Use

Here is how to use the pages that are expected to be edited and created. There are two main aspects of a page, both in `.md` and `.liquid` format: the header and the body. The header is surrounded by three hyphens on top and bottom (`---`). 

The header contains both customizable and necessary information for the creation of the website. The body is where you put what actually shows up! In both formats, you can write straight HTML code too.

This will seem like a lot, but it's really just breaking everything down very finely. You can get a good grasp on how the file structure works by just looking through the folders yourself.

### index.liquid

**Adjustable Headers:**
- `title`: The title of your webpage!
- `blurb`: The subheader blurb of your webpage!
- `header-img`: The full path of the image you want to use for the header. 

Fun thing you can do is, in the `_includes` folder, make `liquid` files that are just HTML chunks. Then, you can just put `{% render '_file-name %}` and it'll put that whole code right there! Useful if you have a large chunk of HTML that's a little annoying (I used it for a stamp section), or something that you'll be repeating a lot. Typically these files start with an underscore to keep them organized.

### archive.liquid & tagged.liquid

The only things of note here are both in the `pagination` header. `size` is how many appear before creating another page (defaulted to 10), and `reverse: true` can be added to make it go from oldest-to-newest instead of the default newest-to-oldest.

### feed.njk

The only thing here you need to change is the `metadata` section, all that capslocked stuff (site URL, title, email address, etc). If you don't know what RSS is, read up about it [at rss.com](https://rss.com/blog/how-do-rss-feeds-work/). You can delete this if you don't want an RSS feed.

### /novels/ folder

This can be organized however you like, the main things are:
- Keep the main `index.liquid` in the main `/novels/` folder.
- Each fic should have its own folder, with an `index.md` and then numbered chapters within that folder.
Theoretically, you can have whatever organization of subfolders that you want.

### Story Index Page

#### Headers

**Adjustable:**
- `title`: If not included, will default to "Unnamed Story"
- `date`: Used as the created/default date. `YYYY-MM-DD` format.
- `last-updated`: The date it was last updated, if applicable.
- `categories`: Your tags for the story ("tag" is just used for other purposes in 11ty). You can do whatever you want for these, fandom, ships, character names, ratings, warnings, tropes, whatever you like! Not caps-sensitive. **Note** that these must be written in either array format, EG `categories: ["Tag 1", "Tag 2", "Etc"]`, or in header format, EG
```
categories: 
  - Tag 1
  - Tag 2
  - Etc
```
- `blurb`: This is the short summary that will show up in previews.
- `images`: The file name (including extension) of any images you want in the main image gallery.  **Note** that these must be written in array format or header format, and should have the full image path, EG: `["/assets/image-name-1.png", "https://picsum.photos/id/237/200/300"]`

**Always include:**
- `tags`: novel
- `layout`: novel

#### Other Notes

If nothing is filled out in the body, the only default info will be the "Info" section and "Gallery". Info is always there, and is the first section. Gallery is there if there are any `images` in the header, and is the last section.

Please use Heading 2 (`## Heading`) for your sections to match the automatic headers.

### Story Chapter Pages

#### Headers

**Adjustable:**
- `title`: If not included, will default to "Chapter #"
- `chapter`: Use numbers only. The chapter number it is.

**Always include, and leave as is:**
- `tags`: chapter
- `layout`: reading

### Liquid Templates

Below are info on the stuff in the liquid templates (those things in the _includes folder) that you can change to make edits without worrying about breaking things.

#### main.liquid
- `title`: The default title for pages if a title is not included. (Default: No Title)

#### novel.liquid

- `title`: This is the default title for stories without titles. (Default: Untitled Story)
- `info-header-name`: The Heading 2 that is for the dates and tags section. (Default: Info)
- `gallery-header-name`: The Heading 2 that is for the art section. (Default: Gallery)


## WIP
- **Archive Page** - Chronological display of all fics. Currently vaguely has display functionality but not much else.
- **Styling** - Basic layouts completed only.
- **Art page** - Not begun.
- **Automatic pushing to Neocities** - Not implemented.
- **Tags pages** - No styling at all...
