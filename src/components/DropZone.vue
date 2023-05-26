<template>
  <div  
  class="row"
  :id="row.id"
  v-for="(row, index) in rows"
  :key="row.id"
  >
    <input type="text" v-model="row.name">
    <div 
    class="dropZone"
    @dragover.prevent
    @drop.prevent="drop"
    >
      <slot></slot>
    </div>
    <button @click="deleteRow(index)">x</button>
  </div>
  <div class="add"><button @click="createRow()">+</button></div>
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
          id: 1,
          name: 'S'
        },
        {
          id: 2,
          name: 'A'
        },
        {
          id: 3,
          name: 'B'
        },
        {
          id: 4,
          name: 'C'
        },
        {
          id: 5,
          name: 'D'
        }
      ],
      nextId: 6
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
    },
    createRow() {
      let id = this.nextId++;
      let name = prompt('Quelle nom voulez-vous pour la colonne?');
      if(name == ''){
        name = prompt('Quelle nom voulez-vous pour la colonne?');
      } else {
        this.rows.push({id: id ,name: name });
      }
    }
  }
}
</script>

<style>
.add{
  width: 90vw;
  margin-inline: 2vw;
  height: 53px;
}
.add > button{
  height: 50px;
  width: 50px;
  border-radius: 25px;
  font-size: x-large;
  color: white;
  background-color: rgb(175, 175, 175);
  border: none;
}
.add > button:active{
  background-color: rgb(70, 70, 70);
}
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