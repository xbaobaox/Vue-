const app = new Vue({
  el: "#app",
  data: {
    books: [
      { id: 1, name: '<算法导论>', data: '2006-9', price: 85.00, count: 1 },
      { id: 2, name: '<UNIX编程艺术>', data: '2006-2', price: 59.00, count: 1 },
      { id: 3, name: '<编程珠玑>', data: '2008-10', price: 39.00, count: 1 },
      { id: 4, name: '<代码大全>', data: '2006-3', price: 128.00, count: 1 },
    ],

  },
  methods: {
    getFinalPrice(price) {
      return '¥' + price.toFixed(2)
    },
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
      if (this.books[index].count > 1) {
        // this.books[index].count = 1
      }
    },
    removeHandle(index) {
      this.books.splice(index, 1)
    },
    // lastPrice() {

    //   this.books[index].price+=0
    // }
    // },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice;
    }
  },
  filters: { //它叫过滤器,可以通过管道符号"|" 使用它,它可以像"滤镜" 一样改变你的字符串.
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})
