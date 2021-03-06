# Part 3 - Angular Fundamentals
## 2 - Modules

NgModules are "decorated" classes that help us organize our code as closely related sets of functionality

```
// --- app.module.ts

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

Let's create a new module, "auth." And don't forget to add it as an import to your root module, AppModule.

In fact, adding "-m app" to your "generate module" command makes sure to add the module to the list of imports in your "AppModule"

```
$ ng g m auth -m app
```
