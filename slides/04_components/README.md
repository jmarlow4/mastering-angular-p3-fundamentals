# Part 3 - Angular Fundamentals
## 4 - Components

Components are best seen as miniature apps that do a single job. Components control views.

Components are composed of the component class, metadata, the HTML template, and some styling.

```
// --- app.component.ts ---

import { Component } from '@angular/core'

// --- Metadata ---
@Component({
  selector: 'ma-root',
  // --- Template ---
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// --- Component Class ---
export class AppComponent {
  title = 'ma'
}

```

### Metadata
A class isn't a COMPONENT class until it's marked with a `@Component` decorator and given it's proper `Metadata.` The Metadata tells Angular where to get the parts it needs to create the component and present it's view.

For example, the Metadata specifies the location of the component's HTML selector, the template, and it's styling.
```
// --- app.component.ts ---

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
``` 


### Component Class
Components are just TypeScript classes, so they have properties, constructors, methods, etc. The component class is defined right underneath the `@Component` decorator.
```
// --- app.component.ts ---

@Component({...})
export class AppComponent {
  
  // property
  title = 'ma'

}
```

### Template
In the template, we use "interpolation" to do "property binding"
```
// --- app.component.html ---

<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
```

It's best practice to keep your components as "dumb" as possible. That means pushing all of your business logic is accessed and called BY the component but doesn't exist in the component itself.

### Let's make our first component and put it in AppModule
```
$ ng g c components/nav-bar -m app
```

Let's go into the nav-bar component class and define a `navLinks` property and a `onLogout` method:
```
// --- nav-bar.component.ts ---

import { Component } from '@angular/core'

@Component({
  selector: 'ma-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navLinks = [
    { page: 'Home', linkPath: 'home' },
    { page: 'Login', linkPath: 'login' }
  ]

  onLogout() {
    console.log('logging out!')
  }
}
```

We're going to move the code we wrote last video from `app.component.html` into this newly-created `nav-bar` component, and make a few changes. Be sure to remove the default generated `<p>` element from the nav-bar html template:
```
// --- nav-bar.component.html

<mat-toolbar color="primary" class="mat-elevation-z5">

  <a mat-button *ngFor="let link of navLinks">{{ link.page }}</a>

  <div class="flex-spacer"></div>

  <button mat-button [matMenuTriggerFor]="menu">
    <mat-icon>more_vert</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item (click)="onLogout()">
      <mat-icon>subdirectory_arrow_left</mat-icon>Logout
    </button>
  </mat-menu>

</mat-toolbar>
```

Let's not forget to add a little bit of our own styling to our new nav-bar component:
```
// --- nav-bar.component.scss ---

mat-toolbar {
  height: 36px;
  .flex-spacer {
    flex: 1 1 auto;
  }
  mat-button {
    border-radius: 0;
  }
}
```
