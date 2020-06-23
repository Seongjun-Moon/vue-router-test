<template>
  <div>
    <h1>Todo List</h1>
    <input @keypress.enter="addTodo" v-model="inputContent" type="text" />
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <input type="checkbox" v-model="todo.isCompleted" />
        {{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Todos",
  data() {
    return {
      inputContent: "",
      todos: [],
      newTodo: ""
    };
  },
  methods: {
    getTodos() {
      this.todos = [];
      db.collection("todos")
        .orderBy("createdAt", "desc")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.todos.push({
              id: doc.id,
              content: doc.data().content,
              isCompleted: doc.data().isCompleted,
              createdAt: doc.data().createdAt
            });
          });
        });
    },
    addTodo() {
      // enter가 눌러졌을 때, firebase API를 통해 데이터 저장
      this.newTodo = {
        content: this.inputContent,
        isCompleted: false,
        createdAt: new Date()
      };
      console.log(this.newTodo);
      this.todos.unshift(this.newTodo);
    }
  },
  watch: {
    todos: function() {
      if (this.newTodo)
        db.collection("todos")
          .add({ ...this.newTodo })
          .then(() => {
            this.contentInput = "";
          });
    }
  },
  created() {
    // firebase 데이터베이스(firestore)에 요청 보내어
    this.getTodos();
    // 데이터를 받아와
    // todos를 채워넣기
  }
};
</script>

<style></style>
