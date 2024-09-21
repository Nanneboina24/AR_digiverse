import { Component, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

interface EventItem {
  name: string;
  date: string | null;
  duration: string;
  location: string;
  type: string;
  image: string;
  index?: number;
  desc: string;
}

@Component({
  selector: 'app-events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.scss'],
  animations: [
    trigger('timelineAnimation', [
      transition('* => *', [
        // Animate the timeline items one after another
        query(
          '.p-timeline-event',
          [
            style({ opacity: 0, transform: 'translateY(50px)' }),
            stagger(500, [
              animate(
                '600ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class EventsTimelineComponent {
  events: EventItem[];
  timelineAlign: string = 'alternate';
  isVisible = false;

  constructor(private datePipe: DatePipe) {
    this.events = [
      {
        name: 'Event 1',
        date: this.datePipe.transform(new Date(), 'fullDate'),
        duration: '1 hour',
        location: 'Riyadh, Saudi Arabia',
        image:
          'https://media.licdn.com/dms/image/D4D12AQGIgqNcNsJ1hQ/article-cover_image-shrink_600_2000/0/1676450606391?e=2147483647&v=beta&t=M2qbEyixRtGyw9fhb0mQ3E7Hca8LJKCwdU87ZyBGToE',
        desc: 'An annual tech conference held in Riyadh, Saudi Arabia, that brings together tech professionals from around the world. ',
        type: 'internal',
      },
      {
        name: 'Event 2',
        date: this.datePipe.transform(new Date(), 'fullDate'),
        duration: '2 hours',
        location: 'London, UK',
        image:
          'https://media.licdn.com/dms/image/D4D12AQGIgqNcNsJ1hQ/article-cover_image-shrink_600_2000/0/1676450606391?e=2147483647&v=beta&t=M2qbEyixRtGyw9fhb0mQ3E7Hca8LJKCwdU87ZyBGToE',
        desc: 'An annual tech conference held in Riyadh, Saudi Arabia, that brings together tech professionals from around the world. ',
        type: 'external',
      },
      {
        name: 'Event 3',
        date: this.datePipe.transform(new Date(), 'fullDate'),
        duration: '45 minutes',
        location: 'Riyadh, KSA',
        image:
          'https://media.licdn.com/dms/image/D4D12AQGIgqNcNsJ1hQ/article-cover_image-shrink_600_2000/0/1676450606391?e=2147483647&v=beta&t=M2qbEyixRtGyw9fhb0mQ3E7Hca8LJKCwdU87ZyBGToE',
        desc: 'An annual tech conference held in Riyadh, Saudi Arabia, that brings together tech professionals from around the world. ',
        type: 'internal',
      },
      {
        name: 'Event 4',
        date: this.datePipe.transform(new Date(), 'fullDate'),
        duration: '3 hours',
        location: 'New York, USA',
        image:
          'https://media.licdn.com/dms/image/D4D12AQGIgqNcNsJ1hQ/article-cover_image-shrink_600_2000/0/1676450606391?e=2147483647&v=beta&t=M2qbEyixRtGyw9fhb0mQ3E7Hca8LJKCwdU87ZyBGToE',
        desc: 'An annual tech conference held in Riyadh, Saudi Arabia, that brings together tech professionals from around the world. ',
        type: 'external',
      },
    ];

    // Assign indexes to each event
    this.events.forEach((event, index) => {
      event.index = index + 1;
    });
  }

  // Detect scroll and trigger animation
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    const elementPosition =
      document.getElementById('event-scroll-element')?.offsetTop ?? 0;

    // Adjust the scroll position to trigger the animation when the element is visible
    if (scrollPosition + window.innerHeight >= elementPosition) {
      this.isVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const screenWidth = event.target.innerWidth;
    this.updateTimelineAlignment(screenWidth);
  }

  ngOnInit() {
    const screenWidth = window.innerWidth;
    this.updateTimelineAlignment(screenWidth);
  }

  // Function to update timeline alignment
  updateTimelineAlignment(screenWidth: number) {
    // Change alignment to 'left' if the screen is tablet size or smaller
    if (screenWidth <= 990) {
      this.timelineAlign = 'left';
    } else {
      this.timelineAlign = 'alternate';
    }
  }
}
