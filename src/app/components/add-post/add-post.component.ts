import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('',[
      Validators.required ]
    ),
    imageUrl: new FormControl('',[]
    ),
    text: new FormControl('',[]
    )
  });

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    this.dataService.createOrUpdate(this.form.value).subscribe(() =>{
      this.router.navigate(['/blog']);
    })
  }

  get title(){
    return this.form.get('title');
  }
  get imageUrl(){
    return this.form.get('imageUrl');
  }
  get text(){
    return this.form.get('text');
  }
}
