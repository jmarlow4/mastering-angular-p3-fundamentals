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

Components are just TypeScript classes, so they have properties, constructors, methods, etc.
```
// --- app.component.ts ---
export class AppComponent {
  
  // property
  title = 'ma'

}
```

In the template, we use "interpolation" to do "property binding"
```
// --- app.component.html ---
<div>{{ title }}</div>
```

It's best practice to keep your components as "dumb" as possible. That means pushing all of your business logic is accessed and called BY the component but doesn't exist in the component itself.
