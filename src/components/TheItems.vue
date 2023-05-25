<template>
  <div 
  class="item"
  :id="item.id"
  v-for="item in items"
  :key="item.id"
  :draggable="draggable"
  @dragstart="dragStart"
  @dragover.stop
  >
  <p>{{ item.name }}</p>
    <slot></slot>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 'item-1',
          name: 'Liège'
        },
        {
          id: 'item-2',
          name: 'Namur'
        },
        {
          id: 'item-3',
          name: 'Luxembourg'
        },
        {
          id: 'item-4',
          name: 'Hainaut'
        },
        {
          id: 'item-5',
          name: 'Brabant Wallon'
        },
        {
          id: 'item-6',
          name: 'Brabant Flamand'
        },
        {
          id: 'item-7',
          name: 'Limbourg'
        },
        {
          id: 'item-8',
          name: 'Anvers'
        },
        {
          id: 'item-9',
          name: 'Flandre Orientale'
        },
        {
          id: 'item-10',
          name: 'Flandre Occidentale'
        }
      ]
    }
  },
  props: ['id', 'draggable'],
  methods: {
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData('item_id', target.id);
    }
  }
};
</script>
<style>
.item{
  list-style: none;
  padding: 10px 5px;
  background-color: aqua;
  border-radius: 20px;
  margin: 4px;
  height: 70px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
