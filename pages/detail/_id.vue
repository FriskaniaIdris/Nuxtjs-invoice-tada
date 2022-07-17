<template>
  <div :class="`bg-${$store.state.theme.templateMode}-background min-h-screen min-w-full`">
    <Navbar />
    <div class="md:max-w-screen-md sm:max-w-screen-sm md:p-14 px-4 container mx-auto pt-24">
      <transition name="slide-top-bottom" appear>
        <div v-cloak :class="`p-4 mb-4 w-full rounded-lg bg-${$store.state.theme.templateMode}-complementary`">
          <div class="flex flex-col md:flex-row justify-between md:items-center">
            <div class="flex md:flex-row flex-row-reverse justify-between items-center">
              <div class="inline-block mr-4"><TagStatus :invoice-status="selectedInvoice?.status"/></div>
              <div :class="`text-${$store.state.theme.templateMode}-text`">
                <span :class="`text-${$store.state.theme.templateMode}-unhover-text`">Invoice Number</span>
                <p class="text-3xl font-bold">
                  <span :class="`text-${$store.state.theme.templateMode}-unhover-text`">#</span>{{ selectedInvoice?.invoiceNumber }}
                </p>
                <small>Due {{ selectedInvoice?.dueDate }}</small>
              </div>
            </div>
            <div class="my-2">
              <button
                v-if="selectedInvoice?.status != 'Paid'"
                @click="showModalEdit()"
                :class="`bg-${$store.state.theme.templateMode}-background hover:bg-${$store.state.theme.templateMode}-complementary transition text-${$store.state.theme.templateMode}-default-text rounded-full py-2 px-4 bold`">
                Edit
              </button>
              <button
                @click="deleteInvoice()"
                :class="`bg-${$store.state.theme.templateMode}-danger-text hover:bg-${$store.state.theme.templateMode}-danger-bg transition text-white rounded-full py-2 px-4 bold`">
                Delete
              </button>
              <button
                @click="updateInvoiceStatus('Paid')"
                v-if="selectedInvoice?.status == 'Pending'"
                :class="`bg-${$store.state.theme.templateMode}-cta-btn hover:bg-${$store.state.theme.templateMode}-cta-btn-shadow transition text-white rounded-full py-2 px-4 bold`">
                Mark as Paid
              </button>
              <button
                @click="updateInvoiceStatus('Pending')"
                v-if="selectedInvoice?.status == 'Draft'"
                :class="`bg-${$store.state.theme.templateMode}-cta-btn hover:bg-${$store.state.theme.templateMode}-cta-btn-shadow transition text-white rounded-full py-2 px-4 bold`">
                Submit Invoice
              </button>
            </div>
          </div>
        </div>
      </transition>
      <transition name="slide-left-right" appear>
        <div v-cloak :class="`p-4 mb-4 w-full rounded-lg bg-${$store.state.theme.templateMode}-complementary`">
          <div class="flex">
            <div :class="`text-${$store.state.theme.templateMode}-text`">
              <span :class="`text-${$store.state.theme.templateMode}-unhover-text`">Full Name</span>
              <p class="text-3xl font-bold mb-4">
                {{ selectedInvoice?.name }}
              </p>
              <span :class="`text-${$store.state.theme.templateMode}-unhover-text`">Invoice Amount</span>
              <p class="text-3xl font-bold">
                £ {{ selectedInvoice?.amount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
              </p>
            </div>
            <div class="flex">

            </div>
          </div>
        </div>
      </transition>
    </div>
    <transition name="slide-left-right" appear>
      <EditModal v-show="openModalEdit" @close-modal="hideModalEdit()"/>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedInvoice: {},
      openModalEdit: false
    }
  },
  mounted() {
    this.$store.dispatch('invoice/setDefaultInvoice')

    let path = this.$route.path.split("/")
    let invoiceNum = path[2];
    this.selectedInvoice = this.$store.state.invoice.invoiceData.find(invoice => { return invoiceNum == invoice.invoiceNumber});
  },
  watch: {
    '$store.state.invoice.invoiceData': function() {
      let path = this.$route.path.split("/")
      let invoiceNum = path[2];
      this.selectedInvoice = this.$store.state.invoice.invoiceData.find(invoice => { return invoiceNum == invoice.invoiceNumber});
    }
  },
  methods:{
    deleteInvoice(){
      this.$store.commit('invoice/removeInvoice', this.selectedInvoice.invoiceNumber)
      this.$router.push('/')
    },
    updateInvoiceStatus(status){
      let index = this.$store.state.invoice.invoiceData.findIndex(invoice => this.selectedInvoice.invoiceNumber == invoice.invoiceNumber)
      this.$store.commit('invoice/updateInvoiceStatus', {index: index, status:status})
    },
    showModalEdit(){
      this.openModalEdit = true
      document.body.classList.add("modal-open")
    },
    hideModalEdit(){
      this.openModalEdit = false
      document.body.classList.remove("modal-open")
    }
  }
}
</script>
