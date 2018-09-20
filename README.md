# My Personal Website

I previously built websites with *Grunt* and *Gulp*. This time I am trying my hand at *npm scripts*. I followed the steps in [this CSS tricks post]  (https://css-tricks.com/why-npm-scripts/)  to get things set up. 

The *scripts* and *devDependencies*  are located in the *package.json* file. Clone the project into a directory you create. Then, in the terminal type npm-install. This will install the package and dependencies into a *nodes_modules* directory. 

This build automates compiling SCSS to CSS, Autoprefix CSS with PostCSS for vendor prefixes, compresses CSS and minifies images. It also Serves and Auto Inject Changes with BrowserSync, which refreshes the browser after a change to the code, similar to running gulp watch.

I'm using Linux Mint, so in order to be able to test the website on the LAN, I need to set up a UFW rule -- sudo ufw allow www

Then on iOS device via Safari -- pc-name.local/proj-name

And on android -- pc-ipaddress/proj-name

