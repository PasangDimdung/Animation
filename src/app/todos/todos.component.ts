import { bounceOutAnimation, fadeInAnimation } from './../animation';
import { Component } from '@angular/core';
import {  slide } from '../animation';
import { trigger, transition, animate, style, state, keyframes, animation, useAnimation, query, animateChild, group, stagger } from '@angular/animations';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations:[
    trigger('todosAnimation',[
      transition('void=>*',[
        group([
            query('h1',[
              style({ transform: 'translateY(-15px) translateX(15px)' }),
              animate(800)
            ]),
            query('@todoAnimation', [
              stagger(250, animateChild())
          ])
        ])
      ])
    ]),

    trigger('todoAnimation',[
        transition('void=>*', [
          useAnimation(fadeInAnimation, { params:{duration: '900ms'} })
        ]),
        transition('*=>void', [
          style({backgroundColor: 'red'}),
          animate(1000),
          useAnimation(bounceOutAnimation)
        ])
    ])
  ]
})

export class TodosComponent  {

  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
