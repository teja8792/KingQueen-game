<template>
  <div>
    <div class="uk-light">
      <button class="uk-button" @click="$router.back()">Go Back</button>
    </div>

    <div class="uk-margin uk-padding-small uk-light">
      <button class="uk-button uk-width-1-1 uk-margin uk-button-default">Add Friends</button>
      <button
        class="uk-button uk-width-1-1 uk-button-primary uk-button-large uk-text-bold"
        @click="$router.push('/pick')"
      >Ready</button>
    </div>
  </div>
</template>
