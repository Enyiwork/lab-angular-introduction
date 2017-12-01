import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'password-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  myPhoto: any[] = [
    {
      title: "UNKNOWN PASSWORDS",
      imageUrl: "../../assets/hacker.jpg",
    },
    {
      title: "CODING",
      imageUrl: "../../assets/monitor.jpg",
    },
    {
      title: "4O4",
      imageUrl: "../../assets/404.jpg",
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
