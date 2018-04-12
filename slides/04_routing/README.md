# Part 3 - Angular Fundamentals
## 4 - Routing

The Router provides a way for us to navigate from one page to another. In Angular, pages are just component views that are assigned to specific routes.

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
