<template>
  <div id="app">
    <b-card>
        <b-tabs content-class="mt-3">
            <b-tab title="Dictionary" active>
                <b-button-toolbar>
                    <b-button pill variant="outline-danger" 
                              @click="clearWord">Clear</b-button>
                    <b-input-group size="sm">
                        <b-form-input v-model="wordText" 
                                      @input="searchWord" 
                                      placeholder="Enter some word" />
                    </b-input-group>
                    <!-- <b-button pill variant="outline-success">Search</b-button> -->
                </b-button-toolbar>
                <br/>
                <b-table striped hover :items="wordItems" :fields="wordFields"></b-table>
            </b-tab>
            <b-tab title="Calendar">
                <b-calendar block v-model="currentSelDate" 
                            class="border rounded p-2" 
                            @input="refreshDateTxt" 
                            value-as-date>
                </b-calendar>
                <center>
                    <b-button size="sm" variant="outline-primary"
                            class="ml-auto" @click="setToday">
                        Set today
                    </b-button>
                    <br/>
                    <br/>
                    <b-list-group>
                        <b-list-group-item>{{ currentSelDTxt[0] }}</b-list-group-item>
                        <b-list-group-item>{{ currentSelDTxt[1] }}</b-list-group-item>
                        <b-list-group-item>{{ currentSelDTxt[2] }}</b-list-group-item>
                        <b-list-group-item>{{ currentSelDTxt[3] }}</b-list-group-item>
                    </b-list-group>
                </center>
            </b-tab>
            <b-tab title="World clock">
                <b-list-group>
                    <b-list-group-item>
                        <center>
                            Today is <br/>
                            <span class="date">{{ dates[1].date }}</span>
                        </center>
                    </b-list-group-item>
                    <b-list-group-item :key="item.place" v-for="item in dates">
                        <center>
                            <b-button variant="outline-secondary">
                                {{ item.place }}
                            </b-button>
                            <span class="time">{{ item.time }}</span>
                        </center>
                    </b-list-group-item>
                </b-list-group>
            </b-tab>
            <b-tab title="Input tools">
                <b-form-textarea id="ta_keys" 
                    rows="1" max-rows="6" 
                    v-model="keysTxt" 
                    placeholder="Press some keys"></b-form-textarea>

                <table class="table keyboard">
                    <tbody>
                        <tr>
                            <td @click="onKeyPush" id="k001" class="key_white">{{l.get("k001")}}</td>
                            <td @click="onKeyPush" id="k002" class="key_white">{{l.get("k002")}}</td>
                            <td @click="onKeyPush" id="k003" class="key_white">{{l.get("k003")}}</td>
                            <td @click="onKeyPush" id="k004" class="key_white">{{l.get("k004")}}</td>
                            <td @click="onKeyPush" id="k005" class="key_white">{{l.get("k005")}}</td>
                            <td @click="onKeyPush" id="k006" class="key_white">{{l.get("k006")}}</td>
                            <td @click="onKeyPush" id="k007" class="key_white">{{l.get("k007")}}</td>
                            <td @click="onKeyPush" id="k008" class="key_white">{{l.get("k008")}}</td>
                            <td @click="onKeyPush" id="k009" class="key_white">{{l.get("k009")}}</td>
                            <td @click="onKeyPush" id="k010" class="key_white">{{l.get("k010")}}</td>
                            <td @click="onKeyPush" id="k011" class="key_white">{{l.get("k011")}}</td>
                            <td @click="onKeyPush" id="k012" class="key_white">{{l.get("k012")}}</td>
                            <td @click="onKeyPush" id="k013" class="key_white">{{l.get("k013")}}</td>
                            <td @click="onKeyPush" id="k014" class="key_gray">{{l.get("k014")}}</td>
                        </tr>
                        <tr>
                            <td @click="onKeyPush" id="k021" class="key_gray">{{l.get("k021")}}</td>
                            <td @click="onKeyPush" id="k022" class="key_white">{{l.get("k022")}}</td>
                            <td @click="onKeyPush" id="k023" class="key_white">{{l.get("k023")}}</td>
                            <td @click="onKeyPush" id="k024" class="key_white">{{l.get("k024")}}</td>
                            <td @click="onKeyPush" id="k025" class="key_white">{{l.get("k025")}}</td>
                            <td @click="onKeyPush" id="k026" class="key_white">{{l.get("k026")}}</td>
                            <td @click="onKeyPush" id="k027" class="key_white">{{l.get("k027")}}</td>
                            <td @click="onKeyPush" id="k028" class="key_white">{{l.get("k028")}}</td>
                            <td @click="onKeyPush" id="k029" class="key_white">{{l.get("k029")}}</td>
                            <td @click="onKeyPush" id="k030" class="key_white">{{l.get("k030")}}</td>
                            <td @click="onKeyPush" id="k031" class="key_white">{{l.get("k031")}}</td>
                            <td @click="onKeyPush" id="k032" class="key_white">{{l.get("k032")}}</td>
                            <td @click="onKeyPush" id="k033" class="key_white">{{l.get("k033")}}</td>
                            <td @click="onKeyPush" id="k034" class="key_gray" rowspan="2"><br/>{{l.get("k034")}}</td>
                        </tr>
                        <tr>
                            <td @click="onKeyPush" id="k041" :class="{ key_gray_on: isShift, key_gray: !isShift }">{{l.get("k041")}}</td>
                            <td @click="onKeyPush" id="k042" class="key_white">{{l.get("k042")}}</td>
                            <td @click="onKeyPush" id="k043" class="key_white">{{l.get("k043")}}</td>
                            <td @click="onKeyPush" id="k044" class="key_white">{{l.get("k044")}}</td>
                            <td @click="onKeyPush" id="k045" class="key_white">{{l.get("k045")}}</td>
                            <td @click="onKeyPush" id="k046" class="key_white">{{l.get("k046")}}</td>
                            <td @click="onKeyPush" id="k047" class="key_white">{{l.get("k047")}}</td>
                            <td @click="onKeyPush" id="k048" class="key_white">{{l.get("k048")}}</td>
                            <td @click="onKeyPush" id="k049" class="key_white">{{l.get("k049")}}</td>
                            <td @click="onKeyPush" id="k050" class="key_white">{{l.get("k050")}}</td>
                            <td @click="onKeyPush" id="k051" class="key_white">{{l.get("k051")}}</td>
                            <td @click="onKeyPush" id="k052" class="key_white">{{l.get("k052")}}</td>
                            <td @click="onKeyPush" id="k053" class="key_white">{{l.get("k053")}}</td>
                        </tr>
                        <tr>
                            <td @click="onKeyPush" id="k061" :class="{ key_gray_on: isShiftOnce, key_gray: !isShiftOnce }">{{l.get("k061")}}</td>
                            <td @click="onKeyPush" id="k062" class="key_white">{{l.get("k062")}}</td>
                            <td @click="onKeyPush" id="k063" class="key_white">{{l.get("k063")}}</td>
                            <td @click="onKeyPush" id="k064" class="key_white">{{l.get("k064")}}</td>
                            <td @click="onKeyPush" id="k065" class="key_white">{{l.get("k065")}}</td>
                            <td @click="onKeyPush" id="k066" class="key_white">{{l.get("k066")}}</td>
                            <td @click="onKeyPush" id="k067" class="key_white">{{l.get("k067")}}</td>
                            <td @click="onKeyPush" id="k068" class="key_white">{{l.get("k068")}}</td>
                            <td @click="onKeyPush" id="k069" class="key_white">{{l.get("k069")}}</td>
                            <td @click="onKeyPush" id="k070" class="key_white">{{l.get("k070")}}</td>
                            <td @click="onKeyPush" id="k071" class="key_white">{{l.get("k071")}}</td>
                            <td @click="onKeyPush" id="k072" class="key_white">{{l.get("k072")}}</td>
                            <td @click="onKeyPush" id="k073" :class="{ key_gray_on: isShiftOnce, key_gray: !isShiftOnce }" colspan="2">{{l.get("k073")}}</td>
                        </tr>
                        <tr>
                            <td @click="onKeyPush" id="k081" class="key_gray">{{l.get("k081")}}</td>
                            <td @click="onKeyPush" id="k082" class="key_gray">{{l.get("k082")}}</td>
                            <td @click="onKeyPush" id="k083" :class="{ key_gray_on: isAlt, key_gray: !isAlt }">{{l.get("k083")}}</td>
                            <td @click="onKeyPush" id="k084" class="key_white" colspan="7">{{l.get("k084")}}</td>
                            <td @click="onKeyPush" id="k085" :class="{ key_gray_on: isAlt, key_gray: !isAlt }">{{l.get("k085")}}</td>
                            <td @click="onKeyPush" id="k086" class="key_gray" colspan="2">{{l.get("k086")}}</td>
                            <td @click="onKeyPush" id="k087" class="key_gray">{{l.get("k087")}}</td>
                        </tr>
                    </tbody>
                </table>
            </b-tab>
            <b-tab title="Transliteration">
                <label for="ta_roman"><h2>Roman:</h2></label>
                <b-form-textarea id="ta_roman" 
                    rows="5" max-rows="6" 
                    v-model="romanTxt" 
                    @input="onRoman" 
                    placeholder="Write some text"></b-form-textarea>

                <label for="ta_farsi"><h2>Farsi:</h2></label>
                <b-form-textarea id="ta_farsi" 
                    rows="5" max-rows="6" 
                    v-model="farsiTxt" 
                    @input="onFarsi" 
                    placeholder="Write some text"></b-form-textarea>
            </b-tab>
        </b-tabs>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { persianize, romanize } from "../../mashhad-lib/src/convert";

@Component({ components: { } })
export default class App extends Vue {

    public clearWord() {
        this.wordText = '';
        this.wordItems = [];
    }

    private static patchLatin(txt: string): string {
        return txt.replaceAll('ā', 'a')
                .replaceAll('č', 'c')
                .replaceAll('ǧ', 'g')
                .replaceAll('ḫ', 'h')
                .replaceAll('š', 's')
                .replaceAll('ʻ', '' )
                .replaceAll('ž', 'z');
    }

    private reloadDict() {
        const domain = 'raw.githubusercontent.com';
        const user = 'husaft';
        const proj = 'Mashhad';
        const lang = 'german';
        const url = `https://${domain}/${user}/${proj}/main/dict/${lang}.json`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const some = data.map((i: any) => {
                    const o = { p: i.p, r: i.r, d: i.d.join(', ') };
                    return o;
                });
                this.allWordItems = some;
                this.searchWord();
            });
    }

    public searchWord() {
        if (this.allWordItems.length == 0) {
            this.reloadDict();
            return;
        }
        const txt = App.patchLatin(this.wordText.toLowerCase());
        const array : any[] = [];
        for (const item of this.allWordItems) 
            if (item.p.includes(txt) || 
                App.patchLatin(item.r).includes(txt) || 
                item.d.toLowerCase().includes(txt)) {
                array.push(item);
                if (array.length >= this.maxWordCount)
                    break;
            }
        this.wordItems = array;
    }

    public wordText: string = '';
    private maxWordCount: number = 16;
    public wordItems: any[] = [];
    public wordFields: any[] = [
        { key: 'p', label: 'Farsi',   sortable: true },
        { key: 'r', label: 'Roman',   sortable: true },
        { key: 'd', label: 'Deutsch', sortable: true }
    ];

    private allWordItems: any[] = [
    ];

    private static getNowDate(): Date {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }

    public refreshDateTxt() {
        const opt : any = { dateStyle: "full" };
        this.currentSelDTxt = [
            this.currentSelDate.toLocaleDateString('fa-IR', opt),
            this.currentSelDate.toLocaleDateString('en-IR-u-ca-persian', opt),
            this.currentSelDate.toLocaleDateString('ar-SA', opt),
            this.currentSelDate.toLocaleDateString('en-SA-u-ca-islamic-umalqura', opt)
        ];
    }

    public setToday() {
        this.currentSelDate = App.getNowDate();
        this.refreshDateTxt();
    }

    public currentSelDTxt: string[] = [ "---", "---" ];
    public currentSelDate: Date = App.getNowDate();

    private static getTimeZones() {
        const data = [
            { place: "United States",   zone: "America/New_York" },
            { place: "Deutschland",     zone: "Europe/Berlin" },
            { place: "ایران",           zone: "Asia/Tehran" },
            { place: "افغانستان",       zone: "Asia/Kabul" }
        ];
        return data;
    }

    private static getTimeOpts(zone: string) {
        const opt : Intl.DateTimeFormatOptions = {
            day: "2-digit", month: "short", year: "numeric",
            hour12: false, hour: "numeric", minute: "2-digit",
            timeZone: zone
        };
        return opt;
    }

    private static getDate(zone: string, place: string) {
        const opt = App.getTimeOpts(zone);
        const now = new Date();
        const txt = now.toLocaleString('en', opt);
        const tmp = txt.split(',');
        const first = tmp[0].split(' ');
        const month = first[0];
        const day = first[1];
        const year = tmp[1];
        const date = day + ' ' + month + ' ' + year;
        const time = tmp[2];
        return { date, time, place };
    }

    private static getAllDates() {
        return App.getTimeZones().map(z => App.getDate(z.zone, z.place));
    }

    public dates: any[] = App.getAllDates();

    private fa_bn: Map<string, string> = new Map<string, string>([
        ["k001","÷"], ["k002","!"], ["k003","´"], ["k004","ر"], ["k005","؋"], 
        ["k006","%"], ["k007","×"], ["k008","⸲"], ["k009","*"], ["k010",")"],
        ["k011","("], ["k012","_"], ["k013","+"], ["k014","←"], ["k021","⇆"], 
        ["k022","◌ْ"], ["k023","◌ٌ"], ["k024","◌ٍ"], ["k025","◌ً"], ["k026","◌ُ"],
        ["k027","◌ِ"], ["k028","◌َ"], ["k029","◌ّ"], ["k030","]"], ["k031","["], 
        ["k032","}"], ["k033","{"], ["k034","↵"], ["k041","⇩"], ["k042","ؤ"], 
        ["k043","ئ"], ["k044","ي"], ["k045","إ"], ["k046","أ"], ["k047","آ"], 
        ["k048","ة"], ["k049","»"], ["k050","«"], ["k051",":"], ["k052","⸵"], 
        ["k053","|"], ["k061","⇧"], ["k062",">"], ["k063","ك"], ["k064","◌ٓ"], 
        ["k065",'\\'], ["k066","◌ٰ"], ["k067","پول"], ["k068","◌ٔ"], ["k069","ء"], 
        ["k070",'>'], ["k071",'<'], ["k072","⸮"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇦🇫"]
    ]);

    private fa_ln: Map<string, string> = new Map<string, string>([
        ["k001","پ"], ["k002","۱"], ["k003","۲"], ["k004","۳"], ["k005","۴"], 
        ["k006","۵"], ["k007","۶"], ["k008","۷"], ["k009","۸"], ["k010","۹"], 
        ["k011","۰"], ["k012","-"], ["k013","="], ["k014","←"], ["k021","⇆"], 
        ["k022","ض"], ["k023","ص"], ["k024","ث"], ["k025","ق"], ["k026","ف"], 
        ["k027","غ"], ["k028","ع"], ["k029","ه"], ["k030","خ"], ["k031","ح"], 
        ["k032","ج"], ["k033","چ"], ["k034","↵"], ["k042","ش"], ["k053","ژ"], 
        ["k043","س"], ["k044","ی"], ["k045","ب"], ["k046","ل"], ["k047","ا"], 
        ["k048","ت"], ["k049","ن"], ["k050","م"], ["k051","ک"], ["k052","گ"], 
        ["k062","<"], ["k063","ظ"], ["k064","ط"], ["k065","ز"], ["k066","ر"], 
        ["k067","ذ"], ["k068","د"], ["k070","و"], ["k081","⎈"], ["k083","⎇"], 
        ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k071","."], ["k072", "/"], 
        ["k069","ئ"], ["k073","⇧"], ["k041","⇩"], ["k061","⇧"], ["k086","🇦🇫"]
    ]);

    private fa_la: Map<string, string> = new Map<string, string>([
        ["k001","~"], ["k002","`"], ["k003","@"], ["k004","#"], ["k005","$"], 
        ["k006","%"], ["k007","^"], ["k008","&"], ["k009","·"], ["k010","…"], 
        ["k011","¦"], ["k012","_"], ["k013","="], ["k014","←"], ["k021","⇆"], 
        ["k022","°"], ["k023","ص"], ["k024","€"], ["k025","("], ["k026",")"], 
        ["k027","◌ٖ"], ["k028","ٱ"], ["k029","◌ٟ"], ["k030","'"], ["k031",'"'], 
        ["k032","ځ"], ["k033","څ"], ["k034","↵"], ["k041","⇩"], ["k042","ښ"], 
        ["k043","ۍ"], ["k044","ی"], ["k045","ې"], ["k046","ڷ"], ["k047","-"], 
        ["k048","ټ"], ["k049","ڼ"], ["k050","ں"], ["k051",";"], ["k052","ګ"], 
        ["k053","?"], ["k061","⇧"], ["k062","|"], ["k063","ے"], ["k064","ڑ"], 
        ["k065","ږ"], ["k066","ړ"], ["k067","ڈ"], ["k068","ډ"], ["k069","ٹ"], 
        ["k070",","], ["k071","ۇ"], ["k072","ۉ"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇦🇫"]
    ]);

    private fa_ba: Map<string, string> = this.fa_la;

    private de_bn: Map<string, string> = new Map<string, string>([
        ["k001","°"], ["k002","!"], ["k003",'"'], ["k004","§"], ["k005","$"], 
        ["k006","%"], ["k007","&"], ["k008","/"], ["k009","("], ["k010",")"], 
        ["k011","="], ["k012","?"], ["k013","`"], ["k014","←"], ["k021","⇆"], 
        ["k022","Q"], ["k023","W"], ["k024","E"], ["k025","R"], ["k026","T"], 
        ["k027","Z"], ["k028","U"], ["k029","I"], ["k030","O"], ["k031","P"], 
        ["k032","Ü"], ["k033","*"], ["k034","↵"], ["k041","⇩"], ["k042","A"], 
        ["k043","S"], ["k044","D"], ["k045","F"], ["k046","G"], ["k047","H"], 
        ["k048","J"], ["k049","K"], ["k050","L"], ["k051","Ö"], ["k052","Ä"], 
        ["k053","'"], ["k061","⇧"], ["k062",">"], ["k063","Y"], ["k064","X"], 
        ["k065","C"], ["k066","V"], ["k067","B"], ["k068","N"], ["k069","M"], 
        ["k070",";"], ["k071",":"], ["k072","_"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇩🇪"]
    ]);

    private de_ln: Map<string, string> = new Map<string, string>([
        ["k001","^"], ["k002","1"], ["k003","2"], ["k004","3"], ["k005","4"], 
        ["k006","5"], ["k007","6"], ["k008","7"], ["k009","8"], ["k010","9"], 
        ["k011","0"], ["k012","ß"], ["k013","´"], ["k014","←"], ["k021","⇆"], 
        ["k022","q"], ["k023","w"], ["k024","e"], ["k025","r"], ["k026","t"], 
        ["k027","z"], ["k028","u"], ["k029","i"], ["k030","o"], ["k031","p"], 
        ["k032","ü"], ["k033","+"], ["k034","↵"], ["k041","⇩"], ["k042","a"], 
        ["k043","s"], ["k044","d"], ["k045","f"], ["k046","g"], ["k047","h"], 
        ["k048","j"], ["k049","k"], ["k050","l"], ["k051","ö"], ["k052","ä"], 
        ["k053","#"], ["k061","⇧"], ["k062","<"], ["k063","y"], ["k064","x"], 
        ["k065","c"], ["k066","v"], ["k067","b"], ["k068","n"], ["k069","m"], 
        ["k070",","], ["k071","."], ["k072","-"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇩🇪"]
    ]);

    private de_ba: Map<string, string> = new Map<string, string>([
        ["k001","″"], ["k002","¡"], ["k003","⅛"], ["k004","£"], ["k005","¤"],
        ["k006","⅜"], ["k007","⅝"], ["k008","⅞"], ["k009","™"], ["k010","±"], 
        ["k011","°"], ["k012","¿"], ["k013","˛"], ["k014","←"], ["k021","⇆"], 
        ["k022","Ω"], ["k023","Ł"], ["k024","€"], ["k025","®"], ["k026","Ŧ"],
        ["k027","¥"], ["k028","↑"], ["k029","ı"], ["k030","Ø"], ["k031","Þ"],  
        ["k032","˚"], ["k033","¯"], ["k034","↵"], ["k041","⇩"], ["k042","Æ"], 
        ["k043","ẞ"], ["k044","Ð"], ["k045","ª"], ["k046","Ŋ"], ["k047","Ħ"], 
        ["k048","˙"], ["k049","&"], ["k050","Ł"], ["k051","."], ["k052","ˇ"], 
        ["k053","˘"], ["k061","⇧"], ["k062","ˍ"], ["k063","›"], ["k064","‹"], 
        ["k065","©"], ["k066","‚"], ["k067","‘"], ["k068","’"], ["k069","º"], 
        ["k070","×"], ["k071","÷"], ["k072","—"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇩🇪"]
    ]);
    
    private de_la: Map<string, string> = new Map<string, string>([
        ["k001","´"], ["k002","¹"], ["k003","²"], ["k004","³"], ["k005","¼"], 
        ["k006","½"], ["k007","¬"], ["k008","{"], ["k009","["], ["k010","]"], 
        ["k011","}"], ["k012","\\"], ["k013","¸"], ["k014","←"], ["k021","⇆"], 
        ["k022","@"], ["k023","ł"], ["k024","€"], ["k025","¶"], ["k026","ŧ"], 
        ["k027","←"], ["k028","↓"], ["k029","→"], ["k030","ø"], ["k031","þ"], 
        ["k032","¨"], ["k033","~"], ["k034","↵"], ["k041","⇩"], ["k042","æ"], 
        ["k043","ſ"], ["k044","ð"], ["k045","đ"], ["k046","ŋ"], ["k047","ħ"],
        ["k048","."], ["k049","ĸ"], ["k050","ł"], ["k051","˝"], ["k052","^"], 
        ["k053","’"], ["k061","⇧"], ["k062","|"], ["k063","»"], ["k064","«"], 
        ["k065","¢"], ["k066","„"], ["k067","“"], ["k068","”"], ["k069","µ"], 
        ["k070","·"], ["k071","…"], ["k072","–"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], ["k086","🇩🇪"]
    ]);

    public l: Map<string, string> = new Map<string, string>();
    public keysTxt: string = '';
    private isFarsi: boolean = true;
    public isShiftOnce: boolean = false;
    public isShift: boolean = false;
    public isAlt: boolean = false;

    private getLayout(): Map<string, string> {
        if (this.isFarsi) {
            if (this.isShift || this.isShiftOnce) {
                return this.isAlt ? this.fa_ba : this.fa_bn;
            }
            return this.isAlt ? this.fa_la : this.fa_ln;
        }
        if (this.isShift || this.isShiftOnce) {
            return this.isAlt ? this.de_ba : this.de_bn;
        }
        return this.isAlt ? this.de_la : this.de_ln;
    }

    private switchLayout() {
        this.l = this.getLayout();
    }

    private enableClock() {
        const outer = this;
        setInterval(function () {
            outer.dates = App.getAllDates();
        }, 30 * 1000);
    }

    mounted() {
        this.switchLayout();
        this.enableClock();
        this.refreshDateTxt();
    }

    public onKeyPush(me: any): void {
        const keyId = me.target.id;
        let keyVal = this.l.get(keyId);
        if (keyVal === undefined) {
            return;
        }
        if (keyVal === '⎈') {
            this.keysTxt = '';
            return;
        }
        if (keyVal === '🇩🇪') {
            this.isFarsi = true;
            this.switchLayout();
            return;
        }
        if (keyVal === '🇦🇫') {
            this.isFarsi = false;
            this.switchLayout();
            return;
        }
        if (keyVal === '⎇') {
            this.isAlt = !this.isAlt;
            this.switchLayout();
            return;
        }
        if (keyVal === '⇩') {
            this.isShift = !this.isShift;
            this.switchLayout();
            return;
        }
        if (keyVal === '⇧') {
            this.isShiftOnce = !this.isShiftOnce;
            this.switchLayout();
            return;
        }
        if (keyVal === "←") {
            this.keysTxt = this.keysTxt.substring(0, this.keysTxt.length-1);
            return;
        }
        if (keyVal === '↵') {
            keyVal = '\n';
        }
        if (keyVal === "⇆") {
            keyVal = '\t';
        }
        if (this.isShiftOnce) {
            this.isShiftOnce = false;
            this.switchLayout();
        }
        this.keysTxt += keyVal;
    }

    public romanTxt: string = '';
    public farsiTxt: string = '';

    public onRoman(): void {
        this.farsiTxt = persianize(this.romanTxt);
    }

    public onFarsi(): void {
        this.romanTxt = romanize(this.farsiTxt);
    }
}
</script>

<style>
#ta_roman { 
    font-size: 150%;
}

#ta_farsi { 
    font-size: 180%;
}

#ta_keys {
    font-size: 180%;
}

.keyboard {
    text-align: center;
    vertical-align: middle;
    width: 100%;
    table-layout: fixed;
}

.key_white, .key_gray, .key_gray_on {
    border-width: 2px !important;
    border-color: black !important;
    font-weight: bold !important;
}

.key_gray, .key_gray_on {
    background-color: lightgray !important;
    font-size: 1.3em !important;
}

.key_gray_on {
    background-color: rosybrown !important;
}

.key_gray_on:hover {
    background-color: lavender !important;
}

.key_gray:hover {
    background-color: azure !important;
}

.key_white {
    background-color: white !important;
}

.key_white:hover {
    background-color: lightblue !important;
}

.time {
    font-family: 'Lucida Console', monospace;
    font-weight: bold;
    font-size: larger;
}

.date {
    font-weight: bold;
}
</style>
