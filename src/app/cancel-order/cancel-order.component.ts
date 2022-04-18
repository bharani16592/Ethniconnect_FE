import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {

  constructor(private route:Router){}
  

 //steps check if the order day is in the future or same day
 //then find number of hour difference between them

  validate()
  {
    var currDate = new Date();

    //Store Order Date in below variable (Currently test data)
    var testDate = new Date(currDate);
    testDate.setDate(testDate.getDate()+1); //setting to one day in the future for testing

    //Testing
    if(testDate < currDate)
    {
      alert("Order Date has passed");
    }
    else
    {
      //to test, comment hourDifference math out and set as value 4 or less
      var hourDifference = Math.abs(testDate.getTime() - currDate.getTime()) / 36e5;

      if(hourDifference < 4)
      {
        alert("Order time is within 4 hours\nCannot cancel");
      }
      else
      {
        //Cancel order in database code goes here
        this.route.navigate(['OrderCancelled']);
      }
    }


  }
     

  ngOnInit(): void {
  }

}