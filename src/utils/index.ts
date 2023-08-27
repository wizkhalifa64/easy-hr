export function getMonday(e: Date) {
  let d = new Date(e);
  let day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

export function getMinutesDiff(time1: string, time2: string) {
  var tim1 = time1,
    tim2 = time2;
  var ary1 = tim1.split(":"),
    ary2 = tim2.split(":");
  var minsdiff =
    parseInt(ary2[0], 10) * 60 +
    parseInt(ary2[1], 10) -
    parseInt(ary1[0], 10) * 60 -
    parseInt(ary1[1], 10);
  return minsdiff;
}

export function getHM(minutes: number) {
  var hours = Math.trunc(minutes / 60);
  var min = minutes % 60;

  return { hour: hours, minute: min };
}
