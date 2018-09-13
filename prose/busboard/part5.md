# Busboard Part 5 - HTTP and real data

## Before you start

We'll be using the TfL API in this part of the exercise. To use their API, you need to sign up for an account via [their website](https://api-portal.tfl.gov.uk/login). Most of the options are unimportant, but if you're concerned, you're building a web application, on the browser platform, targeting bus users with an estimated 2 users (you and your trainer!). You only need access to the "Core datasets".

Once you've signed up, go to the [Tfl API Portal](https://api-portal.tfl.gov.uk/) and view your "API Credentials". You will need to make a note of your ID and Key.

## Aims

Now that we've got the skeleton of our app together, we'll look at replacing all of the fake data we have with real data from the Tfl API.

By the end of this part, we'll be able to get a list of stops nearby a given location. We won't handle the arrival data just yet - that comes next.

Here's what you're aiming for:

![Part 5](assets/part5.png)

It doesn't look much different from before, but these stops are now being extracted from real data that you'll get from TfL!

## Making an API call

In order to use Angular's HTTP client in your app, you need to import the module containing it. Add the following line to your `app.module.ts`:

```typescript
import { HttpClientModule } from '@angular/common/http';
```

Then add the `HttpClientModule` to the list of `imports` in your app module. This makes the `HttpClient` available for injection into your components and services.

You should now modify your stops service so that instead of providing fake data, it pulls data from the TfL API. Here's the information you'll need:

  - The API endpoint you will need is documented [here](https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/StopPoint/StopPoint_GetByGeoPoint). There is a bug in the documentation at the moment - `location.lat` and `location.lon` should just be `lat` and `lon`.

  - The `stopTypes` parameter should be `NaptanPublicBusCoachTram` and the `modes` parameter should be `bus`.

  - Make a few example requests from your browser to get an idea of what the response data looks like.

  - Each API request you make should include two extra parameters: `app_id` and `app_key`, which you made a note of earlier.

  - To make an HTTP get request using Angular's HTTP client, you should use the following syntax:
   
    ```typescript
    http.get<T>(requestUrl, {params: requestParameters});
    ```

    where `T` is an interface (defined by you!) that the HTTP response will conform to.

  - The result of `http.get` is not a straight value - it is an `Observable`. You will need to modify your method signature accordingly (VS Code will show you concrete types on hover).

      - An `Observable` represents an asynschronous computation whose result may or may not be available yet. In any component that uses your stops service, in order to use the result of the `Observable` after the request completes, the following pattern can be used:

          ```typescript
          observable.subscribe(result => doSomething(result));
          ```

          When the HTTP request completes, `doSomething` will be invoked with the response body.

  - The API request needs to include a latitude and longitude and a radius - it's fine to hardcode these for now.

Try and piece all of this together to get some working code that fetches a list of stops from the TfL API and displays it as before. Don't worry about making the arrivals work yet - we'll be doing that in the next part!

Don't be afraid to break out some of this functionality into separate services that you can create using `ng generate service`. If you keep everything inside the stops service it might get a bit hard to understand!

If you get stuck here, remember to ask your trainer for help. This is by far the most complicated thing you've done so far.

## Making the app more useful

We need to include a latitude and longitude with the API request. This isn't very useful in the long run, because not very many people know their latitude and longitude. Almost everyone knows their postcode, though!

http://postcodes.io/ provides an API that will allow you to get the latitude and longitude corresponding to a UK postcode. For example, [this API call](http://api.postcodes.io/postcodes/se20ul) gives (among other things) the latitude and longitude of the postcode SE2 0UL.

Modify your app so that instead of using a latitude and longitude, it uses a postcode, makes an API call to postcodes.io to determine the latitude and longitude, and then gets the stops near the resulting lat/lon.

To do this, you will probably need to use the `mergeMap` operator (import from `rxjs/operators`). It allows you to take an `Observable` (in this case, the request that gets to lat/lon) and use the result to create another `Observable` (the request that gets the stops) and returns a single `Observable` that combines those steps into one. For example:

```typescript
getLatLon.pipe(mergeMap(latLonResult => getStops(latLonResult)));
```

## Wrapping up

By the end, you should have something that looks just like what you had before, but it's extracting real stops from the TfL API. Commit your code and push it to GitHub. The model solution lives [here](https://github.com/scl-softwire/angular-training/tree/part5/busboard).