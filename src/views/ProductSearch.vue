<template>
  <div class="product-search">
    <product-nav title="상품 검색"></product-nav>
    <div class="section">
      <img class="image" src="../assets/product_search-example.png">
    </div>
    <div class="section">
      <div class="title">상품 검색 결과입니다.</div>
      <div class="content">
        <div @click="gotoDetail">
          <product-card></product-card>
        </div>
      </div>
    </div>
    <div class="footer">
      <button class="no-product" @click="gotoHome">원하는 상품이 없으신가요?</button>
    </div>
  </div>
</template>

<script>
import ProductNav from "@/components/ProductNav";
import ProductCard from "@/components/ProductCard";

export default {
  components: {
    ProductNav,
    ProductCard
  },
  methods: {
    gotoHome() {
      this.$router.push({
        name: "home"
      });
    },

    gotoDetail() {
      this.$router.push({
        name: "detail"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product-search {
  background-color: #f5f5f5;
}

.image {
  width: 100%;
  height: 200px;
}

.title {
  height: 50px;
  padding-top: 1rem;
  padding-left: 1rem;
  font-size: 21px;
  background-color: #fff;
}

.content {
  height: 230px;
}

.footer {
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  height: 50px;
  padding: 1rem;
}

.no-product {
  width: 300px;
  background-color: #0043ca;
  font-size: 1rem;
  color: #fff;
  padding: 1rem;
}
</style>
