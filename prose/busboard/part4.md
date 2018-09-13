# Busboard Part 4 - Routing

## Aims

At the moment, everything in our app happens on a single page. In this part, we'll make the list of stops and the stop details appear on separate pages, with different URLs.

In the end, the two pages will look something like this:

![Part 4 stops](assets/part4stops.png)

![Part 4 arrivals](assets/part4arrivals.png)

## Setting up the router

Angular has a builtin module that deals with routing, but it isn't included in your application by default. It's a bit fiddly to set up, but it's the same every time you do it, so once you've done it once you'll have mastered it. Here are the steps you need to follow to set up the router:

1. Run the command `ng generate module app-routing --flat --module=app`. This generates a routing module, and imports it into your application's root module.

1. Add the line `import { RouterModule, Routes } from '@angular/router'` to the top of your new module.

1. Define the routes: something like the following, but of course using your own names for the components:

    ```typescript
    const routes: Routes = [
        { path: '', redirectTo: '/stops', pathMatch: 'full' },
        { path: 'stops', component: StopsComponent },
        { path: 'stop/:id', component: StopDetailComponent }
    ];
    ```

1. Remove any reference to providers or declarations from your module definition, and add the following metadata to the `NgModule` decorator:

    ```typescript
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    ```

You should be all set for routing now! Visit http://localhost:4200 in your browser and check that you're redirected to `/stops`.

If you look closely at the routes you've defined, you'll see that there's a colon before the `id` segment of the `/stop` URL - this means that `id` is the name of a parameter that is used as a placeholder for the actual value that is used there. We'll see how to use that later.

## Add links to your stops component

Since we're going to have a separate page for the arrival details, remove the component that displays them from the template of your stops component.

We're also going to need to change the behaviour when a user clicks on a certain stop. Rather than just marking it as selected, we now need to link them to the page that contains arrival details for that stop.

You can create an Angular router link using HTML like the following:

```html
<a routerLink="/stop/{{stop.id}}">Clickable link</a>
```

If your stop model didn't contain an ID before, you should modify it to include one now.

## Fix your arrivals component

If you follow one of the links, your arrivals component probably doesn't work anymore. That's because previously, it was getting the stop information passed through an `Input` binding, whereas now it is being routed to.

You can extract the stop ID from the route by injecting an `ActivatedRoute` (import from `@angular/router`) into the constructor of your component. You can then get hold of the ID from the `ngOnInit` method via:

```typescript
activatedRoute.snapshot.paramMap.get('id')
```

`ngOnInit` is a special Angular method that runs just after a component is constructed. It is the correct place to do any initialisation that your component requires - it is bad practice in Angular to use the constructor for anything other than simply setting some member variables to simple values.

Once you have the ID from the URL, you'll need to actually get hold of the stop's arrival details. Create a method in your stops service that gets the details for a single stop given its ID, and then inject this service into your component and use it to get the arrival data.

## Wrapping up

Everything should now be working as before, but with routing in place! Once you've finished this part, remember to commit your code and push it to GitHub. You can also take a look at the [model solution](https://github.com/scl-softwire/angular-training/tree/part4/busboard).