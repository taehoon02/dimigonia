<template>
  <div class="product-detail">
    <product-nav title="제품 정보"></product-nav>
    <div class="section">
      <product-card></product-card>
      <product-detail-card></product-detail-card>
    </div>
    <div class="floating-button">
      <button class="float" @click="searchUsed">
        <span>중고 상품으로 알아보기</span>
      </button>
    </div>
  </div>
</template>

<script>
import ProductNav from "@/components/ProductNav";
import ProductCard from "@/components/ProductCard2";
import ProductDetailCard from "@/components/ProductDetailCard";

export default {
  components: {
    ProductNav,
    ProductCard,
    ProductDetailCard
  },
  methods: {
    searchUsed() {
      alert("중고 상품으로 알아보기");
    }
  }
};
</script>

<style lang="scss" scoped>
.product-detail {
  background-color: #f5f5f5;
}

.section {
  border-top: 1px solid #aaa;
  padding-bottom: 2rem;
}

.float {
  position: fixed;
  width: 330px;
  height: 50px;
  bottom: 40px;
  right: 35px;
  background-color: #0043ca;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
</style>
