import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {

  constructor(private router: Router) { }

  compressorFundamentals(){
    this.router.navigate(['/engineering/compressor-fundamentals-index']);
  }

  ngOnInit(): void {
  }

}
