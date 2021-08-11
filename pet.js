new Vue({
  el: '#app',
  data: {
    text: '',
   petName: [],
   selected: ''
  },
  methods: {
    onAdd() {
      this.petName.push(this.text)
      this.text = ''
      this.select.push(this.text)
    },
    onClear() {
      this.text = ''
    }
  }
})
