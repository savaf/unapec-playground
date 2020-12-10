<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Estudiantes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-refresher slot="fixed" @ionRefresh="refresh($event)">
        <ion-refresher-content></ion-refresher-content>
      </ion-refresher>

      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Inbox</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item
          v-for="student in students"
          :key="student.id"
          class="list-item"
        >
          <h2>
            {{ student.name }}
            <small>{{ student.score }} </small>
          </h2>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="js">
import {
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import axios from 'axios'

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
  },
  data() {
    return {
      students: [],
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    refresh: (ev) => {
      setTimeout(() => {
        ev.detail.complete();
      }, 3000);
    },
    fetchStudents() {
      axios.get('http://localhost:3000/students').then((res) => {
        this.students = [...res.data];
      })
    }
  },

});
</script>
