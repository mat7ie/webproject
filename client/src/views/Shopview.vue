<script>
import SliderShop from '@/components/SliderShop.vue'
import HeaderShop from '@/components/HeaderShop.vue'
import ProductService from '../services/Product.service'
import { mapState } from "pinia";
import { useAuthStore } from "@/stores/Auth.store";
import toastsVue from '../components/toasts.vue';
export default {
    data() {
        return {
            Products: [],
        }
    },
    components: {
        HeaderShop,
        SliderShop,
        toastsVue
    },
    computed: {
        ...mapState(useAuthStore, {
            currentUser: "user",
        }),
    },
    methods: {
        async retrieveProduct() {
            try {
                this.Products = await ProductService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.retrieveProduct();
    },
}
</script>
<template>
    <div class="header">
        <HeaderShop></HeaderShop>
    </div>
    <toastsVue></toastsVue>
    <div class="slider">
        <SliderShop></SliderShop>
    </div>
    <div class="shop">
        <div style="text-align: center; margin: 30px 0;" class="heading">
            <h3>SẢN PHẨM TẠI CỬA HÀNG</h3>
        </div>
        <div class="d-sm-flex flex-wrap" id="giay">
            <div class="card m-1" style="width: 19rem;" v-for="item in Products" v-show="item">
                <div>
                    <div>
                        <div class="image_item" v-for="img in item.img">
                            <img :src="img" class="card-img-top" alt="..." @click="nextdetailsproduct">

                        </div>
                    </div>
                </div>
         
                <div class="card-body product align-center ">
                    <h5 class="card-title text-center">{{ item.title }}</h5>
                    <h6 class="price text-center">{{ item.price }} VNĐ</h6>
                    <router-link :to="{
                        name: 'details',
                        params: { id: item._id },
                    }">
                    <div class="d-grid ">
                        <button type="button" s class="btn btn-primary" @click="nextdetailsproduct">
                            Mua hàng
                        </button>
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
   .shop{
    margin: 20px 100px;
   }

   .image_item {
       flex: 1 0 100%;
   }

   .button{
    background: rgb(218,214,20);
    background: linear-gradient(90deg, rgba(218,214,20,1) 0%, rgba(214,98,13,1) 50%, rgba(252,56,56,1) 100%);
   }
</style>