import { Component, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Header } from "./header/header";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { filter } from 'rxjs';
import { About } from "./about/about";
import { Timeline } from './timeline/timeline';

@Component({
  selector: 'app-root',
  imports: [Contact, Projects, Home, Header, About, Timeline],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bryce-web');
    constructor(private router: Router){{
     this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          // Try to scroll to the element with the matching ID
          const element = document.getElementById(tree.fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          // Default scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
  }
}
}
