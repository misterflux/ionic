import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'  //อิงมาจากrootหน้าแรก
})
export class CatActivityService {
  apiUrl : string ="http://localhost/mhee/process/crud_cateactivity.php?cmd=select"; //Url ที่จะคอลไป

  constructor(public http: HttpClient) {  //ถูกทำงานก่อนอันดับแรกเสมอ
   

   } 

   
   getCatAtivity(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(n_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'n_id' : n_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  
    insert( n_name: string, n_last: any){
      const header = { 'Content-Type': 'application/json' };
      let data = {
        'cmd' : 'insert',
        'his_name': n_name,
        'his_pirce': n_last
        
      }
      return this.http.post(this.apiUrl, data, { headers: header });
    }

  del( n_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'n_id' : n_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( n_id: any , n_name: string, n_last:any	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'n_id' : n_id ,
      'n_name': n_name,
      'n_last': n_last,
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
