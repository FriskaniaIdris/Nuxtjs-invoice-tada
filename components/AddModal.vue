<template>
  <div class="min-h-screen min-w-full bg-black bg-opacity-30 fixed flex md:top-0 top-16 md:left-24 left-0">
    <div :class="`relative p-5 md:px-12 md:py-10 md:w-md sm:w-96 w-full min-h-screen md:rounded-r-2xl bg-${$store.state.theme.templateMode}-background`">
      <form @submit.prevent="saveChanges()">
        <div :class="`text-${$store.state.theme.templateMode}-text text-2xl font-bold mb-10`">
          Add New Invoice
        </div>
        <div>
          <div class="my-4">
              <label for="invoice_number" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">InvoiceNumber</label>
              <input
                type="text"
                id="invoice_number"
                :class="`
                  bg-${$store.state.theme.templateMode}-complementary
                  border
                  border-${$store.state.theme.templateMode}-complementary
                  text-${$store.state.theme.templateMode}-default-text
                  text-sm
                  rounded-md
                  focus:border-${$store.state.theme.templateMode}-unhover-text
                  block
                  w-full
                  p-2.5`"
                placeholder="Invoice Number"
                v-model="form.invoiceNumber">
          </div>
          <div class="my-4">
              <label for="full_name" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Full Name</label>
              <input
                type="text"
                id="full_name"
                :class="`
                  bg-${$store.state.theme.templateMode}-complementary
                  border
                  border-${$store.state.theme.templateMode}-complementary
                  text-${$store.state.theme.templateMode}-default-text
                  text-sm
                  rounded-md
                  focus:border-${$store.state.theme.templateMode}-unhover-text
                  block
                  w-full
                  p-2.5`"
                placeholder="Full Name"
                v-model="form.name">
          </div>
          <div class="my-4 relative">
              <label for="due_date" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Due Date</label>
              <input
                id="due_date"
                type="date"
                :class="`
                  bg-${$store.state.theme.templateMode}-complementary
                  border
                  border-${$store.state.theme.templateMode}-complementary
                  text-${$store.state.theme.templateMode}-default-text
                  rounded-md
                  focus:border-${$store.state.theme.templateMode}-unhover-text
                  block w-full p-2.5`"
                placeholder="Select date"
                v-model="form.dueDate">
          </div>
          <div class="my-4">
              <label for="amount" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Amount</label>
              <input
                type="text"
                id="amount"
                :class="`
                  bg-${$store.state.theme.templateMode}-complementary
                  border
                  border-${$store.state.theme.templateMode}-complementary
                  text-${$store.state.theme.templateMode}-default-text
                  text-sm
                  rounded-md
                  focus:border-${$store.state.theme.templateMode}-unhover-text
                  block
                  w-full
                  p-2.5`"
                placeholder="Amount"
                v-model="form.amount">
          </div>
        </div>
        <div :class="`bg-${$store.state.theme.templateMode}-background text-right absolute bottom-16 md:bottom-0 right-0 px-12 pt-8 w-full h-24`">
          <button
            type="button"
            :class="`bg-${$store.state.theme.templateMode}-complementary hover:bg-${$store.state.theme.templateMode}-background transition text-${$store.state.theme.templateMode}-default-text rounded-full py-2 px-4 bold`"
            @click="$emit('close-modal')">
            Close
          </button>
          <button
            :class="`bg-${$store.state.theme.templateMode}-cta-btn hover:bg-${$store.state.theme.templateMode}-cta-btn-shadow transition text-white rounded-full py-2 px-4 bold`"
            type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddInvoice',
  props: ['openModalAdd'],
  data(){
    return{
      form: {
        name: null,
        dueDate: null,
        amount: null
      }
    }
  },
  methods:{
    saveChanges() {
      this.$store.commit('invoice/addInvoice',
        {
          "invoiceNumber": this.form.invoiceNumber,
          "dueDate": this.form.dueDate,
          "name": this.form.name,
          "amount": this.form.amount,
          "status": 'Draft'
        }
      )
      this.$emit('close-modal')
    }
  }
}
</script>

<style>

</style>
