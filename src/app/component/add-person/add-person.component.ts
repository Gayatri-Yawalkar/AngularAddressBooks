import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  apiUrl: string=environment.API_URL;
  cityList:String[]=["Akola","Akot","Bhusaval","Jalna","Nashik","Pune","Mumbai","Yavatmal"];
  stateList:String[]=["Maharashtra","Goa","Karnatak","Madhya Pradesh","Uttar Pradesh","Rajastan"];
  formdata:any
  name:any;
  address:any;
  phoneNo:any;
  city:any;
  state:any;
  zipCode:any;
  constructor(private http:HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.formdata=new FormGroup( {
      name:new FormControl(),
      address:new FormControl(),
      phoneNo:new FormControl(),
      zipCode:new FormControl()
      });
    }
    changeCity(e:any) {
      this.city=e.target.value;
    }
    changeState(e:any) {
      this.state=e.target.value;
    }
    onClickSubmit(data:any) {
      this.name=data.name;
      this.address=data.address;   
      this.phoneNo=data.phoneNo;
      this.zipCode=data.zipCode;
      //console.log(this.profilePic);
      this.http.post<any>(`${this.apiUrl}/addressbookservice/create`,{name:this.name,address:this.address,phoneNo:this.phoneNo,city:this.city,state:this.state,zipCode:this.zipCode}).subscribe(data => {    
      })
      this.router.navigateByUrl('/personDetail');
    }

}
