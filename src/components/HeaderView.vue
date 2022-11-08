<template>
   <div class="header">
      <div class="header__logo">
         <img src="@/assets/etton logo.png" alt="Логотип компаниии Эттон">
      </div>
      <ul class="header__list">
         <router-link to="/main">
            <li class="header__item">
               <span>Главная</span>
            </li>
         </router-link>
         <router-link to="/catalog">
            <li class="header__item">
               <span>Каталог</span>
            </li>
         </router-link>
      </ul>
   </div>
</template>

<script>

export default {

   data() {
      return {

      }
   },

   methods: {


   }
}

</script>

<style lang="scss">
.header {
   display: flex;
   transition: none;
}

.header__list {
   display: flex;
   list-style: none;
   flex-direction: row;
   align-items: center;
}

.header__logo {
   display: flex;
   align-items: center;
}

.header__item {
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   padding: 8px 27px;
   width: 115px;
   height: 25px;
   left: 195px;
   top: 20px;
   border: 1px solid rgb(197, 118, 118);
   border-radius: 29px;
   margin-left: 15px;
   margin-right: -2px;
   padding-left: 31px;
   padding-top: 17px;
}

span {
   display: flex;
   margin-left: 26px;
   margin-top: -3px;
}

.router-link-active .header__item {
   background-color: #724df0;
}
</style>