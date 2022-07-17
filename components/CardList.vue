<template>
  <NuxtLink :to="`/detail/${data.invoiceNumber}`">
    <transition name="slide-left-right" appear>
      <div :class="`p-4 mb-4 w-full rounded-lg bg-${$store.state.theme.templateMode}-complementary cursor-pointer border-2 border-${$store.state.theme.templateMode}-complementary transition hover:border-${$store.state.theme.templateMode}-unhover-text`">
        <div :class="`hidden lg:block`">
          <div :class="`flex text-${$store.state.theme.templateMode}-text justify-between items-center`">
            <div class="px-2 font-bold shrink"><span :class="`text-${$store.state.theme.templateMode}-unhover-text`">#</span>{{ data.invoiceNumber }}</div>
            <div class="px-2 grow">Due {{ $moment(data?.dueDate).format("DD MMM YYYY") }}</div>
            <div class="px-2 flex-1">{{ data.name }}</div>
            <div class="px-2 font-bold flex-1 text-right">£ {{ data?.amount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
            <div class="px-2 flex-1"><TagStatus :invoice-status="data.status"/></div>
            <div :class="`flex-none text-${$store.state.theme.templateMode}-cta-btn font-extrabold ml-4`"><font-awesome-icon :icon="['fas','chevron-right']" size="sm"/></div>
          </div>
        </div>
        <div :class="`block lg:hidden`">
          <div :class="`flex text-${$store.state.theme.templateMode}-text justify-between items-center`">
            <div class="font-bold flex-1"><span :class="`text-${$store.state.theme.templateMode}-unhover-text`">#</span>{{ data.invoiceNumber }}</div>
            <div class="flex-1 text-right">{{ data.name }}</div>
          </div>
          <div :class="`flex text-${$store.state.theme.templateMode}-text justify-between items-center`">
            <div>
              <div class="flex-1">Due {{ data.dueDate }}</div>
              <div class="font-bold flex-1">£ {{ data?.amount?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
            </div>
            <div>
              <div class="inline-block"><TagStatus :invoice-status="data.status"/></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </NuxtLink>
</template>

<script>
import moment from 'moment';
export default {
  props: ['data']
}
</script>
