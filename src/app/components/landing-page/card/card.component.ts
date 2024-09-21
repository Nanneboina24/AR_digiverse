import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
    products!: Product[];

    responsiveOptions: any[] | undefined;

    @ViewChild('videoPlayer', { static: false }) videoPlayer!: ElementRef;
    isPlaying: boolean = false;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'success'
        }
    }

    toggleVideo() {
        const video = this.videoPlayer.nativeElement;

        if (this.isPlaying) {
            video.pause();           // Pause the video if it is playing
        } else {
            video.play();            // Play the video if it is paused
        }

        this.isPlaying = !this.isPlaying; // Toggle play/pause state
    }

}
