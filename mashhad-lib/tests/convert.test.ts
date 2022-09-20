import { romanize, persianize } from "../src/convert";

describe("testing letters", () => {

    test("check empty roman", () => {
        expect(romanize(undefined)).toBe("");
        expect(romanize(null)).toBe("");
        expect(romanize("")).toBe("");

        expect(romanize("\r")).toBe("\r");
        expect(romanize("\n")).toBe("\n");
        expect(romanize(" ")).toBe(" ");
    });

    test("check empty persian", () => {
        expect(persianize(undefined)).toBe("");
        expect(persianize(null)).toBe("");
        expect(persianize("")).toBe("");

        expect(persianize("\r")).toBe("\r");
        expect(persianize("\n")).toBe("\n");
        expect(persianize(" ")).toBe(" ");
    });

    test("check digits roman", () => {
        expect(romanize("۰")).toBe("0");
        expect(romanize("۱")).toBe("1");
        expect(romanize("۲")).toBe("2");
        expect(romanize("۳")).toBe("3");
        expect(romanize("۴")).toBe("4");
        expect(romanize("۵")).toBe("5");
        expect(romanize("۶")).toBe("6");
        expect(romanize("۷")).toBe("7");
        expect(romanize("۸")).toBe("8");
        expect(romanize("۹")).toBe("9");
        expect(romanize("۱۰")).toBe("10");
        expect(romanize("۱۱")).toBe("11");
        expect(romanize("۱۲")).toBe("12");
        expect(romanize("۱۳")).toBe("13");
        expect(romanize("۱۴")).toBe("14");
        expect(romanize("۱۵")).toBe("15");
        expect(romanize("۱۶")).toBe("16");
        expect(romanize("۱۷")).toBe("17");
        expect(romanize("۱۸")).toBe("18");
        expect(romanize("۱۹")).toBe("19");
        expect(romanize("۲۰")).toBe("20");
        expect(romanize("۲۱")).toBe("21");
        expect(romanize("۲۲")).toBe("22");
        expect(romanize("۲۳")).toBe("23");
        expect(romanize("۲۴")).toBe("24");
        expect(romanize("۲۵")).toBe("25");
        expect(romanize("۲۶")).toBe("26");
        expect(romanize("۲۷")).toBe("27");
        expect(romanize("۲۸")).toBe("28");
        expect(romanize("۲۹")).toBe("29");
        expect(romanize("۳۰")).toBe("30");
        expect(romanize("۳۱")).toBe("31");
        expect(romanize("۳۲")).toBe("32");
        expect(romanize("۳۳")).toBe("33");
        expect(romanize("۳۴")).toBe("34");
        expect(romanize("۳۵")).toBe("35");
        expect(romanize("۳۶")).toBe("36");
        expect(romanize("۳۷")).toBe("37");
        expect(romanize("۳۸")).toBe("38");
        expect(romanize("۳۹")).toBe("39");
        expect(romanize("۴۰")).toBe("40");
        expect(romanize("۵۰")).toBe("50");
        expect(romanize("۶۰")).toBe("60");
        expect(romanize("۷۰")).toBe("70");
        expect(romanize("۸۰")).toBe("80");
        expect(romanize("۹۰")).toBe("90");
        expect(romanize("۱۰۰")).toBe("100");
        expect(romanize("۲۰۰")).toBe("200");
        expect(romanize("۳۰۰")).toBe("300");
        expect(romanize("۴۰۰")).toBe("400");
        expect(romanize("۵۰۰")).toBe("500");
        expect(romanize("۶۰۰")).toBe("600");
        expect(romanize("۷۰۰")).toBe("700");
        expect(romanize("۸۰۰")).toBe("800");
        expect(romanize("۹۰۰")).toBe("900");
        expect(romanize("۱۰۰۰")).toBe("1000");
        expect(romanize("۱۰۰۰۰۰۰")).toBe("1000000");
    });

    test("check digits persian", () => {
        expect(persianize("0")).toBe("۰");
        expect(persianize("1")).toBe("۱");
        expect(persianize("2")).toBe("۲");
        expect(persianize("3")).toBe("۳");
        expect(persianize("4")).toBe("۴");
        expect(persianize("5")).toBe("۵");
        expect(persianize("6")).toBe("۶");
        expect(persianize("7")).toBe("۷");
        expect(persianize("8")).toBe("۸");
        expect(persianize("9")).toBe("۹");
        expect(persianize("10")).toBe("۱۰");
        expect(persianize("11")).toBe("۱۱");
        expect(persianize("12")).toBe("۱۲");
        expect(persianize("13")).toBe("۱۳");
        expect(persianize("14")).toBe("۱۴");
        expect(persianize("15")).toBe("۱۵");
        expect(persianize("16")).toBe("۱۶");
        expect(persianize("17")).toBe("۱۷");
        expect(persianize("18")).toBe("۱۸");
        expect(persianize("19")).toBe("۱۹");
        expect(persianize("20")).toBe("۲۰");
        expect(persianize("21")).toBe("۲۱");
        expect(persianize("22")).toBe("۲۲");
        expect(persianize("23")).toBe("۲۳");
        expect(persianize("24")).toBe("۲۴");
        expect(persianize("25")).toBe("۲۵");
        expect(persianize("26")).toBe("۲۶");
        expect(persianize("27")).toBe("۲۷");
        expect(persianize("28")).toBe("۲۸");
        expect(persianize("29")).toBe("۲۹");
        expect(persianize("30")).toBe("۳۰");
        expect(persianize("31")).toBe("۳۱");
        expect(persianize("32")).toBe("۳۲");
        expect(persianize("33")).toBe("۳۳");
        expect(persianize("34")).toBe("۳۴");
        expect(persianize("35")).toBe("۳۵");
        expect(persianize("36")).toBe("۳۶");
        expect(persianize("37")).toBe("۳۷");
        expect(persianize("38")).toBe("۳۸");
        expect(persianize("39")).toBe("۳۹");
        expect(persianize("40")).toBe("۴۰");
        expect(persianize("50")).toBe("۵۰");
        expect(persianize("60")).toBe("۶۰");
        expect(persianize("70")).toBe("۷۰");
        expect(persianize("80")).toBe("۸۰");
        expect(persianize("90")).toBe("۹۰");
        expect(persianize("100")).toBe("۱۰۰");
        expect(persianize("200")).toBe("۲۰۰");
        expect(persianize("300")).toBe("۳۰۰");
        expect(persianize("400")).toBe("۴۰۰");
        expect(persianize("500")).toBe("۵۰۰");
        expect(persianize("600")).toBe("۶۰۰");
        expect(persianize("700")).toBe("۷۰۰");
        expect(persianize("800")).toBe("۸۰۰");
        expect(persianize("900")).toBe("۹۰۰");
        expect(persianize("1000")).toBe("۱۰۰۰");
        expect(persianize("1000000")).toBe("۱۰۰۰۰۰۰");
    });

    test("check words roman", () => {
        is(romanize("سلام"), "salam");
        is(romanize("تهران"), "tehran");
        is(romanize("مشهد"), "mashhad");
    });

    test("check words persian", () => {
        is(persianize("salam"), "سلام");
        is(persianize("tehran"), "تهران");
        is(persianize("mashhad"), "مشهد");
    });

    /*test("check sentences", () => {
        // ?
    });*/

    function is(first: string, second: string): void {
        expect(Array.from(first).toString()).toBe(Array.from(second).toString());
    }
});
