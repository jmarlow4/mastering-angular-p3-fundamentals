# Part 3 - Angular Fundamentals
## 3 - Material

Angular Material is a component library that based on popular "Material" visual language developed by Google.

To set up, we have to install it
```
npm install --save @angular/material @angular/cdk material-design-icons reset-css
```

Create a new "MaterialModule" in which we both import AND export the component modules we're going to be using.
```
$ ng g m app-material -m app
```

```
// --- app-material.module.ts ---
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material'

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
]
@NgModule({
  imports: matModules,
  exports: matModules
})
export class AppMaterialModule { }
```

Many of Angular Material's components use animations. So now we have to import Angular's animation module. Also, make sure you have our newly created "AppMaterialModule" imported as well.
```
// --- app.module.ts ---
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppMaterialModule } from './app-material/app-material.module'

@NgModule({
  imports: [
    ...,
    AppMaterialModule,
    BrowserAnimationsModule
  ]
})
```

We're going to need to import all of our styling for material. There are many ways to do this, but the best way I've found is to download them with npm (like we've done above) and include it in your `src/styles.scss` file:
```
// --- styles.scss ---
@import '../node_modules/reset-css/_reset.scss';
@import '../node_modules/material-design-icons/iconfont/material-icons.css';
@import '../node_modules/@angular/material/prebuilt-themes/indigo-pink.css';
```

To test it all out let's add the following angular-material code to the top of our `src/app/app.component.html` file:
```
// --- app.component.html ---
<mat-toolbar color="primary" class="mat-elevation-z5">
  <button mat-mini-fab color="accent" [matMenuTriggerFor]="menu">
    <mat-icon>menu</mat-icon>
  </button>
  <mat-menu #menu="matMenu">
    <button mat-menu-item>Item 1</button>
    <button mat-menu-item>Item 2</button>
  </mat-menu>
</mat-toolbar>
```

Now run `ng serve` and check out your cool, new Material tool bar!

Start the code up
