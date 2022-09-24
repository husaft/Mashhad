<template>
  <div id="app">
    <b-card>
        <b-tabs content-class="mt-3">
            <b-tab title="Input tools">
                <table class="table keyboard">
                    <tbody>
                        <tr>
                            <td id="k001" class="key_white">^</td>
                            <td id="k002" class="key_white">1</td>
                            <td id="k003" class="key_white">2</td>
                            <td id="k004" class="key_white">3</td>
                            <td id="k005" class="key_white">4</td>
                            <td id="k006" class="key_white">5</td>
                            <td id="k007" class="key_white">6</td>
                            <td id="k008" class="key_white">7</td>
                            <td id="k009" class="key_white">8</td>
                            <td id="k010" class="key_white">9</td>
                            <td id="k011" class="key_white">0</td>
                            <td id="k012" class="key_white">ß</td>
                            <td id="k013" class="key_white">`</td>
                            <td id="k014" class="key_gray">←</td>
                        </tr>
                        <tr>
                            <td id="k021" class="key_gray">⇆</td>
                            <td id="k022" class="key_white">Q</td>
                            <td id="k023" class="key_white">W</td>
                            <td id="k024" class="key_white">E</td>
                            <td id="k025" class="key_white">R</td>
                            <td id="k026" class="key_white">T</td>
                            <td id="k027" class="key_white">Z</td>
                            <td id="k028" class="key_white">U</td>
                            <td id="k029" class="key_white">I</td>
                            <td id="k030" class="key_white">O</td>
                            <td id="k031" class="key_white">P</td>
                            <td id="k032" class="key_white">Ü</td>
                            <td id="k033" class="key_white">*</td>
                            <td id="k034" class="key_gray" rowspan="2"><br/>↵</td>
                        </tr>
                        <tr>
                            <td id="k041" class="key_gray">⇩</td>
                            <td id="k042" class="key_white">A</td>
                            <td id="k043" class="key_white">S</td>
                            <td id="k044" class="key_white">D</td>
                            <td id="k045" class="key_white">F</td>
                            <td id="k046" class="key_white">G</td>
                            <td id="k047" class="key_white">H</td>
                            <td id="k048" class="key_white">J</td>
                            <td id="k049" class="key_white">K</td>
                            <td id="k050" class="key_white">L</td>
                            <td id="k051" class="key_white">Ö</td>
                            <td id="k052" class="key_white">Ä</td>
                            <td id="k053" class="key_white">#</td>
                        </tr>
                        <tr>
                            <td id="k061" class="key_gray">⇧</td>
                            <td id="k062" class="key_white">&lt;</td>
                            <td id="k063" class="key_white">Y</td>
                            <td id="k064" class="key_white">X</td>
                            <td id="k065" class="key_white">C</td>
                            <td id="k066" class="key_white">V</td>
                            <td id="k067" class="key_white">B</td>
                            <td id="k068" class="key_white">N</td>
                            <td id="k069" class="key_white">M</td>
                            <td id="k070" class="key_white">;</td>
                            <td id="k071" class="key_white">:</td>
                            <td id="k072" class="key_white">-</td>
                            <td id="k073" class="key_gray" colspan="2">⇧</td>
                        </tr>
                        <tr>
                            <td id="k081" class="key_gray">⎈</td>
                            <td id="k082" class="key_gray"></td>
                            <td id="k083" class="key_gray">⎇</td>
                            <td id="k084" class="key_white" colspan="7"></td>
                            <td id="k085" class="key_gray">⎇</td>
                            <td id="k086" class="key_gray" colspan="2"></td>
                            <td id="k087" class="key_gray">⎈</td>
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
import { persianize, romanize } from "../../mashhad-lib/src/convert"

@Component({})
export default class App extends Vue {
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
