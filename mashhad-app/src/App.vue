<template>
  <div id="app">
    <h1>Transliteration</h1>

    <label for="ta_roman"><h2>Roman:</h2></label>
    <textarea id="ta_roman" 
        rows="5" cols="50" 
        v-model="romanTxt" 
        @input="onRoman" 
        placeholder="Write some text">1234567</textarea>

    <label for="ta_farsi"><h2>Farsi:</h2></label>
    <textarea id="ta_farsi" 
        rows="5" cols="42" 
        v-model="farsiTxt" 
        @input="onFarsi" 
        placeholder="Write some text"></textarea>
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
</style>
