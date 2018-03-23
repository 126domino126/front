import {Image} from "../Image/image.model";

export class Mark {
    constructor(
        public id?: number,
        public title?: string,
        public mainImageSrc?: any,
        public description?: string,
        public favourite?: boolean,
        public markImages?: Image[],
        public textFields?: String[],
    ) {
        this.favourite = false;
    }
}
