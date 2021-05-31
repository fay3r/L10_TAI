import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'blog-item-image',
  templateUrl: './blog-item-image.component.html',
  styleUrls: ['./blog-item-image.component.css']
})
export class BlogItemImageComponent implements OnInit {

  @Input() image?: string;
  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
  }


  transform(url:any) {
    console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(url))
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
