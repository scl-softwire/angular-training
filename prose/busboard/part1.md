# Busboard Part 1 - Your first component

## Aims

While the autogenerated content currently in your app looks nice, it's not got a lot to do with buses! Let's fix that. By the end of this part, your app's homepage will display a single stop and the arrivals for it. It won't be real data yet, though - that comes much later, once we have the framework laid out!

## Generating a component

The Angular CLI has a lot of ways of generating boilerplate/template code for you, to make your job easier. Right now, we'll use it to generate a new *component*.

In Angular, a *component* is a building block for your app. You can think about it as something like a custom HTML tag, where you define the inputs and the layout and how it will be displayed on the page. Each page in your app will consist of components, and some of them will in turn be made of of several components. Composing components like this helps to keep each component simple, and makes your code cleaner.

We'll create a component that displays the details of a single stop. Generate the boilerplate for this component using the command `ng generate component <component-name>`. Make sure to use a descriptive name for the component.

This will create a new directory with some autogenerated code inside. We care mostly about the `*.component.ts` and the `*.component.html` files.

Your `*.component.ts` file contains a single class with some metadata contained in the `@Component` decorator. This metadata is used by Angular to determine how to display your component. The template URL tells Angular which HTML template to use for your component, and the style URLs tell Angular which CSS files to use for styling. The other piece of metadata is the `selector`. Whenever Angular sees that selector as an HTML tag in a template, it will insert your component.

Now that you know how components work, replace the contents of the template in `app.component.html` so that Angular will render your new component on the page. Check that your changes are reflected in your browser.

## Displaying stop details

Angular has a clever mechanism for getting information out of TypeScript code and into your templates; any public member variables on your component class (the one in `*.component.ts`) will be available for use in the corresponding template. All you have to do is place the name of the variable between double curly braces: `{{foo}}`. You will have seen this working inn the previous part, when looking at the title of the application.

We don't yet have any stop details in our code. You should create a class that contains all of the data you think you will need about a stop (such a class is often called a "model" class). You can create a boilerplate class using the Angular CLI - `ng generate class <class-name>`. Don't be afraid to create other helper classes too - maybe one to hold details about a particular arrival?

Once you've defined your model class(es), create a fake stop as a member variable on your new component, and write some HTML in the template that will display its details. You're aiming for something like this:

![Part 1](assets/part1.png)

You will probably want to use the `ngFor` directive in your template. This lets you use a for-loop in your template, for example to loop over an array, and it repeats the element that it is used on, and all its children, for every iteration of the loop. For example, to create an ordered list with an item for each element of an array:

```html
<ol>
    <li *ngFor="let elem of array">{{elem}}</li>
</ol>
```

## Wrapping up

After you're done, remember to commit your code and push it to GitHub so your trainer can take a look. You can find a model solution [here](https://github.com/scl-softwire/angular-training/tree/part1/busboard/)