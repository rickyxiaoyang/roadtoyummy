export function toFraction(decimal: number) {
    if (decimal == 0.25) {
        return "1/4";
    } else if (decimal == 0.5) {
        return "1/2";
    } else if (decimal == 0.75) {
        return "3/4";
    } else {
        return decimal;
    }
}
