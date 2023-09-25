<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-list>
          <ion-item>
            <ion-icon :icon="settingsOutline"></ion-icon>
            <div style="text-align: center;margin: 0 auto;">
              <ion-select
                  fill="solid"
                  class="always-flip"
                  :toggle-icon="caretDownSharp"
                  interface="popover"
                  placeholder="Select fruit"
                  value="apples"
              >
                <ion-select-option value="apples">全部便签</ion-select-option>
                <ion-select-option value="oranges">学习笔记</ion-select-option>
                <ion-select-option value="bananas">Bananas</ion-select-option>
              </ion-select>
            </div>
            <ion-icon :icon="createOutline"></ion-icon>
          </ion-item>
        </ion-list>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-searchbar placeholder="快速搜索关键字"></ion-searchbar>
      <ion-list>

        <ion-item-sliding v-for="(item, index) in items">
          <ion-item-options side="start">
            <ion-item-option color="danger">
              删除
            </ion-item-option>
          </ion-item-options>
          <ion-item>
            <ion-label>
              <p>今天</p>
              <h2>{{ item }}</h2>
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="success">
              置顶
            </ion-item-option>
            <ion-item-option>
             移动到
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from '@ionic/vue';
import {defineComponent, reactive} from 'vue';
import {caretDownSharp, createOutline, settingsOutline} from 'ionicons/icons';

export default defineComponent({
  components: {
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonItemSliding,
    IonAvatar,
    IonImg,
    IonLabel,
    IonHeader,
    IonPage,
    IonIcon,
    IonSelect,
    IonSelectOption,
    IonToolbar,
    IonSearchbar,
    IonItemOption,
    IonItemOptions,
  },
  setup() {
    const items = reactive([]);
    const generateItems = () => {
      const count = items.length + 1;
      for (let i = 0; i < 50; i++) {
        items.push(`Item ${count + i}`);
      }
    };
    generateItems();
    return {items, caretDownSharp, createOutline, settingsOutline};
  },
});

</script>

<style>
ion-select.always-flip::part(icon) {
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}

ion-select.always-flip.select-expanded::part(icon) {
  transform: rotate(180deg);
}

ion-select.never-flip::part(icon) {
  transform: none;
}

ion-select {
  border-color: transparent;
}
</style>


