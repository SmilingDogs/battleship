export function createArray<T>(length: number, callback: (i:number) => T) {
    return [...new Array(length)].map((_, i) => callback(i))
}