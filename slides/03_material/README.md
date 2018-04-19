# Part 3 - Angular Fundamentals
## 3 - Material

Angular Material is a component library that based on popular "Material" visual language developed by Google.

To set up, we have to install it
```
npm install --save @angular/material @angular/cdk
```

Many of Angular Material's components use animations. So now we have to import Angular's animation module.
```
// --- app.module.ts ---
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    BrowserAnimationsModule
  ]
})
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
  imports: [
    CommonModule,
    ...matModules
  ],
  declarations: [
    ...matModules
  ]
})
export class AppMaterialModule { }
```

Since we'll be using material icons, we're going to have to load the icon font into your application. There are many ways to do this, but the simplest is to add this line to the `<head>` element of your `index.html` file:
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
