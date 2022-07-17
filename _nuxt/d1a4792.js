(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{275:function(e,t,o){"use strict";o.r(t);o(109),o(26);var n={name:"AddInvoice",props:["openModalAdd"],data:function(){return{form:{name:null,dueDate:null,amount:null}}},methods:{saveChanges:function(){this.$store.commit("invoice/addInvoice",{invoiceNumber:this.form.invoiceNumber,dueDate:this.form.dueDate,name:this.form.name,amount:this.form.amount,status:"Draft"}),this.$emit("close-modal")}}},m=o(44),component=Object(m.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"min-h-screen min-w-full bg-black bg-opacity-30 fixed flex md:top-0 top-16 md:left-24 left-0"},[t("div",{class:"relative p-5 md:px-12 md:py-10 md:w-md sm:w-96 w-full min-h-screen md:rounded-r-2xl bg-".concat(e.$store.state.theme.templateMode,"-background")},[t("form",{on:{submit:function(t){return t.preventDefault(),e.saveChanges()}}},[t("div",{class:"text-".concat(e.$store.state.theme.templateMode,"-text text-2xl font-bold mb-10")},[e._v("\n        Add New Invoice\n      ")]),e._v(" "),t("div",[t("div",{staticClass:"my-4"},[t("label",{class:"block mb-2 text-sm text-".concat(e.$store.state.theme.templateMode,"-text"),attrs:{for:"invoice_number"}},[e._v("InvoiceNumber")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.invoiceNumber,expression:"form.invoiceNumber"}],class:"\n                bg-".concat(e.$store.state.theme.templateMode,"-complementary\n                border\n                border-").concat(e.$store.state.theme.templateMode,"-complementary\n                text-").concat(e.$store.state.theme.templateMode,"-default-text\n                text-sm\n                rounded-md\n                focus:border-").concat(e.$store.state.theme.templateMode,"-unhover-text\n                block\n                w-full\n                p-2.5"),attrs:{type:"text",id:"invoice_number",placeholder:"Invoice Number"},domProps:{value:e.form.invoiceNumber},on:{input:function(t){t.target.composing||e.$set(e.form,"invoiceNumber",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"my-4"},[t("label",{class:"block mb-2 text-sm text-".concat(e.$store.state.theme.templateMode,"-text"),attrs:{for:"full_name"}},[e._v("Full Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],class:"\n                bg-".concat(e.$store.state.theme.templateMode,"-complementary\n                border\n                border-").concat(e.$store.state.theme.templateMode,"-complementary\n                text-").concat(e.$store.state.theme.templateMode,"-default-text\n                text-sm\n                rounded-md\n                focus:border-").concat(e.$store.state.theme.templateMode,"-unhover-text\n                block\n                w-full\n                p-2.5"),attrs:{type:"text",id:"full_name",placeholder:"Full Name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"my-4 relative"},[t("label",{class:"block mb-2 text-sm text-".concat(e.$store.state.theme.templateMode,"-text"),attrs:{for:"due_date"}},[e._v("Due Date")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dueDate,expression:"form.dueDate"}],class:"\n                bg-".concat(e.$store.state.theme.templateMode,"-complementary\n                border\n                border-").concat(e.$store.state.theme.templateMode,"-complementary\n                text-").concat(e.$store.state.theme.templateMode,"-default-text\n                rounded-md\n                focus:border-").concat(e.$store.state.theme.templateMode,"-unhover-text\n                block w-full p-2.5"),attrs:{id:"due_date",type:"date",placeholder:"Select date"},domProps:{value:e.form.dueDate},on:{input:function(t){t.target.composing||e.$set(e.form,"dueDate",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"my-4"},[t("label",{class:"block mb-2 text-sm text-".concat(e.$store.state.theme.templateMode,"-text"),attrs:{for:"amount"}},[e._v("Amount")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.amount,expression:"form.amount"}],class:"\n                bg-".concat(e.$store.state.theme.templateMode,"-complementary\n                border\n                border-").concat(e.$store.state.theme.templateMode,"-complementary\n                text-").concat(e.$store.state.theme.templateMode,"-default-text\n                text-sm\n                rounded-md\n                focus:border-").concat(e.$store.state.theme.templateMode,"-unhover-text\n                block\n                w-full\n                p-2.5"),attrs:{type:"text",id:"amount",placeholder:"Amount"},domProps:{value:e.form.amount},on:{input:function(t){t.target.composing||e.$set(e.form,"amount",t.target.value)}}})])]),e._v(" "),t("div",{class:"bg-".concat(e.$store.state.theme.templateMode,"-background text-right absolute bottom-16 md:bottom-0 right-0 px-12 pt-8 w-full h-24")},[t("button",{class:"bg-".concat(e.$store.state.theme.templateMode,"-complementary hover:bg-").concat(e.$store.state.theme.templateMode,"-background transition text-").concat(e.$store.state.theme.templateMode,"-default-text rounded-full py-2 px-4 bold"),attrs:{type:"button"},on:{click:function(t){return e.$emit("close-modal")}}},[e._v("\n          Close\n        ")]),e._v(" "),t("button",{class:"bg-".concat(e.$store.state.theme.templateMode,"-cta-btn hover:bg-").concat(e.$store.state.theme.templateMode,"-cta-btn-shadow transition text-white rounded-full py-2 px-4 bold"),attrs:{type:"submit"}},[e._v("\n          Save Changes\n        ")])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);