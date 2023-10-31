import { createMayBeForwardRefExpression } from '@angular/compiler';
import { Component,ElementRef,EventEmitter,OnInit,Output, ViewChild,ViewChildren,QueryList } from '@angular/core';
import { Post } from '../app.component';
import { NgStyle } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit{
  @Output() OnAdd = new EventEmitter<any>();
  @ViewChild("titleinput", { static: true }) titleinput!: ElementRef;     //змінною inputRef! значення по дефолту 0(!)  доступились до елементу ХТМл
  
  @ViewChild('firstResault') firstResault!: ElementRef;            //Link for HTML      
  @ViewChild('secontResault') secontResault!: ElementRef;           //Link for HTML 
  @ViewChild('thirtResault') thirtResault!: ElementRef;              //Link for HTML 
  @ViewChild('congratulation') congratulation!: ElementRef; 
  title: string = ""
  text: string = ""
    
  ngOnInit() {
  }
 
                                                                            //TEST - Task 
  changPass() {}
  
  changePassResultClass(text: string, id:number): any {
  const lengthRegex = /[0-9a-zA-Z!@#$%^&*]{8,}/;                          // add Patern
  const letterRegex = /[a-zA-Z]/;
  const numberRegex = /\d/;
  const symbolRegex = /[!@#$%^&*()_+[\]{};:'",<.>?~\\/-]/;
  const ukrainianRegex = /[\u0410-\u044F\u0451\u0406\u0456\u0404\u0454\u0407\u0457]/;

  const hasUkrainians = ukrainianRegex.test(text);                            
  const hasLetters = letterRegex.test(text);                               //We check for possible patterns
  const hasNumbers = numberRegex.test(text);
  const hasSymbols = symbolRegex.test(text);
    
    if (text.length >= 8) {
      const classes = {                                 
        red: hasNumbers || hasSymbols || hasLetters ,
        yellow: hasNumbers && hasLetters || hasSymbols && hasLetters || hasNumbers && hasSymbols,
        green: hasLetters && hasSymbols && hasNumbers,
      }
      if(classes.red) {
        this.firstResault.nativeElement.classList.add('red');              //add or remove are needed class 
        this.firstResault.nativeElement.classList.remove('yellow');
        this.thirtResault.nativeElement.classList.remove('green');
        this.secontResault.nativeElement.classList.remove('green');
        this.firstResault.nativeElement.classList.remove('green');
        this.secontResault.nativeElement.classList.remove('yellow');
         this.congratulation.nativeElement.classList.remove('infoVisible');
      } if (classes.yellow) {
        this.congratulation.nativeElement.textContent = "It's almost ready!";
        this.congratulation.nativeElement.classList.add('infoVisible');
        this.secontResault.nativeElement.classList.remove('red');
        this.secontResault.nativeElement.classList.add('yellow');
        this.firstResault.nativeElement.classList.add('yellow');
        this.thirtResault.nativeElement.classList.remove('green');
       
      } if (classes.green) {
        this.secontResault.nativeElement.classList.add('green');
        this.firstResault.nativeElement.classList.add('green');
        this.thirtResault.nativeElement.classList.add('green');
        this.congratulation.nativeElement.textContent = 'Our congratulation, you did it!';
      } else if (hasUkrainians) {
          this.congratulation.nativeElement.classList.add('infoVisible');
          this.congratulation.nativeElement.textContent = 'Plese chose correct language';
      }

      
    } else  if (text.length >= 1) {                             
        const classes = {
        red: true,
        yellow: false,
        green: false,
        }
      this.congratulation.nativeElement.textContent = '';
      this.congratulation.nativeElement.classList.remove('infoVisible');
      return classes ;
    } 
    }

  
  
addPost() {
  if (this.text.trim() && this.title.trim()) {   //trim  - checks the pass
    const post = {
      title: this.title,
      text: this.text
    };
    this.OnAdd.emit(post)            
    console.log("New Post", post)
    this.title = this.text = ""    
  }}   

focusTitle(){
  this.titleinput.nativeElement.focus()     // nativeElement DOM ELEMENT  with which we can call all the necessary methods
}
}



