import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-saw',
  templateUrl: './saw.component.html',
  styleUrls: ['./saw.component.css']
})
export class SawComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.fetchPDFs();
  }

  private fetchPDFs() {
    this.http.get('hyshop-75058.appspot.com/machineShop/saw/393298_S20A_2008.pdf')
    .subscribe(PDFs => {
      console.log(PDFs);
    })
  }

}
