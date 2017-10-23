/**
 * @name VueJS vQriously (vue-qriously)
 * @description Component to generate HTML canvas QR codes for Vue.js 2.0
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-qriously plugin definition
 */

var VueQrcode = {
    install(Vue, options) {
        Vue.component('qrcode', require('./v-qrcode.vue'))
    }
};

export default VueQrcode;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueQrcode)
}