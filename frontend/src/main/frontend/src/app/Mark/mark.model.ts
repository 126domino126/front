import {Image} from "../Image/image.model";
import {Event2} from "./event.model";
import {AppUser} from "../login/appUser.model";

export class Mark {
    constructor(
        public id?: number,
        public qr?: string,
        public title?: string,
        public mainImageSrc?: any,
        public description?: string,
        public favourite?: boolean,
        public markImages?: Image[],
        public events?: Event2[],
        public appUser?: AppUser
    ) {
        this.favourite = false;
    }
}
