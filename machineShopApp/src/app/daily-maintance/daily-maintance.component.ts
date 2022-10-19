import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-maintance',
  templateUrl: './daily-maintance.component.html',
  styleUrls: ['./daily-maintance.component.css']
})
export class DailyMaintanceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['/generalmachining']);
  }
}
