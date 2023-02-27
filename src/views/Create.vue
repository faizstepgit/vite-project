<template>
<adminlte></adminlte>
  <h1>This is create Page</h1>
  <div id="app">
      <h2>{{  title }}</h2>
      <button v-on:click="title++">+  </button>
      <div @click="title = 2">sssss</div>
  </div>

  <p>{{  filter }}</p>
  <div @click="toggleclick">
    <span v-if="showtext">Hide</span>
    <span v-else>Show</span>
  </div>

  <div v-for=" data in ddd">
    <span>{{  test(data) }}</span>
  </div>
  <div class="box" @mouseover="handleEvent($event,5)"></div>
  <div class="box" @mouseleave="handleEvent"></div>
  <div class="box" @dblclick="handleEvent"></div>
  <div class="box" @mousemove="handleMouseMove">position {{ x }} {{ y }}</div>

<div>
  <ul>
    <li v-for="books in filter" :class="{ fav: books.isfav}" @click="favtoggle(books)">
      <img :src="books.img" :alt="books.title">
      <h3>{{books.title}} - {{ books.author }}</h3>
    </li>
  </ul>
</div>
<div>
  <ul>
    <li v-for="user in users" >
      <h1>{{ user }}</h1>
    </li>
  </ul>
</div>
<a href="https://www.facebook.com/Faizstep/" target="_blank">ssss</a>
<a v-bind:href="url" target="_blank">aaaa</a>

<input type="text" ref="name">
<button @click="clicklist">click me</button>
<button @click="chk_axios">chk_axios</button>
<!-- <button @click="chk_axios2">chk_axios</button>  -->
</template>

<script>
export default {
  data (){
    return {
      title : 1,
      showtext : true,
      ddd : [1,2,3,4],
      x :0,
      y :0,
      data : JSON.stringify({
        "username": "qwer",
          "password": "asdf"
      }),
      users : [],
      showbook : true,
      book : [
        { title :'name of myword',author:'faizstep dev',img : '/src/assets/1.png',isfav : true},
        { title :'name of myword1',author:'faizstep dev1',img : '/src/assets/2.png',isfav : false},
        { title :'name of myword2',author:'faizstep dev2',img : '/src/assets/3.png',isfav : true}
      ],
      url : 'https://www.facebook.com/Faizstep/',
    }
  },
  methods: {
      handleEvent(e,data) {
        console.log(e,e.type)
        console.log('mouse event')
        data ? console.log(data) : console.log('no has data')
      },
      handleMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
      },
      toggleclick() {
        return this.showtext = !this.showtext
      },
      test(data) {
        data = data+1
      },
      favtoggle(data) {
        data.isfav = !data.isfav
      },
      clicklist() {
        // console.log(this.$refs.name);
        this.$refs.name.classList.toggle('active');
        this.$refs.name.focus();
        console.log(this.$refs.name);
      },
      chk_axios() {
        console.log();
        // console.log('ddd');
      },
      getUsers() {
      this.axios.post('http://tools.kunlokka.com:203/test_post.php',{
        "username": "qwer",
        "password": "asdf"
      })
        .then(response => {
          this.users = response.data.status;
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
      },
    },
    computed : {
      filter() {
        return this.book.filter((book) => book.isfav )
      }
    },
    mounted() {
      this.getUsers();
    }

}
</script>

<style>

.box {
  padding : 100px 0;
  width : 400px;
  text-align: center;
  background: #ddd;
  margin: 20px;
  display: inline-block;
}
body {
  background: #eee;
  max-width: auto;
  margin:20px auto;
}
p,h3,ul {
  margin : 0;
  padding : 0;
}

li {
  list-style-type: none;
  background: #fff;
  margin:20px auto;
  padding:10px 20px;
  border-radius:10px;
  display: flex;
  align-items:center;
  justify-content : space-between;
}
li.fav {
  background: #ff9ed2;
  color: white;
}
</style>