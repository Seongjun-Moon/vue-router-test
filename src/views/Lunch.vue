<template>
  <dir>
    <h1>점심메뉴 추천</h1>
    <button @click="pick">랜덤메뉴</button>
    <div>
      {{ choice }}
    </div>
  </dir>
</template>

<script>
import _ from "lodash";

export default {
  name: "Lunch",
  data() {
    return {
      choice: "",
      menu: ["노랑통닭", "소풍", "김밥카페", "양자강", "순남시래기"],
    };
  },
  methods: {
    pick() {
      // menu 배열의 메뉴 중, 하나를 랜덤하게 선택
      this.choice = _.sample(this.menu);
    },
  },
};
</script>

<style></style>
