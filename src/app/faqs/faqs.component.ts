import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FAQsComponent implements OnInit {
  isPart1= true;

  showText() {
    this.isPart1 = !this.isPart1;
  }
  
  isPart2 = true;

  showT() {
    this.isPart2 = !this.isPart2;
  }
  constructor() {}

  ngOnInit(): void {}
}
