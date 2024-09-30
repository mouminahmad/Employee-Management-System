import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  currentDateTime: string = '';

  ngOnInit() {
    this.updateCurrentDateTime();
    // Update time every second
    setInterval(() => {
      this.updateCurrentDateTime();
    }, 1000);
  }

  // Method to get the current date and time
  updateCurrentDateTime() {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Update to local date and time string
  }
}
