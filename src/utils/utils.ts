export class Utils {
  static calcDateDifferenceInDays = (date_1: Date, date_2: Date) => {
    const difference = date_1.getTime() - date_2.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return Math.abs(TotalDays);
  };
}
