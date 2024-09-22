import { Component, HostListener } from '@angular/core';
import { GlobalSearchService } from '../../../services/global-search.service';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  datas: any[] | undefined;

  selectedDataAdvanced: any[] | undefined;

  filteredData: any[] = [];

  constructor(private globalSearchService: GlobalSearchService) {}

  ngOnInit() {
    this.globalSearchService.getDatas().then((datas) => {
      this.datas = datas;
    });
  }

  filterDatas(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.datas as any[]).length; i++) {
        let data = (this.datas as any[])[i];
        if (data.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(data);
        }
    }

    this.filteredData = filtered;
}

  images: any[] = [
    {
      name: 'Quarter Report',
      desc: 'This quarter, D/IT achieved key project milestones and improved system performance. Upcoming initiatives focus on innovation and enhanced security.',
      img: 'assets/img7.jpg',
    },
    {
      name: 'Half-Yearly IT Report',
      desc: 'D/IT completed major projects and implemented new technologies, driving efficiency. The next phase targets further optimization and scaling key services.',
      img: 'assets/img8.jpg',
    },
    {
      name: 'Annual IT Report',
      desc: 'This year, D/IT achieved significant advancements in digital transformation and security. Looking ahead, the focus is on sustaining growth and innovation for future success.',
      img: 'assets/img9.jpg',
    },
  ];

  navbarSticky: boolean = false;

  // Listen to scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.navbarSticky = true;
    } else {
      this.navbarSticky = false;
    }
  }
}
