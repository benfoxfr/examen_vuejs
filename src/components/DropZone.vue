<template>
  <div  
  class="row"
  v-for="(row, index) in rows"
  :key="row.id"
  >
    <input type="text" :value="row.input">
    <div 
    class="dropZone"
    @dragover.prevent
    @drop.prevent="drop"
    >
      <slot></slot>
    </div>
    <button @click="deleteRow(index)">X</button>
    <button @click="createRow(index)">+</button>
  </div>
  <div id="startZone">
    <div 
    class="dropZone"
    @dragover.prevent
    @drop.prevent="drop"
    >
    <the-items draggable="true"></the-items>     
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      rows: [
        {
          input: 'S'
        },
        {
          input: 'A'
        },
        {
          input: 'B'
        },
        {
          input: 'C'
        },
        {
          input: 'D'
        }
      ]
    }
  },
  methods: {
    drop: e => {
      const item_id = e.dataTransfer.getData('item_id');

      const item = document.getElementById(item_id);

      item.style.display = "block";

      e.target.appendChild(item);
    },
    deleteRow(index) {
        this.rows.splice(index, 1);
    }
  }
}
</script>

<style>
.row{
  min-height: 100px;
  background-color: rgb(175, 175, 175);
  border-radius: 20px;
  margin-bottom: 5px;
  display: inline-flex;
  width: 90vw;
}
.row > input{
  border: none;
  background-color: grey;
  border-radius: 20px 0px 0px 20px;
  color: white;
  text-align: center;
  font-size: x-large;
  width: 150px;
}
.dropZone{
  display: flex;
  flex-wrap: wrap;
  min-height: 100px;
  width: 90vw;
}
.row > button{
  border: none;
  background-color: grey;
  color: white;
  font-size: x-large;
}
.row > button:last-child{
  border-radius: 0px 20px 20px 0px;
  border-left: 1px solid white;
}
.row > button:active{
  background-color: rgb(70, 70, 70);
}
#startZone{
  margin-inline: 2vw;
  border: solid 1px;
  border-radius: 20px;
}
</style>