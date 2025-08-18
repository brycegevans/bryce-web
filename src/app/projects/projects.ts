import { CommonModule } from '@angular/common';
import { Component, NgModuleRef } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal site built with Angular to showcase my skills and projects.',
    link: 'https://github.com/brycegevans/bryce-web',
    tag: 'Angular'
  },
  {
    title: 'Hubspot Python API',
    description: 'A hubspot api to connect to the CRM Hubspot',
    link: 'https://github.com/brycegevans/hubspot-py-flask',
    tag: 'Python Flask'
  },
  {
    title: 'Spring Boot API Connecting to Neon DB',
    description: 'A Spring Boot application with authentication features connecting to cloud Neon DB',
    link: 'https://github.com/brycegevans/waveshift-backend',
    tag: 'Spring Boot'
  }
];

}
