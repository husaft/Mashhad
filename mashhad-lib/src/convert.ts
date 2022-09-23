
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
    ["ا", "a"],
    ["ب", "b"],
    ["ت", "t"],
    ["ث", "c"],
    ["د", "d"],
    ["ر", "r"],
    ["ز", "z"],
    ["س", "s"],
    ["ش", "sh"],
    ["غ", "gh"],
    ["ف", "f"],
    ["ل", "l"],
    ["م", "m"],
    ["ن", "n"],
    ["ه", "h"],
    ["پ", "p"],
    ["ک", "k"],
    ["گ", "g"],
    ["ی", "ye"],
    ["اس", "es"],
    ["ایر", "ir|a"],
    ["ب|ز", "bo|z"],
    ["ت|ه", "te|h"],
    ["ج|م", "jo|m"],
    ["د|ر", "da|r"],
    ["ر|گ", "or|g"],
    ["ر|ی", "ri|ye"],
    ["س|ل", "sa|l"],
    ["س|گ", "sa|g"],
    ["فی", "fi"],
    ["م|ش", "ma|sh"],
    ["مو", "mu"],
    ["م|ی", "mi|ye"],
    ["ن|س", "ne|s"],
    ["ه|د", "ha|d"],
    ["هو", "hu"],
    ["پ|د", "pe|d"],
    ["چ|ک", "cha|k"],
    ["کو", "ku"],
    ["است", "ast"]
]);

const charR2P = swap(charP2R);

function swap<TK, TV>(input: Map<TK, TV>): Map<TV, TK> {
    const map = new Map<TV, TK>();
    for (const [key, value] of input.entries())
        map.set(value, key);
    return map;
}

function isWhiteSpace(txt: string) {
    return /^\s*$/.test(txt);
}

export function persianize(input: string): string {
    return convert(input, false, true, numR2P, charR2P);
}

export function romanize(input: string, upper: boolean = false): string {
    return convert(input, upper, false, numP2R, charP2R);
}

function convert(raw: string, upper: boolean, lower: boolean,
    numbers: Map<string, string>, letters: Map<string, string>): string {

    if (raw === undefined || raw === null) {
        return "";
    }

    const input = lower ? raw.toLowerCase() : raw;

    let text = "";
    let step = 1;
    for (let i = 0; i < input.length; i += step) {
        step = 1;
        const item0 = input.charAt(i);
        if (isWhiteSpace(item0)) {
            text += item0;
            continue;
        }

        let conv = numbers.get(item0);
        if (conv !== undefined) {
            text += conv;
            continue;
        }

        const item1 = (i + 1) < input.length ? (input.charAt(i + 1)) : null;
        const item2 = (i + 2) < input.length ? (input.charAt(i + 2)) : null;
        const item3 = (i + 3) < input.length ? (input.charAt(i + 3)) : null;

        conv = letters.get(`${item0}${item1}|${item2}${item3}`); step = 2;

        if (conv === undefined) {
            conv = letters.get(`${item0}${item1}${item2}|${item3}`); step = 3;
        }

        if (conv === undefined) {
            conv = letters.get(`${item0}${item1}|${item2}`); step = 2;
        }

        if (conv === undefined) {
            conv = letters.get(`${item0}${item1}${item2}`); step = 3;
        }

        if (conv === undefined) {
            conv = letters.get(`${item0}|${item1}`); step = 1;
        }

        if (conv === undefined) {
            conv = letters.get(`${item0}${item1}`); step = 2;
        }

        if (conv === undefined) {
            conv = letters.get(item0); step = 1;
        }

        if (conv !== undefined) {
            conv = conv.split('|')[0];
            if (upper && (text.length === 0 || isWhiteSpace(text.charAt(text.length - 1)))) {
                conv = conv.toUpperCase().charAt(0) + conv.substring(1);
            }
            text += conv;
            continue;
        }

        text += "_";
    }
    return text;
}
