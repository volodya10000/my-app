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
    { title: " Хочу вивчити ангуляр компоненти", text: "Я ще досі хочу вивчити ангуляр компоненти ", id: 0 },
    { title: " Наступний блок ", text: "Буде про дерективи про пайпи", id: 1 },
  ]
  
  
  updatePosts(post:any) {
    this.posts.push(post)
    console.log(this.posts)
    this.cdRef.detectChanges()
  }

  
  }


