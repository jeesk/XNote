<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
<!--      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="chatbubble"/>
          <ion-label>笔记</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="heart"/>
          <ion-label>剪贴板</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="settings"/>
          <ion-label>设置</ion-label>
        </ion-tab-button>createOutline
      </ion-tab-bar>-->
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {chatbubble, heart, settings} from 'ionicons/icons';</script>
