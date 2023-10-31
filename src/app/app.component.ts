import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';


export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent  implements OnInit {
constructor(private cdRef: ChangeDetectorRef) {}
title: string = ""
  posts: any [] = [
    { title: " Try add your own post", text: "Create topic and write in title   ", id: 0 },
    { title: " It is very fanny)", text: "welcome | -_- |", id: 1 },
  ]
  ngOnInit(): void {
    setTimeout(() => {
      console.log("Timeout")
      this.posts[0].title = "Changed"
    }, 5000);
  }

  updatePosts(post:any) {
    this.posts.push(post)
    console.log(this.posts)
    this.cdRef.detectChanges()
  }

 isVisible =true


  }


