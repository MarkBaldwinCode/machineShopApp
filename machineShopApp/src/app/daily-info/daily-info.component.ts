import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-info',
  templateUrl: './daily-info.component.html',
  styleUrls: ['./daily-info.component.css']
})
export class DailyInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/generalmachining']);
  }
}
