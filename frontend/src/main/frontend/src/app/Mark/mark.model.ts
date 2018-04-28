import {Image} from "../Image/image.model";
import {Event2} from "./event.model";

export class Mark {
    constructor(
        public id?: number,
        public title?: string,
        public mainImageSrc?: any,
        public description?: string,
        public favourite?: boolean,
        public markImages?: Image[],
        public events?: Event2[],
    ) {
        this.favourite = false;
    }
}
