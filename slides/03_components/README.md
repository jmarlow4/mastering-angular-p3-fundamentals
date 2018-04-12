# Part 3 - Angular Fundamentals
## 3 - Components

Components are best seen as miniature apps that do a single job. Components control views.

Components are composed of the component class, metadata, the HTML template, and some styling.

```
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
<div>{{ title }}</div>
```

It's best practice to keep your components as "dumb" as possible. That means pushing all of your business logic is accessed and called BY the component but doesn't exist in the component itself.

### Let's make our first component and put it in our newly-created Auth module
```
$ ng g c auth/components/login -m auth
```
