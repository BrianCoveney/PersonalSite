
# My Personal Website

I previously built websites with *Grunt* and *Gulp*. This time I am trying my hand at *npm scripts*. I followed the steps in [this CSS tricks post](https://css-tricks.com/why-npm-scripts/)  to get things set up. 

The *scripts* and *devDependencies*  are located in the *package.json* file. Clone the project into a directory you create. Then, in the terminal type npm-install. This will install the package and dependencies into a *nodes_modules* directory. 

This build automates compiling SCSS to CSS, Autoprefix CSS with PostCSS for vendor prefixes, compresses CSS and minifies images. It also Serves and Auto Inject Changes with BrowserSync, which refreshes the browser after a change to the code, similar to running gulp watch.

Run the following in your terminal:  
```npm run watch:all```

Pushing changes to repo:  
```git push -u origin gh-pages```
