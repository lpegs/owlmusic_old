export function millisToMinutesAndSeconds(millis){
    const m = Math.floor(millis / 60000)
    const s = ((millis % 60000) / 1000).toFixed(0)
    return s == 60 
    ? m + 1 + ":00"
    : m + ":" + (s < 10 ? "0" : "") + s;

}