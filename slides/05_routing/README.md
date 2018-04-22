# Part 3 - Angular Fundamentals
## 5 - Routing

The Router provides a way for us to navigate from one page to another. In Angular, pages are just component views that are assigned to specific routes.

First we'll create a "pages" folder in the app folder and add a "home page" component inside that folder. We're also going to make sure that "home" page component is added to AppModule. All this with one little command!
```
$ ng g c pages/home-page -m app
```

Let's use that component as our "home" route in AppModule. We should create a "redirectTo" in case someone enters an empty route. For now, we're going to have this redirect to 'login'

"pathMatch: full" means to make sure the only trigger the redirect if the full url path is, in this case, '/', that is to say, the root path of the website.
```
// --- app.module.ts ---

import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    ...,
    RouterModule.forRoot([
        { path: 'home', component: HomePageComponent },
        { path: '', redirectTo: 'home', pathMatch: 'full'}
      ]),
    ...
  ],
```

Generate an "auth page" component and assign it the 'login' path.
```
$ ng g c auth/pages/auth-page -m auth
```

Let's create a router in the Auth module (auth.module.ts) and put it in that module's imports.
```
// --- auth.module.ts ---

@NgModule({
  imports: [
    ...,
    RouterModule.forChild([
        { path: 'login', component: AuthPageComponent }
      ]),
    ...
  ],
```

This "Auth" module is imported into the main "App" module, and so it's a "child" of the "App" module. This means that this route is added to the routes that exist in your main module. In order you make this work, you're going to have to make sure AuthModule is listed in your AppModule's imports metadata property.
```
// --- app.module.ts ---

@NgModule({
  ...
  imports: [
    BrowserModule,
    AuthModule
  ],
  ...
```

We need to create a place for your pages to "route into." This is done with the `<router-outlet>` element. Add it undernead your navbar in your root component's template
```
// --- app.component.html ---

<ma-nav-bar></ma-nav-bar>
<router-outlet></router-outlet>
```

The last thing we need to make this work is to return to our `nav-bar` component template. We're going to change line 2 from a single line `*ngFor` statement into a multi-line statement, which uses it's navLinks property more fully:
```
// --- nav-bar.component.html ---

<mat-toolbar color="primary" class="mat-elevation-z5">
  <a mat-button
     *ngFor="let link of navLinks"
     [routerLink]="link.linkPath">{{ link.page }}</a>
  <div class="flex-spacer"></div>
  ...
```

Save your work and observe the page routes switch as you use the nav-bar's links!
