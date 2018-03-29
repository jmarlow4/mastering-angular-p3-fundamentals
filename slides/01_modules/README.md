# Part 3 - Angular Fundamentals
## 1 - Modules

NgModules are "decorated" classes that help us organize our code as closely related sets of functionality

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({

  /* Imported modules go here */
  imports:      [ BrowserModule ],

  /* Globally available services go here */
  providers:    [ LogService ],

  /* Components, directives, pipes go here */
  declarations: [ AppComponent, HomeComponent ],

  /* Exported members of this module go here, not required */ 
  exports:      [ HomeComponent ],

  /* If this is the root module, the entry component goes here */
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

You'll often define and use many modules in your app, each containing components and/or services that are "members" of those modules.

![](compilation-context.png)


A component and its template together define a view. Views are arranged along "view hierarchies." It's this hierarchical structure of views that enables angular to detect and respond to user interactions and changes in data.

![](view-hierarchy.png)

Let's create two modules, "core" and "auth." And don't forget to add them as imports to your root module, AppModule.
```
$ ng g m core

$ ng g m auth
```
