import { reactive } from 'vue';

export const EventBus = reactive({
  list: [],
  updateList(newList) {
    this.list = newList;
  },
});