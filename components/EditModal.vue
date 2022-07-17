<template>
  <div class="min-h-screen min-w-full bg-black bg-opacity-30 fixed flex md:top-0 top-16 md:left-24 left-0">
    <div v-if="form" :class="`relative max-h-screen p-5 md:pl-12 md:pr-6 md:py-10 md:w-md sm:w-96 w-full min-h-screen md:rounded-r-2xl bg-${$store.state.theme.templateMode}-background`">
      <form @submit.prevent="saveChanges()">
        <div :class="`text-${$store.state.theme.templateMode}-text text-2xl font-bold mb-10`">
          Edit <span :class="`text-${$store.state.theme.templateMode}-unhover-text`">#</span>{{form?.invoiceNumber}}
        </div>
        <diV class="form-area overflow-y-auto">
          <div class="mb-4">
            <!-- Start Bill From Section -->
            <label for="bill_from" :class="`block text-sm text-${$store.state.theme.templateMode}-cta-btn`">Bill From</label>
            <div class="my-2">
              <label for="street_address" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Street Address</label>
              <input
                type="text"
                id="street_address"
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
                placeholder="Street Address"
                v-model="form.billFrom.streetAddress">
              <div class="flex">
                <div class="my-2">
                  <label for="city" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">City</label>
                  <input
                    type="text"
                    id="city"
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
                    placeholder="Street Address"
                    v-model="form.billFrom.city">
                </div>
                <div class="my-2 mx-2">
                  <label for="post_code" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Post Code</label>
                  <input
                    type="text"
                    id="post_code"
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
                    placeholder="Post Code"
                    v-model="form.billFrom.postCode">
                </div>
                <div class="my-2">
                  <label for="country" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Country</label>
                  <input
                    type="text"
                    id="country"
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
                    placeholder="Country"
                    v-model="form.billFrom.country">
                </div>
              </div>
            </div>
            <!-- End Bill From Section -->
            <!-- Start Bill To Section -->
            <div class="my-4">
              <label for="bill_from" :class="`block text-sm text-${$store.state.theme.templateMode}-cta-btn`">Bill To</label>
              <div class="my-2">
                <label for="client_name" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Client's Name</label>
                <input
                  type="text"
                  id="client_name"
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
                  placeholder="Client's Name"
                  v-model="form.name">
              </div>
              <div class="my-2">
                <label for="client_email" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Client's Email</label>
                <input
                  type="text"
                  id="client_email"
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
                  placeholder="Client's Name"
                  v-model="form.billTo.email">
              </div>
              <div class="my-2">
                <label for="street_address" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Street Address</label>
                <input
                  type="text"
                  id="street_address"
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
                  placeholder="Street Address"
                  v-model="form.billTo.streetAddress">
                </div>
              <div class="flex my-2">
                <div class="mx-2">
                  <label for="city" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">City</label>
                  <input
                    type="text"
                    id="city"
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
                    placeholder="Street Address"
                    v-model="form.billTo.city">
                </div>
                <div class="mx-2">
                  <label for="post_code" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Post Code</label>
                  <input
                    type="text"
                    id="post_code"
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
                    placeholder="Post Code"
                    v-model="form.billTo.postCode">
                </div>
                <div class="mx-2">
                  <label for="country" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Country</label>
                  <input
                    type="text"
                    id="country"
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
                    placeholder="Country"
                    v-model="form.billTo.country">
                </div>
              </div>
            </div>
            <!-- End Bill To Section -->
            <!-- Start Invoice Section -->
            <div class="flex mb-4">
              <div class="mx-2 relative">
                <label for="due_date" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Invoice Date</label>
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
                  v-model="form.dueDate"
                  disabled>
              </div>
              <div class="mx-2 relative">
                <label for="due_date" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Payment Terms</label>
                <select
                  :class="`
                    bg-${$store.state.theme.templateMode}-complementary
                    border
                    border-${$store.state.theme.templateMode}-complementary
                    text-${$store.state.theme.templateMode}-default-text
                    rounded-md
                    focus:border-${$store.state.theme.templateMode}-unhover-text
                    block w-full p-2.5`"
                  placeholder="Choose Terms"
                  v-model="form.terms">
                  <option value="">Choose Terms</option>
                  <option value="30">Net 30 Days</option>
                  <option value="60">Net 60 Days</option>
                  <option value="90">Net 90 Days</option>
                </select>
              </div>
            </div>
            <div class="mx-2 relative">
              <label for="project_desc" :class="`block mb-2 text-sm text-${$store.state.theme.templateMode}-text`">Project Description</label>
              <input
                id="project_desc"
                type="text"
                :class="`
                  bg-${$store.state.theme.templateMode}-complementary
                  border
                  border-${$store.state.theme.templateMode}-complementary
                  text-${$store.state.theme.templateMode}-default-text
                  rounded-md
                  focus:border-${$store.state.theme.templateMode}-unhover-text
                  block w-full p-2.5`"
                placeholder="Select date"
                v-model="form.projectDesc"
                disabled>
            </div>
          </div>
        </diV>
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
  name: 'EditInvoice',
  props: ['openModalEdit'],
  data(){
    return{
      form: null,
    }
  },
  mounted() {
    this.$store.dispatch('invoice/setDefaultInvoice')

    let path = this.$route.path.split("/")
    let invoiceNum = path[2];
    this.form = this.$store.state.invoice.invoiceData.find(invoice => { return invoiceNum == invoice.invoiceNumber});
  },
  methods:{
    saveChanges() {
      this.$store.commit('invoice/editInvoice',
        {
          "invoiceNumber": this.form.invoiceNumber,
          "dueDate": this.form.dueDate,
          "name": this.form.name,
          "amount": this.form.amount,
          "status": this.form.status,
          "terms": '30',
          "projectDesc": 'Graphic Designer',
          "itemList": [{
            "itemName": "Banner Design",
            "qty": 1,
            "price": "156.00",
            "total": "156.00"
          },{
            "itemName": "Email Design",
            "qty": 2,
            "price": "200.00",
            "total": "400.00"
          }],
          "billFrom": {
            "streetAddress": "19 Union Terrace",
            "city": "London",
            "postCode": "E1 3EZ",
            "country": "United Kingdom",
          },
          "billTo": {
            "email": "alexgrim@mail.com",
            "streetAddress": "84 Cruch Way",
            "city": "BradFord",
            "postCode": "BD1 9PB",
            "country": "United Kingdom",
          }
        }
      )
      this.$emit('close-modal')
      this.$nuxt.refresh()
    }
  }
}
</script>

<style>

</style>
