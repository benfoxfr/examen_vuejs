<template>
  <div id="container">
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
      <div class="hautBas">
        <button @click="upRow(index, row.id)">↑</button>
        <button @click="downRow(index)">↓</button>
      </div>
      <button @click="deleteRow(index, row.id)">x</button>
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

      e.target.appendChild(item);
    },
    deleteRow(index, id) {
      let element = document.getElementById(id);
      let DZ = element.querySelector('.dropZone');
      let item = DZ.querySelector('.item');
      if(item == null){
        this.rows.splice(index, 1);
      }
    },
    createRow() {
      let id = this.nextId++;
      let name = prompt('Quelle nom voulez-vous pour la colonne?');
      if(name == '' || name == ' '){
        name = prompt('Quelle nom voulez-vous pour la colonne?');
      } else {
        this.rows.push({id: id ,name: name });
      }
    },
    upRow(index) {
      if (index > 0) {
        let long = this.rows.length - 2;
        let element = this.rows[index];
        let element2 = this.rows[index-1];
        const partTwo = this.rows.splice(index+1, long);
        const partOne = this.rows.splice(0, index - 1);
        this.rows.splice(element, 1);
        this.rows = [...partOne, element, element2, ...partTwo];
      }
    },
    downRow(index) {
      if (index < this.rows.length-1) {
        let long = this.rows.length - 2;
        let element = this.rows[index];
        let element2 = this.rows[index+1];
        const partTwo = this.rows.splice(index+2, long);
        const partOne = this.rows.splice(0, index );
        this.rows.splice(element, 1);
        this.rows = [...partOne, element2, element,...partTwo];
      }
    }
  }
}
</script>

<style>
.hautBas{
  text-align: right;
}
.hautBas > button:last-child{
  border-top: 1px solid white ;
}
.hautBas > button{
  height: 50%;
  background-color: grey;
  font-size: x-large;
  color: white;
  border: none;
}
.hautBas > button:active{
  background-color: rgb(70, 70, 70);
}
.add{
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
  align-items: center;
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
  display:flex;
  justify-content: center;
}
#startZone > .dropZone{
  border: solid 1px;
  border-radius: 20px;
}
</style>