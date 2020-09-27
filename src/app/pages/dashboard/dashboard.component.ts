import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctorid: number = 1;
  date = new Date();
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goTotimeslots(){
    console.log('i came');
    this.route.navigateByUrl(`/time-slots`);
  }

  onSelected(event: any) {
    console.log("In app component: "+event);
    this.doctorid = event._id;
   /* let newSelection = { 
      companyName: this.companyName,
      description: "additional data"
    };*/
   // this.companyForm.get('company').setValue(this.companyName);
}

ondateChanged(event){
  console.log(event);
  
  this.date = event;
}

}
