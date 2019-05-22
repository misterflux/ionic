import { Component, OnInit } from '@angular/core';
import {CatActivityService} from '../services/cat-activity.service';
//import {Subscription} from 'rxjs/Subscription';
import { Subscription } from 'rxjs';
import {Router , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  n_id : string;

  constructor(private catActSV : CatActivityService ,private route:Router,private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let n_id = this.n_id = (this.router.snapshot.paramMap.get('n_id'));
    this.subscription=this.catActSV.get(n_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let n_id = this.n_id = (this.router.snapshot.paramMap.get('n_id'));
    let n_name = form.n_name;
    let n_last = form.n_last;
    
    this.catActSV.edit(n_id , n_name, n_last).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(n_id  + n_name + n_last);
       
  }

  ngOnInit() {
  }

}