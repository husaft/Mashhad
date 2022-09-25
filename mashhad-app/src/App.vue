<template>
  <div id="app">
    <b-card>
        <b-tabs content-class="mt-3">
            <b-tab title="Input tools">
                <b-form-textarea id="ta_keys" 
                    rows="1" max-rows="6" 
                    v-model="keysTxt" 
                    placeholder="Press some keys"></b-form-textarea>
                <br />
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
                            <td @click="onKeyPush" id="k041" class="key_gray">{{l.get("k041")}}</td>
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
                            <td @click="onKeyPush" id="k061" class="key_gray">{{l.get("k061")}}</td>
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
                            <td @click="onKeyPush" id="k073" class="key_gray" colspan="2">{{l.get("k073")}}</td>
                        </tr>
                        <tr>
                            <td @click="onKeyPush" id="k081" class="key_gray">{{l.get("k081")}}</td>
                            <td @click="onKeyPush" id="k082" class="key_gray">{{l.get("k082")}}</td>
                            <td @click="onKeyPush" id="k083" class="key_gray">{{l.get("k083")}}</td>
                            <td @click="onKeyPush" id="k084" class="key_white" colspan="7">{{l.get("k084")}}</td>
                            <td @click="onKeyPush" id="k085" class="key_gray">{{l.get("k085")}}</td>
                            <td @click="onKeyPush" id="k086" class="key_gray" colspan="2">{{l.get("k086")}}</td>
                            <td @click="onKeyPush" id="k087" class="key_gray">{{l.get("k087")}}</td>
                        </tr>
                    </tbody>
                </table>
            </b-tab>
            <b-tab title="Transliteration" active>
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

@Component({})
export default class App extends Vue {

    private fa: Map<string, string> = new Map<string, string>([
        ["k001","پ"], ["k002","۱"], ["k003","۲"], ["k004","۳"], ["k005","۴"], 
        ["k006","۵"], ["k007","۶"], ["k008","۷"], ["k009","۸"], ["k010","۹"], 
        ["k011","۰"], ["k012","-"], ["k013","="], ["k014","←"], ["k021","⇆"], 
        ["k022","ض"], ["k023","ص"], ["k024","ث"], ["k025","ق"], ["k026","ف"], 
        ["k027","غ"], ["k028","ع"], ["k029","ه"], ["k030","خ"], ["k031","ح"], 
        ["k032","ج"], ["k033","چ"], ["k034","↵"], ["k042","ش"], ["k053","ژ"], 
        ["k043","س"], ["k044","ی"], ["k045","ب"], ["k046","ل"], ["k047","ا"], 
        ["k048","ت"], ["k049","ن"], ["k050","م"], ["k051","ک"], ["k052","گ"], 
        ["k062","<"], ["k063","ظ"], ["k064","ط"], ["k065","ز"], ["k066","ر"], 
        ["k067","ذ"], ["k068","د"], ["k069",""], ["k070","و"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"], 
        ["k071","."], ["k072", "/"], ["k069","ئ"]
    ]);

    private de: Map<string, string> = new Map<string, string>([
        ["k001","^"], ["k002","1"], ["k003","2"], ["k004","3"], ["k005","4"], 
        ["k006","5"], ["k007","6"], ["k008","7"], ["k009","8"], ["k010","9"], 
        ["k011","0"], ["k012","ß"], ["k013","`"], ["k014","←"], ["k021","⇆"], 
        ["k022","Q"], ["k023","W"], ["k024","E"], ["k025","R"], ["k026","T"], 
        ["k027","Z"], ["k028","U"], ["k029","I"], ["k030","O"], ["k031","P"], 
        ["k032","Ü"], ["k033","*"], ["k034","↵"], ["k041","⇩"], ["k042","A"], 
        ["k043","S"], ["k044","D"], ["k045","F"], ["k046","G"], ["k047","H"], 
        ["k048","J"], ["k049","K"], ["k050","L"], ["k051","Ö"], ["k052","Ä"], 
        ["k053","#"], ["k061","⇧"], ["k062","<"], ["k063","Y"], ["k064","X"], 
        ["k065","C"], ["k066","V"], ["k067","B"], ["k068","N"], ["k069","M"], 
        ["k070",";"], ["k071",":"], ["k072","-"], ["k073","⇧"], ["k081","⎈"], 
        ["k083","⎇"], ["k084"," "], ["k085","⎇"], ["k087","⎈"]
    ]);

    private l: Map<string, string> = this.fa;
    private keysTxt: string = '';

    private onKeyPush(me: any): void {
        const keyId = me.target.id;
        let keyVal = this.l.get(keyId);
        if (keyVal === undefined) {
            return;
        }
        if (keyVal === '⎈') {
            // TODO
            return;
        }
        if (keyVal === '⎇') {
            // TODO
            return;
        }
        if (keyVal === '⇩') {
            // TODO
            return;
        }
        if (keyVal === '⇧') {
            // TODO
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
        this.keysTxt += keyVal;
    }

    private romanTxt: string = '';
    private farsiTxt: string = '';

    private onRoman(): void {
        this.farsiTxt = persianize(this.romanTxt);
    }

    private onFarsi(): void {
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

.key_white, .key_gray {
    border-width: 2px !important;
    border-color: black !important;
    font-weight: bold !important;
}

.key_gray {
    background-color: lightgray !important;
    font-size: 1.3em !important;
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
</style>
