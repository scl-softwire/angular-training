# Busboard

## Aims

Today we will be developing a web app that displays the bus stops nearest a given postcode, and the arrival times for buses at that stop.

Your trainer will demonstrate what a completed Busboard will look like, so that you know what you're aiming for.

Depending on your past experience, some of you will get further than others - don't worry! The aim today is to get you to understand as much Angular as you can without overloading you, and you'll each have different thresholds for that. At the end of the day, all of the training notes, as well as a link to model solutions, will be emailed to each of you.

At any point during the day, if there are some instructions you don't understand, or you have a question you'd like to ask, your trainer is there to help. They'll be coming round each of you throughout the day to offer guidance anyway, but don't wait for them to come to you if you have a burning question!

## Before you start

To get going, you'll need to have completed the following setup. Let your trainer know when you're done, or ask for help if you can't complete any of the steps.

  - Arrange yourselves into pairs (and maybe a single three). You'll be developing your busboards together, so choose someone's computer to use.
      - As far as possible, have at least one person in each group with JavaScript or TypeScript experience.
  - Choose a text editor or IDE to use. [Visual Studio Code](https://code.visualstudio.com/) is an excellent choice, because its builtin support for TypeScript and Angular are superb.
  - Make sure that you have Git, Node.js and npm installed on your machine - you'll need at least version 8.12.0 of Node.
  - Open up a command prompt and navigate to somewhere where you're happy to create a new directory for this project.
  - Run the command `npm install -g @angular/cli` to install the Angular CLI
  - Run `ng new busboard` to create a new Angular project, and navigate to the root directory that was created.
  - If you don't already have one, create a GitHub account.
      - Create a new empty repository within your GitHub account. When asked if you want to initialize the project with a README, say no.
      - Follow the onscreen instructions to push your new Angular project to GitHub.
  - Email a link to your repository to your trainer.
  - Open up a second command prompt, navigate to your `busboard` directory, and run `ng serve --open` to launch your application in a browser.

## What's just happened?

The `ng new` command has created a new Angular application. There's a lot of files in your new project, but you won't need to worry about most of them - they're taken care of by the CLI.

Find the files `app.component.ts` and `app.component.html`. Can you see how these files relate to each other? How do they relate to what you see in your browser? Try changing the title of the application and see what happens to your browser window.

Once you understand what's happening in this simple case, read the rest of this page and then move on to Part 1.

## Structure of the exercise

Your trainer has split up the creation of your Busboard into distinct chunks, so that you don't get overwhelmed trying to achieve too much at once, or by lots of new concepts simultaneously. After you've completed each part, create a commit and push it to GitHub using the following commands:

```
git add -A
git commit -m "Finished Part X"
git push
```

Let your trainer know when you've finished each part, and they'll take a final look at the code you've written and offer some comments on what you've done. They'll also share a link to their own solution. Don't peek at the model solutions before you've written your own - working through the exercise yourself will help the material to stick much more effectively.