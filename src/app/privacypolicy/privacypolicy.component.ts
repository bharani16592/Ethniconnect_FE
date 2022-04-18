import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css'],
})
export class PrivacypolicyComponent implements OnInit {
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }
  constructor() {}

  ngOnInit(): void {}
}