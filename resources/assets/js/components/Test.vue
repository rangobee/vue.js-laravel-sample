<template>
  <div>
    <h1>{{ title }}</h1>
    <!--
      独自コンポーネント（モーダルウィンドウ）を開くためのトリガ。
      予めモーダルウィンドウ側に#myModalを与えている。
    -->
    <button 
    type="button" 
    class="btn btn-primary" 
    data-toggle="modal" 
    data-target="#myModal"
    >Open Modal Form</button>
    <!-- 
      独自タグをレンダリング。
      ./resources/assets/js/components/Modal.vueを表示。
      slotにて可変コンテンツを流し込んでいる。
      独自タグには必ず-（ハイフン）を入れるべき。
      今後実装される可能性のあるHTML5タグと重複しないよう、独自タグであることを明記する。
    -->
    <my-modal>
      <h3 slot="title">{{ title }}</h3>
      <div slot="body">
        <div class="row">
        <div class="col-md-8">
          <!--
            v-modelにてmessageをバインディング。
            余談だが複数の属性を持つ場合は複数行で書くようにしたほうがいいってばっちゃが言ってた。
          -->
          <input
            type="text" 
            v-model="message"
            name="message"
            class="form-control"
          >
        </div>    
        <div class="col-md-4">
          <button
            class="btn btn-primary"
            @click="sending"
          >send data</button>
        </div>
        </div>
        <p>{{ message }}</p>
      </div>
    </my-modal>
    <!-- APIから取得した値を表示 -->
    <h2 v-if="getData.length != 0">The messages you send are:</h2>
    <h2 v-else>No messages.</h2>
    <div v-if="getData.length != 0">
      <ol>
        <!--  v-forには必ず一意のキーを与えること。  -->
        <li 
          v-for="res in getData" 
          :key="res.id"
        >{{ res.message }}</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "message",
  data() {
    return {
      title: "Laravel + Vue.js",
      message: "initialize",
      result: "",
      getData: []
    };
  },
  methods: {
    sending: function() {
      alert("send to api /api/message.");
      axios
        .post("/api/message", { message: this.message })
        .then(res => {
          console.log(res.data);
          this.result = res.data;
          var next_key = this.getData.length + 1;
          this.getData.push({ id: next_key, message: this.result });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>