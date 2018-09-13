# Busboard Part 7 - User input

## Aims

Everything is working smoothly. All we need now is a way for the user to specify their own postcode rather than using the harcoded one.

## FormsModule

In order to bind user input to your component classes, you will need to import the `FormsModule` in your app's root module. In `app.module.ts`, add the following line:

```typescript
import { FormsModule } from '@angular/forms';
```

Then add `FormsModule` to the list of `imports` in the module definition.

## Binding input to your component

Supposing you have a public member on your component called `postcode`, you can bind user input to this member as follows:

```html
<input type="text" [(ngModel)]="postcode">
```

This binds the input field to the member called `postcode` and any changes that the user makes to the field will then be reflected in the value of the member.

Update your stops component so that the user can specify a postcode and your app will fetch the list of stops near that postcode.

It should look something like this:

![Part 7](assets/part7.png)

## Wrapping up

That's it! Your app is (hopefully) both usable and useful, now, and you've learned a lot about using Angular. As always, commit your code and push it to GitHub. The model solution for this part is [here](https://github.com/scl-softwire/angular-training/tree/part7/busboard)

## Further work

If you've finished early, you can always improve your app. Here are some ideas:

  - Prettify the app. At the moment, it probably looks fairly plain. Add some CSS to the `*.component.css` files to spice up the look of your Busboard.

  - Error handling. I bet there are a few places where error handling could be improved. What if no stops are returned for a given postcode. What if there are no arrivals? What if the postcode doesn't exist? What if your internet connection drops?

  - Usability. Is there anything about your app that annoys you as you use it? Can you fix that?

An example which makes the app look a bit nicer and fixes a few common error cases can be found [here](https://github.com/scl-softwire/angular-training/tree/prettify/busboard).