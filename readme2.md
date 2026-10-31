# Fic Archive Built In 11ty

## Table of Contents
1. [About](#about)
2. [Getting Set Up](#getting-set-up)
3. [Project Layout](#project-layout)
4. [How To Use](#how-to-use)
    - [index.liquid](#indexliquid)
    - [archive.liquid & tagged.liquid](#archiveliquid--taggedliquid)
    - [feed.njk](#feednjk)
    - [/novels/ folder](#novels-folder)
    - [Story Index Page](#story-index-page)
    - [Story Chapter Pages](#story-chapter-pages)
    - [Liquid Templates](#liquid-templates)

## About

This is a free-to-use and modify 11ty for hobbyist writers. It is geared towards fanfic writers but it can be used for any writing projects. 

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

In case you've never heard of 11ty or what building a static website is - in short, there are templates for a website made with JavaScript or other languages (this project uses a lot of Liquid). You simply write whatever you want in Markdown or HTML, and then "build" the website with a terminal command, and everything is exported in a pure HTML website that can be hosted on any sort of simple website hoster like Neocities. This means you don't need to rely on Javascript on the website itself, making things load faster, and be more accessible. You could basically host this website on a toaster.

**Benefits for you, a writer:**
- Chapter lists in menus are updated automatically.
- Next/Previous buttons are added on chapters automatically.
- Decide to change the layout of your main reading page (or any others)? It updates every single one at once.
- You can change the style of your entire website by updating one style link.
- No worrying about HTML syntax when writing. Markdown is as close to the natural writing experience as possible.
- *Do* have your stories in HTML? You can just paste that in, and Markdown automatically converts it.
- You can insert images, videos, audio files, whatever you want, just like a regular webpage, without worrying about formatting hassles.
- Tag pages are automatically created, and you can choose what you find important to be tagged.
- Fandoms are automatically sorted just by having different fandom folders.
- If you know Javascript/Nunjucks/Liquid, you can create your own custom templates and filters to do whatever you want with.

 TL;DR: It keeps things very simple and focused on your *writing*. 
 
 This webpage is free to use and modify, including for monetized works. Credit is appreciated, but not necessary. 

 **Do not claim as your own, redistribute as your own product, or sell this code.** That is all.

**Basic Resources:**
- [Learn Basic HTML and HTML5](https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5) - Start here if you know nothing about HTML.
- [Markdown Guide](https://commonmark.org/help/) - The Markdown basics, in case you don't know them.
- [How the heck do I use Eleventy?](https://medium.com/@tarngerine/how-the-heck-do-i-use-eleventy-the-intro-guide-i-wish-i-had-84d9b2689031) - Start here for a basic overview of 11ty.
- [11ty Website](https://www.11ty.dev/) - For tutorials and further reading and development.
- [Advanced Markdown Guide](https://github.com/DavidWells/advanced-markdown) - In case you want to get fancy.

## Getting Set Up

First, you will need to install Node.JS if you don't have it already. We will be using it for the purposes of installing *project dependencies* (aka, 11ty and the stuff that makes it run). It will then be used whenever you *rebuild your site* (prepare your edits for publication).

**Windows:**

**Mac:**

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
   2. `npx @11ty/eleventy` - builds your site to its output folder (automatically set to `/site/`).
   3. [More on the 11ty website](https://www.11ty.dev/docs/usage/) 

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

If you don't really want anything here, I'll recommend using this code to just give you a list of all your fics, per fandom:
```
{% for fandom in collections.novels %}
  <h2 class="title">{{ fandom.title }}</h2>

  {% for fic in fandom.stories reversed %}
  <ul>
    <li><a href="{{ fic.url }}">{{ fic.data.title }}</a> - {{ fic.data.blurb }} </li>
  </ul>
  {% endfor %}
{% endfor %}
```

### archive.liquid & tagged.liquid

The only things of note here are both in the `pagination` header. `size` is how many appear before creating another page (defaulted to 10), and `reverse: true` can be added to make it go from oldest-to-newest instead of the default newest-to-oldest.

### feed.njk

The only thing here you need to change is the `metadata` section, all that capslocked stuff (site URL, title, email address, etc). If you don't know what RSS is, read up about it [at rss.com](https://rss.com/blog/how-do-rss-feeds-work/). You can delete this if you don't want an RSS feed.

### /novels/ folder

A note on how the novels collection works. Everything in here is part of the novels collection. This collection first looks at the main folder, and then the subfolder, and sorts it that way. So `/novels/` is a category, and `/novels/fandom-1/` is a sub-category. Within this there is an index that serves as the homepage of that category (`/novels/fandom-1/index.md`). You don't have to link to it if you have no use for this, and are linking all fanfic on your home page instead. 
I recommend the below code to list all stories under the fandom folder, if you do want to have an index page. It is what's on the example webpage, as well.
```
INSERT CODE
```
Each story for the fandom will be its own folder, with its own index page too. This is where all the chapters are listed, and you can put whatever information you want too. So it would be like `/novels/fandom-1/awesome-story/index.md`. Chapters are also added to this folder, numerically (`/novels/fandom-1/awesome-story/1.md`).

### Story Index Page

#### Headers

**Adjustable:**
- `title`: If not included, will default to "Unnamed Story"
- `date`: Used as the created/default date. `YYYY-MM-DD` format.
- `last-updated`: The date it was last updated, if applicable.
- `categories`: Your tags for the story ("tag" is just used for other purposes in 11ty). You can do whatever you want for these, fandom, ships, character names, ratings, warnings, tropes, whatever you like! Not caps-sensitive. **Note** that these must be written in array format: `["Tag 1", "Tag 2", "Tag 3"]`
- `blurb`: This is the short summary that will show up in previews.
- `images`: The file name (including extension) of any images you want in the main image gallery.  **Note** that these must be written in array format, and should have the full image path: `["/assets/image-name-1.png", "https://picsum.photos/id/237/200/300"]`

**Always include, and leave as is:**
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
- `story`: Have it be the exact same as the folder name it is in.

**Always include, and leave as is:**
- `tags`: chapter
- `layout`: reading

### Liquid Templates

Below are info on the stuff in the liquid templates (those things in the _includes folder) that you can change to make edits without worrying about breaking things.

#### main.liquid
- `title`: The default title for pages if a title is not included. (Default: No Title)
- `theme`: The theme you want to apply to your site. See the theme images below for reference.

#### novel.liquid

- `title`: This is the default title for stories without titles. (Default: Untitled Story)
- `info-header-name`: The Heading 2 that is for the dates and tags section. (Default: Info)
- `gallery-header-name`: The Heading 2 that is for the art section. (Default: Gallery)
