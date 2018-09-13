# Busboard Part 3 - Services

## Aims

In this part, we won't add any extra functionality to our application, but we will refactor our code slightly. At the moment, the stops are hardcoded into one of your components - this isn't a good idea in the long term!

Eventually we'll be getting our data over HTTP from an API - and the component itself shouldn't care about the details! We'll pull out the code that defines the stops into its own service class that your component depends on. Then you can change the details of how the stops are produced later on without your component having to worry.

## Creating a service

As you might expect, the Angular CLI contains the handy command `ng generate service <service-name>`. Generate a well-named service that you'll use to fetch the stops.

The generated service class contains some metadata that allows Angular to provide an instance of it to any other service or component that requires it via dependency injection. Your stops component will require an instance of the stops service, and Angular can provide it by modifying the constructor of your stops component to be something like this:

```typescript
constructor(private stopsService: StopsService)
```

Angular looks at the type of the constructor parameter, realises that it knows about a service of that type, and automatically injects it in for you.

## Using the service

You should know write a method on the new service that provides a list of stops, and refactor your stops component to get its stops from the new service instead of using its own hardcoded list.

Check that your application still works after making this change.

## Wrapping up

Again, remember to commit your code and push it to GitHub. This part's model solution can be found [here](https://github.com/scl-softwire/angular-training/tree/part3/busboard).