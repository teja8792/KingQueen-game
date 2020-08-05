<template>
  <div class="uk-padding-small uk-light">
    <div>
      <button class="uk-button uk-margin" @click="$router.push('/')">
        <span uk-icon="arrow-left"></span> Back
      </button>
    </div>
    <div>
      <button class="uk-button uk-button-default uk-width-1-1 uk-margin">Join Game</button>
      <button
        class="uk-button uk-button-primary uk-text-bold uk-button-large uk-width-1-1"
        @click="$router.push('/ready')"
      >New Game</button>
    </div>
  </div>
</template>
