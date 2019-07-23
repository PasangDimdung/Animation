import { trigger, transition, animate, style, state, keyframes } from '@angular/animations';

export let slide = trigger('slide', [
    transition('void=>*',[
        style({ transform: 'translateX(-10px)'}),
        animate(500)
    ]),

    transition('*=>void',[
        animate('500ms cubic-bezier(.5,1.84,.03,-0.69)', keyframes([
            style({
                offset: .2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),

            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ]))
    ])
]);

// export let fade = trigger('fade', [
//     state('void', style({opacity: 0})),

//     transition('void <=> *', [
//       animate(2000)
//     ])
//   ]);