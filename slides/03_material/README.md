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
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material'

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
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

Since we'll be using material icons, we're going to have to load the icon font into your application. There are many ways to do this, but the simplest is to add this line to the `<head>` element of your `index.html` file:
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
