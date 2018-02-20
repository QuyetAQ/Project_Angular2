import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const imgScaleAnimation =
    trigger('imgScaleAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in'))
        // transition('small <=> large', animate('300ms ease-in', style({
        //     transform: 'translateY(-40px)'
        // })))
    ]);