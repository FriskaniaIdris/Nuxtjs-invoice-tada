<template>
  <div :class="`bg-${$store.state.theme.templateMode}-background min-h-screen min-w-full`">
    <Navbar />
    <div class="md:max-w-screen-sm lg:max-w-screen-md lg:p-14 md:pl-32 px-5 container mx-auto pt-24 pb-4">
      <transition name="slide-top-bottom" appear>
        <div v-cloak class="flex justify-between items-center mb-14">
          <div :class="`text-${$store.state.theme.templateMode}-text`">
            <p class="text-3xl font-bold">Invoices</p>
            <small v-cloak>There are {{$store.state.invoice.invoiceData.length}} total invoices</small>
          </div>
          <div class="text-right">
            <select
              :class="`py-2 my-2 cursor-pointer bg-${$store.state.theme.templateMode}-background text-${$store.state.theme.templateMode}-text text-sm rounded-lg`"
              v-model="filterByStatus" @change="doFilter">
              <option value="" selected>Filter by status</option>
              <option v-for="(option, index) in filterByStatusData.options" :key="index" :value="option.value">{{option.label}}</option>
            </select>
            <button
              :class="`md:ml-3 bg-${$store.state.theme.templateMode}-cta-btn hover:bg-${$store.state.theme.templateMode}-cta-btn-shadow transition text-white rounded-full p-2 bold`"
              @click="showModalAdd()">
              <div :class="`w-6 h-6 rounded-full bg-white text-${$store.state.theme.templateMode}-cta-btn inline-block`">
                <font-awesome-icon :icon="['fas','plus']" size="sm" />
              </div>
              <div class="inline-block px-2">New <span class="hidden md:inline-block">Invoices</span></div>
            </button>
          </div>
        </div>
      </transition>
      <CardList v-for="(invoice, index) in invoiceData" :key="index" :data="invoice" />
    </div>
    <transition name="slide-left-right" appear>
      <AddModal v-show="openModalAdd" @close-modal="hideModalAdd()"/>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      openModalAdd: false,
      filterByStatus: '',
      filterByStatusData: {
        options: [
          {
            value: 'Paid',
            label: 'Paid'
          },
          {
            value: 'Pending',
            label: 'Pending'
          },
          {
            value: 'Draft',
            label: 'Draft'
          }
        ]
      },
      invoiceData: []
    }
  },
  mounted() {
    this.$store.dispatch('invoice/setDefaultInvoice')
    this.invoiceData = this.$store.state.invoice.invoiceData
  },
  watch: {
    '$store.state.invoice.invoiceData': function() {
      this.invoiceData = this.$store.state.invoice.invoiceData
    }
  },
  methods: {
    doFilter(){
      if(this.filterByStatus != ""){
        console.log('lul')
        this.invoiceData = this.$store.state.invoice.invoiceData.filter(invoice => {console.log(invoice.status); return invoice.status == this.filterByStatus})
      }else{
        this.invoiceData = this.$store.state.invoice.invoiceData
      }
    },
    showModalAdd(){
      this.openModalAdd = true
      document.body.classList.add("modal-open")
    },
    hideModalAdd(){
      this.openModalAdd = false
      document.body.classList.remove("modal-open")
    }
  }
}
</script>

<style>
  [v-cloak] {
      display: none;
  }
</style>
