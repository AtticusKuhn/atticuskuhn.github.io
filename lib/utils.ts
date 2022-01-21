export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export function randomItemsFromArray<a>(array: a[], n: number) {
    return array.sort(() => 0.5 - Math.random()).slice(0, n);
}