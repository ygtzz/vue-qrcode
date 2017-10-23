const qrcode = VueQrcode.default;

Vue.use(qrcode);

new Vue({
  name:'c-app',
  el: '#container',
  created() {
      
  },
  data() {
    return {
      qrCode:'wr2wwerwerwerwerwerwerwerwerwe'
    }
  },
  methods:{
    
  },
  components: {
    
  }
});

