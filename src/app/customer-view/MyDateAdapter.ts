import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

export class MyDateAdapter implements NgbDateAdapter<Date> {
  static ngbToDate(dateIn: any): Date {
    if ((dateIn instanceof Date) || ((dateIn instanceof Object) && (dateIn.getUTCDate))) {
      // It's already a Date object
      return Object.assign(new Date(), dateIn);
    } else if ((dateIn instanceof String) || (typeof dateIn === 'string')) {
      // Assume a String/string in yyyy-mm-dd format
      const inStr = dateIn.toString();
      const year = inStr.substring(0, 4);
      const month = inStr.substring(5, 7);
      const day = inStr.substring(8, 10);
      return new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
    } else if ((dateIn instanceof Object) && (dateIn.month)) {
      // Assume an NgbDateStruct or similar object
      return new Date(dateIn.year, dateIn.month - 1, dateIn.day);
    }
  }

  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ? {year: date.getFullYear(), month:
      date.getMonth() + 1, day: date.getDate()} : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date ? new Date(date.year, date.month - 1, date.day) : null;
  }
}
