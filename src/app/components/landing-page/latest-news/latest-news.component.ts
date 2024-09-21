import { Component, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { trigger, query, stagger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
  animations: [
    trigger('newsAnimation', [
      transition('* => *', [
        query('.news-list-item',style({opacity: 0, transform: 'translateX(50%)'})),
        query('.news-list-item',
          stagger('300ms', [
            animate('500ms', style({ opacity: 1,transform: 'translateX(0)'}))
        ]))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50%)' }),
        animate('700ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50%)' }),
        animate('700ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })),
      ])
    ])
  ]
})
export class LatestNewsComponent {
  isVisible: boolean = false;
  constructor(private datePipe: DatePipe) {}

  // from the api find the sort the list by uploadedDate by desc
  newsList = [
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2023/astonmartin_aramcoformulaoneteam.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco extends successful partnership with AM F1 to become its title partner',
      shortDesc: 'Aramco, one of the world’s leading integrated energy and chemicals companies, and Aston Martin Formula One® Team announce a long-term extension of their partnership.',
      createdBy: 'DHAHRAN',
      uploadedDate: new Date(),
    },
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/global-ai-summit-gain.jpeg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco unveils digital initiatives',
      shortDesc: 'Aramco introduces initiatives to boost digital solutions in its operations.',
      createdBy: 'DHAHRAN',
      uploadedDate: this.datePipe.transform(new Date(), '2024-08-15')
    },
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/aramco-kaust-collaboration-web.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco to fund $100M for KAUST R&D',
      shortDesc: 'Aramco plans $100M for KAUST R&D over 10 years, supporting both essential research and applied technologies.',
      createdBy: 'DHAHRAN',
      uploadedDate: this.datePipe.transform(new Date(), '2024-08-14')
    },
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/logo-aramco-fifa-original.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco partners with FIFA',
      shortDesc: 'Aramco signs a four-year global partnership with FIFA.',
      createdBy: 'DHAHRAN',
      uploadedDate: this.datePipe.transform(new Date(), '2024-08-12')
    },
  ];

   // Detect scroll and trigger animation
   @HostListener('window:scroll', [])
   onWindowScroll() {
     const scrollPosition = window.scrollY;
     const elementPosition = document.getElementById('news-scroll-element')?.offsetTop ?? 0;
 
     // Adjust the scroll position to trigger the animation when the element is visible
     if (scrollPosition + window.innerHeight >= elementPosition) {
       this.isVisible = true;
     }
   }
}
