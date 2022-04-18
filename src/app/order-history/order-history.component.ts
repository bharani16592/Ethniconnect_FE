import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from 'src/network/dataServices/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orders: any = [];
  viewOrder: any;
  selected = 0;
  hovered = 0;
  oid = 0;
  rating: {[key:number]: number} = {};
  origRating: {[key:number]: number} = {};
  @ViewChild('content', { read: TemplateRef }) content :TemplateRef<any> | undefined;
  constructor(private orderService: OrderService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.orderService.getOrdersByCustomerId()
    .subscribe(data=>{
      this.orders = data
      this.rating = this.orders.reduce((acc:any ,order: any) => {return {...acc, [Number(order.orderid)]: order.rating}}, {})
      this.origRating = this.orders.reduce((acc:any ,order: any) => {return {...acc, [Number(order.orderid)]: order.rating}}, {})

    })
  }

  showMenuModal(menu: any) {
    this.viewOrder = menu
    this.modalService.open(this.content, { centered: true, size: 'lg' });
  }

  setRating($event: any, id: number) {
    console.log({id, $event})
  }

  getRating() {
    console.log(this.rating)
    return 0;
  }

  postRating() {

    Object.entries(this.rating).forEach(([orderid, ratings])=> {
      console.log({orderid, ratings});
      if(this.rating[Number(orderid)]!=this.origRating[Number(orderid)])
      {
        this.orderService.postOrderRating({orderid, ratings})
        .subscribe()
      }
      })
  }

  cancelOrder() {
    alert('Please reach out to the chef for order cancellation')
  }

}
