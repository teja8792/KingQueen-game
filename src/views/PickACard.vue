<template>
  <div>
    <div class="uk-padding-small uk-light">
      <button class="uk-button" @click="$router.back()">Back</button>
      <div v-if="!number" class="uk-alert uk-alert-primary uk-border-rounded" show>Pick a number</div>
      <div
        v-else
        class="uk-alert uk-alert-primary uk-border-rounded"
        show
      >You picked {{number}} and your character is XXXX</div>
    </div>
    <div class="uk-padding-small">
      <div class="uk-child-width-1-3" uk-grid>
        <div v-for="n in 6" :key="n +'-pick'">
          <div
            class="uk-card uk-card-default uk-padding-small uk-border-rounded uk-text-center"
            @click="numberClicked(n)"
          >{{n}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PickNumber",
  data() {
    return {
      number: null
    };
  },
  methods: {
    numberClicked(n) {
      this.number = n;
    }
  }
};
</script>
