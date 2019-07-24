import { trigger, transition, animate, style, state, keyframes, animation, useAnimation } from '@angular/animations';

export let bounceOutAnimation = animation(
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
)

export let slide = trigger('slide', [
    transition('void=>*',[
        style({ transform: 'translateX(-10px)'}),
        animate(500)
    ]),

    transition('*=>void',[
        useAnimation(bounceOutAnimation)
    ])
]);

export let fadeInAnimation = animation([
    style({opacity:0}),
    animate('{{ duration }} {{ easing }}')
], 
{
    params:{ duration: '2000ms', easing: 'ease-out' }
}
)

export let fadeOutAnimation = animation([
    animate(2000, style({opacity:0}))
])

export let fade = trigger('fade', [
    transition('void=>*',[
       useAnimation(fadeInAnimation)
    ]),
    transition('*=>void',[
       useAnimation(fadeOutAnimation)
      ])
  ]);