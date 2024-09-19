import { Component } from '@angular/core';
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
  constructor(private datePipe: DatePipe) {}


  newsItem =   {
    image: 'https://www.aramco.com/-/jssmedia/news/2023/astonmartin_aramcoformulaoneteam.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
    title: 'Aramco extends successful partnership with AM F1 to become its title partner',
    shortDesc: 'Aramco, one of the world’s leading integrated energy and chemicals companies, and Aston Martin Formula One® Team announce a long-term extension of their partnership.',
    createdBy: 'DHAHRAN',
    uploadedDate: new Date(),
  };



  newsList = [
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/global-ai-summit-gain.jpeg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco unveils new initiatives to drive digital development',
      shortDesc: 'Aramco, one of the world’s leading integrated energy and chemicals companies, today unveiled new initiatives that aim to drive the development and deployment of advanced digital solutions across its operations.',
      uploadedDate: this.datePipe.transform(new Date(), '2024-10-15')
    },
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/aramco-kaust-collaboration-web.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco plans $100m funding for KAUST to support cutting-edge R&D',
      shortDesc: 'Aramco plans to fund up to $100 million in research and development projects with KAUST over the next 10 years.  The funds from Aramco have been earmarked for a wide range of initiatives, from essential research to applied technologies, as KAUST seeks to push the boundaries of science and innovation. ',
      uploadedDate: this.datePipe.transform(new Date(), '2024-10-14')
    },
    {
      image: 'https://www.aramco.com/-/jssmedia/news/2024/logo-aramco-fifa-original.jpg?cx=0.5&cy=0.5&cw=1504&ch=846',
      title: 'Aramco and FIFA announce global partnership',
      shortDesc: 'Aramco, one of the world’s leading integrated energy and chemicals companies, has signed a four-year global partnership with FIFA.',
      uploadedDate: this.datePipe.transform(new Date(), '2024-10-12')
    },
  ];
}
