import { Component, OnInit } from '@angular/core';
import { CallapiService} from '../callapi.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
export const API = "http://api.shenjian.io/?appid=1498f414e1d727e07af7462caf475502&scanUrl=";
@Component({
  selector: 'app-api-bar',
  templateUrl: './api-bar.component.html',
  styleUrls: ['./api-bar.component.css']
})
export class ApiBarComponent implements OnInit {

  url = '';

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message)
  }


  constructor(private http:HttpClient) {

  }

  ngOnInit() {
  }

  callApi(event:any){
    this.url = event.clipboardData.getData(`text`);
    const address = API.concat(encodeURIComponent(this.url));
    console.log(address)
    this.http.get(address).subscribe((data)=>{console.log(data)});
    //console.log(address)

  }




}
