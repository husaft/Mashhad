
const numP2R = new Map<string, string>([
    ["۰", "0"],
    ["۱", "1"],
    ["۲", "2"],
    ["۳", "3"],
    ["۴", "4"],
    ["۵", "5"],
    ["۶", "6"],
    ["۷", "7"],
    ["۸", "8"],
    ["۹", "9"]
]);

const numR2P = swap(numP2R);

const letters = new Map<string, string>([
]);

function swap<TK, TV>(input: Map<TK, TV>): Map<TV, TK> {
    const map = new Map<TV, TK>();
    for (const [key, value] of input.entries())
        map.set(value, key);
    return map;
}

export function persianize(input: string): string {
    if (input === undefined || input === null)
        return "";

    let text = "";

    for (let i = input.length - 1; i >= 0; i--) {
        const item = input.charAt(i);
        let conv = numR2P.get(item);
        if (conv !== undefined) {
            text = conv + text;
        } else {
            conv = letters.get(item);
            text += conv;
        }
    }

    return text;
}

export function romanize(input: string): string {
    if (input === undefined || input === null)
        return "";

    let text = "";

    for (let i = input.length - 1; i >= 0; i--) {
        const item = input.charAt(i);
        let conv = numP2R.get(item);
        if (conv !== undefined) {
            text = conv + text;
        } else {
            conv = letters.get(item);
            text += conv;
        }
    }

    return text;
}
