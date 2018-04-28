# Part 3 - Angular Fundamentals
## 6 - Forms

Forms can be created in 3 or 4 different ways in Angular. For this video, we're going to go over the simplest of these methods, basic user input.

Let's start by generating a login component in the auth module
```
$ ng g c auth/components/login-form -m auth
```

For this to work, we're going to need to import the `FormsModule` into the module in which the component using the form is declared, in this case, `AuthModule`
```
// --- auth.module.ts ---
 imports: [
   ...
    FormsModule
  ],
```
