import { Component, OnInit } from '@angular/core';
import { CallapiService} from '../callapi.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../tools/Product';
export const API = "https://singtostore.com?prdurl=";

interface Prd {
  loaded: boolean;
  data:Product;
}


@Component({
  selector: 'app-api-bar',
  templateUrl: './api-bar.component.html',
  styleUrls: ['./api-bar.component.css']
})
export class ApiBarComponent implements OnInit {

  url = '';
  showSpinner:boolean = false;
  //prdData:Observable<Prd>;
  prdData:Prd;

  constructor(private http:HttpClient) {

  }

  ngOnInit() {
  }

  callApi(event:any){
    this.showSpinner = true;
    this.url = event.clipboardData.getData(`text`);
    const address = API.concat(this.url);
    this.http.get<Prd>(address).subscribe((res)=>{this.showSpinner=false,
    this.url = '',
    this.prdData = res,
    console.log(this.prdData),
    console.log(res)});

  }




}
