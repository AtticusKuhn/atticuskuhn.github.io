
export const capitalize = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);
export function randomItemsFromArray<a>(array: a[], n: number) {
    return array.sort(() => 0.5 - Math.random()).slice(0, n);
}
export type parsedMd = {
    content: string,
    headers: {
        [key: string]: string
    }
}
export const split = (char: string) => (str: string): [string, string] => [str.split(char)[0], str.split(char).slice(1).join(char)]
export const tojson = (str: string): { [prop: string]: string } =>
    str
        .split("\n")
        .map(split(":"))
        .reduce((acc, [key, val]) => Object.assign(acc, { [key]: val.trim() }), {})

export const parseMd = (mdContent: string): parsedMd => {
    const m = mdContent.match(/(?<=---\n).*?(?=\n---)/s)
    console.log("m", m)
    const headers = tojson(m[0])
    console.log("headers", headers)
    const m2 = mdContent.match(/(?<=---.*?---).*/s)
    const content = m2[0]
    return {
        content,
        headers,
    }
}
export const compareByDate = <T extends { date: string }>(d1: T, d2: T) => new Date(d2.date).getTime() - new Date(d1.date).getTime();
export type Omit<T, U extends keyof T> = {
    [P in Exclude<keyof T, U>]: T[P]
}
//@ts-ignore
export const deleteKey = <Obj, str extends keyof Obj>(object: Obj, key: str): Omit<Obj, str> => Object.keys(object).filter(k =>
    k !== key).reduce((obj, k) => {
        obj[k] = object[k];
        return obj;
    }, {}
    );