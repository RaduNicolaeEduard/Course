<template>
<div>

  <v-app-bar
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="primary"
          size="32"
        >RN</v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          text
        >
          {{ link }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="Flag"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="">
      <v-container style="max-width:100%">
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-expansion-panels style="max-height:90vh; overflow:auto">
                <v-expansion-panel
                  v-for="question in questions"
                  :key="question.title"
                >
                  <v-expansion-panel-header>
                    {{  question.title }}            
                    <v-icon color="green lighten-1" v-if="question.done">mdi-checkbox-marked-circle</v-icon>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{  question.content }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              rounded="lg"
              
            >
            <div style="height:90vh">

              <iframe   
                id=iframe
                src="http://test1.nicolae.systems/"
                style="border-radius: 10px;position: relative; height: 100%; width: 100%;"  
scrolling="no" frameborder="0"
>
            </iframe>
            </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
            </div>
</template>
<style>

.body{
  background-color: black;
}
</style>

<script>
  export default {
    data: () => ({
      questions:[
        {'title':'1','content':'1','done':true},
        {'title':'2','content':'2','done':true},
        {'title':'3','content':'3','done':false},
        {'title':'4','content':'4','done':true},
        {'title':'5','content':'5','done':true},
        {'title':'6','content':'6','done':true},
        {'title':'7','content':'7','done':false},
        {'title':'8','content':'8','done':false},
        {'title':'9','content':'9','done':false},
        {'title':'10','content':'10','done':false},
      ],
      links: [
        'Dashboard',
        'Leader Board',
        'i Messed Up'
      ],
    }),
    methods: {
    getsrc: async function () {
      const res = await fetch("http://test1.nicolae.systems/", {
        method: 'GET',
        headers: {
          'Authorization': 'a2FzbV91c2VyOnBhc3N3b3Jk',
          'Access-Control-Allow-Origin':'*',
          'Referer': "http://test1.nicolae.systems/"
        }
      });
      const blob = await res.blob();
      const urlObject = URL.createObjectURL(blob);
      return urlObject;
    }
    }
  }
</script>