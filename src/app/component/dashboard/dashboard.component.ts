import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonDetails } from 'src/app/service/person-details';
import { AddbookService } from 'src/app/addbook.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any;
  personList:PersonDetails[]=[];
  constructor(private addService:AddbookService,private router:Router) { }

  ngOnInit(): void {
    this.getPersonDetails();
  }
  gotoAddEmployeePage() {
    this.router.navigateByUrl('/addPerson');
  }
  getPersonDetails() {
      this.addService.getPersonDetails().subscribe( data => {
      this.user=data;
      this.personList=this.user.personList;
      console.log(this.personList);
    });
 
  }
}
