import { ChangeDetectorRef, Component, Input  } from '@angular/core';


export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
constructor(private cdRef: ChangeDetectorRef) {}
title: string = ""
  posts: any [] = [
    { title: " Try add your own post", text: "Create topic and write in title   ", id: 0 },
    { title: " It is very fanny)", text: "welcome | -_- |", id: 1 },
  ]
  

  updatePosts(post:any) {
    this.posts.push(post)
    console.log(this.posts)
    this.cdRef.detectChanges()
  }

  
  }


