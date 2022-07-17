<template>
  <div class="px-2 py-2 rounded-md w-full text-center" :class="`bg-${this.$store.state.theme.templateMode}-${this.tagStyle}-bg text-${this.$store.state.theme.templateMode}-${this.tagStyle}-text`">
    <font-awesome-icon :icon="['fas', 'circle']" size="xs"/> {{ this.invoiceStatus }}
  </div>
</template>

<script>
export default {
  props: ['invoiceStatus'],
  data(){
    return{}
  },
  computed: {
    tagStyle() { // watch it
      switch(this.invoiceStatus) {
        case 'Paid':
          return 'success';
        case 'Pending':
          return 'warning';
        case 'Draft':
          return 'default';
        default:
          break;
      }
    }
  },
  mounted(){
    // switch(this.invoiceStatus) {
    //   case 'PAID':
    //     this.statusLabel = 'Paid'
    //     this.tagStyle = 'success'
    //     break;
    //   case 'PENDING':
    //     this.statusLabel = 'Pending'
    //     this.tagStyle = 'warning'
    //     break;
    //   case 'DRAFT':
    //     this.statusLabel = 'Draft'
    //     this.tagStyle = 'default'
    //     break;
    //   default:
    //     break;
    // }
  }
}
</script>

