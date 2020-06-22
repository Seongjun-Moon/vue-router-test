<template>
  <div>
    <h1>Todo List</h1>
    <input type="text" />
    <ul v-for="todo in todos" :key="todo.id">
      <li>
        <input type="checkbox" v-model="todo.isCompleted" />{{ todo.content }}
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
      todos: [],
    };
  },
  created() {
    // firebase 데이터베이스(firestore)에 요청 보내어
    db.collection("todos")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.todos.push({
            id: doc.id,
            content: doc.data().content,
            isCompleted: doc.data().isCompleted,
          });
        });
      });
    // 데이터를 받아와
    // todos를 채워넣기
  },
};
</script>

<style></style>
