import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const btnScaleAnimation =
    trigger('btnScaleAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        // transition('small => large', animate('100ms ease-in'))
        // transition('small <=> large', animate('300ms ease-in', style({
        //     transform: 'translateY(-40px)'
        // })))
        transition('small <=> large', animate('400ms ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-80%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(20px)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateX(60%)', offset: 1.0 })
        ])))
    ]);