<template>

    <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-button href="/Home">Home</ion-button>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
 <ion-item>
   <ion-input type="text" v-model="ano" placeholder="digite sua idade"> </ion-input>
    <ion-button @click="calcula()">Calcula idade</ion-button>
 </ion-item>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonInput,IonButton,IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'School',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,

  },
  methods:{
    calcula(){
     const anoAtual = new Date();
     const anoNasc = new Date(this.ano);
     const ano = anoAtual.getFullYear() - anoNasc.getFullYear();
     alert("Sua idade é "+ ano);



    }
  },
  data(){
    return{
      ano:"",
     anoAtual:"",
    };
  }
});
</script>


