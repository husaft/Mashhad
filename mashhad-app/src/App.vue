<template>
  <div id="app">
    <b-card>
        <b-tabs content-class="mt-3">
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
</style>
