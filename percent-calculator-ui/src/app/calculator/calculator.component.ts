import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private clipBoard: Clipboard) { }

  ngOnInit(): void {

  }

  calculatePercent() {
    this.getPercent().subscribe(data => this.percent = data);
  }

  changePercent(price: number) {
    this.price = price;
  }

  copyToClipboard() {
    this.clipBoard.copy(this.percent.toString());
  }

  percent: number = 0;
  price: number = 0;

  getPercent(): Observable<number> {
    return this.httpClient
      .get<number>('http://captainparlik.com/api/percent',
        {
          params:
            {
              buy: this.price
            }
        });
  }
}
