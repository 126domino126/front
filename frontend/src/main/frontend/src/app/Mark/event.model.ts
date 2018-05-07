
export class Event2 {
  id?: string | number;
  starting?: Date;
  ending?: Date;
  title?: string;
  colorPrim?: string;
  colorSec?: string;
  allDay?: boolean;
  repeat?: number;
  constructor(
    id?: string | number,
    start?: Date,
    end?: Date,
    title?: string,
    colorPrim?: string,
    colorSec?: string,
    allDay?: boolean,
    repeat?: number
  ) {}
}
