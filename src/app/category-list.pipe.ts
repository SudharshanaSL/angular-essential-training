import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'categoryList',
    // pipes are pure and stateless by default
    // pure: true - behaves like a function which takes input and returns , invoked only if input arguments change
    // pure: false - if pipe output is dependent on arguments not within this pipe, set to false, will be invoked even if input arguments do not change
    pure: true
})

export class CategoryListPipe implements PipeTransform {
    transform(mediaItems) {
        const categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(', ');
    }
}