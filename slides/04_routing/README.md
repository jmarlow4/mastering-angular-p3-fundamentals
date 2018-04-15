# Part 3 - Angular Fundamentals
## 4 - Routing

The Router provides a way for us to navigate from one page to another. In Angular, pages are just component views that are assigned to specific routes.

First we'll create a "pages" folder in the "core" module and add a "home" page component inside that folder


route in our main "App" module.
```
// --- App.module.ts ---
@NgModule({
  imports: [
    ...,
    RouterModule.forRoot([
        { path: '', component: HomePageComponent }
      ]),
    ...
  ],
```


Let's create a router in the Auth module (auth.module.ts) and put it in that module's imports
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
