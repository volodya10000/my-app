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
  @ViewChild("titleinput", { static: true }) inputRef!: ElementRef;     //змінною inputRef! значення по дефолту 0(!)  доступились до елементу ХТМл
  @ViewChildren('inputResaul') inputResaul!: QueryList<ElementRef>;     //TEST - Task
  title: string = ""
  text: string = ""
    
  ngOnInit() {
    this.inputRef = new ElementRef(null); /// Можна ініціалузувати тут щоб не було помилок або варіант зверху.
  }
 
                                                    //TEST - Task
  ngParent() {
  this.inputResaul.forEach((inputResaul, index) => {
    const parentElement = inputResaul.nativeElement.querySelector('.password');
                                                     ////Нажаль не вирішив задачу на 100% , не знаю як привязати певні хтмл елементи відносно дочірніх класів ...
  });                                                               //Буду радий якщо підкажете рішення , дуже цікаво як вирішити дану задачу . Thanks
}
  changPass() {}
  
  changePassResultClass(text: string, id:number): any {
  const lengthRegex = /[0-9a-zA-Z!@#$%^&*]{8,}/;             // створив можливі Патерни
  const letterRegex = /[a-zA-Z]/;
  const numberRegex = /\d/;
  const symbolRegex = /[!@#$%^&*()_+[\]{};:'",<.>?~\\/-]/;

  const haslength = lengthRegex.test(text);                   //перевірки і запис в змінну 
  const hasLetters = letterRegex.test(text);                  
  const hasNumbers = numberRegex.test(text);
  const hasSymbols = symbolRegex.test(text);
    
    if (text.length >= 8) {
      const classes = {                                       // вибір класу відносно Патерна 
        red: hasNumbers || hasSymbols || hasLetters,
        yellow: hasNumbers && hasLetters || hasSymbols && hasLetters || hasNumbers && hasSymbols,
        green: hasLetters && hasSymbols && hasNumbers,
      }
        return classes                                         //вертаємо клас
    } else  if (text.length >= 1) {                             //Виключаємо Патерн поки не буде потрібної кількості символів.
        const classes = {
        red: true,
        yellow: false,
        green: false,
        }
      return classes
    } 
    }


  
  
  
addPost() {
  if (this.text.trim() && this.title.trim()) {   //trim  - перевіряє чи не ма пропусків і тд
    const post = {
      title: this.title,
      text: this.text
    };
    this.OnAdd.emit(post)            //додаємо пост за допомогою OnAdd і його властивості emit до масиву 
    console.log("New Post", post)
    this.title = this.text = ""     //обнуляємо рядки для нових постів
  }}   

focusTitle(){
  this.inputRef.nativeElement.focus()    // nativeElement дом елемент якимми можемо викликати всі необхідні методи ..
}
}



