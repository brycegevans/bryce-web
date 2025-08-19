import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit, OnDestroy {
  roles: string[] = [
    'Software Engineer',
    'QA Tester',
    'Solutions Engineer',
    'UI/UX Designer'
  ];

  roleIndex: number = 0;
  rotatingMessage: string = this.roles[0];
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
  this.intervalId = setInterval(() => {
    this.rotatingMessage = ''; 
    setTimeout(() => {

      this.roleIndex = (this.roleIndex + 1) % this.roles.length; 
      this.rotatingMessage = this.roles[this.roleIndex];
      this.cdr.detectChanges();
    });

  }, 4000); 
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
