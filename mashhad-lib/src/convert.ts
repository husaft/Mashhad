
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

const charP2R = new Map<string, string>([
    ["ب", "b"],
    ["پ", "p"],
    ["ت", "t"],
    ["د", "d"],
    ["ر", "r"],
    ["ز", "z"],
    ["س", "s"],
    ["ف", "f"],
    ["ک", "k"],
    ["گ", "ɡ"],
    ["ل", "l"],
    ["م", "m"],
    ["ن", "n"],
    ["ا", "a"],
    ["سل", "sal"],
    ["ه", "h"],
    ["ش", "sh"],
    ["هد", "had"],
    ["مش", "mash"],
    ["ته", "teh"],
    ["ی", "ye"],
    ["می", "miye"],
    ["اس", "es"],
    ["ای", "i"],
    ["جم", "jom"],
    ["هو", "hur"],
    ["ری", "iye"]
]);

const charR2P = swap(charP2R);

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
    let step = 1;
    for (let i = 0; i < input.length; i += step) {
        step = 1;
        const item = input.charAt(i);
        if (item === ' ' || item === '\r' || item === '\n') {
            text += item;
            continue;
        }

        let conv = numR2P.get(item);
        if (conv !== undefined) {
            text += conv;
            continue;
        }

        const item2 = (item + input.charAt(i + 1));
        const item3 = (item2 + input.charAt(i + 2));
        const item4 = (item3 + input.charAt(i + 3));

        conv = charR2P.get(item4); step = 4;
        if (conv === undefined) {
            conv = charR2P.get(item3); step = 3;
        }
        if (conv === undefined) {
            conv = charR2P.get(item2); step = 2;
        }
        if (conv === undefined) {
            conv = charR2P.get(item); step = 1;
        }
        if (conv !== undefined) {
            text += conv;
            continue;
        }

        text += "_";
    }
    return text;
}

export function romanize(input: string): string {
    if (input === undefined || input === null)
        return "";

    let text = "";
    let step = 1;
    for (let i = 0; i < input.length; i += step) {
        step = 1;
        const item = input.charAt(i);
        if (item === ' ' || item === '\r' || item === '\n') {
            text += item;
            continue;
        }

        let conv = numP2R.get(item);
        if (conv !== undefined) {
            text += conv;
            continue;
        }

        const item2 = (item + input.charAt(i + 1));
        const item3 = (item2 + input.charAt(i + 2));
        const item4 = (item3 + input.charAt(i + 3));

        conv = charP2R.get(item4); step = 4;
        if (conv === undefined) {
            conv = charP2R.get(item3); step = 3;
        }
        if (conv === undefined) {
            conv = charP2R.get(item2); step = 2;
        }
        if (conv === undefined) {
            conv = charP2R.get(item); step = 1;
        }
        if (conv !== undefined) {
            text += conv;
            continue;
        }

        text += "_";
    }
    return text;
}
