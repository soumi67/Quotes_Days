import { Component, OnInit } from '@angular/core';
import { QuotesServiceService } from '../quotes-service.service';
@Component({
  selector: 'app-day-infos',
  templateUrl: './day-infos.component.html',
  styleUrls: ['./day-infos.component.css']
})
export class DayInfosComponent implements OnInit {
  //import image from URL

  images:any[]=[
    {url:'https://picsum.photos/1920/1080'}]

  //import quotes from API
   data:any =[
    {
      "success": "string",
      "contents": {
        "quotes": [
          {
            "author": "string",
            "quote": "string",
            "tags": [
              "string"
            ],
            "id": "string",
            "image": "string",
            "length": 0
          }
        ]
      }
    }
  ];
  constructor(private quotes:QuotesServiceService) {
    this.quotes.getData().subscribe(data=>{
      console.log(data);
      this.data = data  
     })
   }

  
  //get the Day value
   weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
   d = new Date();
   day = this.weekday[this.d.getDay()];
   

   ngOnInit(): void {
  }

}
