import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

    transform(images: string[]): string {
        return (typeof images !== 'undefined' && images.length > 0) ? images[0] : 'assets/images/noimage.png';
    }

}
