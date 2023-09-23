<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>记录</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">记录</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-list>
                <ion-item>
                    <ion-label>Pokémon Yellow</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Mega Man X</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>The Legend of Zelda</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Pac-Man</ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>Super Mario World</ion-label>
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
</script>
