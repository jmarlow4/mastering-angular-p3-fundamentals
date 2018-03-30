# Part 3 - Angular Fundamentals
## 0 - Architecture Overview

###################################################
## QUICK NOTE ON HOW WE'RE TEACHING THE COURSE!!!##
###################################################
Repetition from simple to more complex, from overview into deep discourse

Angular is put together in a very opinionated, yet modular way.

* Modules package code into blocks of related functionality, best thought of as “features”
    * There must always be a “root” module, typically called “AppModule”
    * This root module is “bootstrapped” and launched as the app’s entry point
    * Modules can contain other modules
    * Can be “lazy loaded”

    ![](library-module.png)


* Components define views, which are screen elements
    * There must always be a “root” component, typically called “AppComponent”
    * Metadata defines what the component's selector is, it's template, and it's style sheets
    * Uses a "Component Class" - uses TypeScript, defines interactivity
    * Uses a "Template" - HTML, Styling
    * Data binding lets you pass data between component class and template
    * Arranged hierarchically (component within a component)

    ![](overview2.png)


* Services provide specific functionality not directly related to views Service Class
    * Can be injected into components when marked with the `@Injectable` decorator
    * Makes the code more modular, reusable, and efficient
* Routing provides a way to navigate along the view hierarchy
    * Acts like normal browser navigation (URL bar, links, forward and back buttons)
    * Maps URL-like paths to views instead of pages
    * Intercepts browser actions (such as clicking a link) and shows or hides different view hierarchies
    * You can define navigation rules with a special service called a “route guard”, such as preventing a route from being accessed if a user isn’t authenticated

Generate two modules, "core" and "auth" with Angular-CLI. Remember to add them to the AppModule
```
  $ ng g m core
  $ ng g m auth
```
