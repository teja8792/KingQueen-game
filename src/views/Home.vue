<template>
  <div class>
    <div class="uk-padding-small">
      <div class>
        <div>
          <label for="displayName">Display Name</label>
          <input id="displayName" name="displayName" class="uk-input">
        </div>
        <div class="uk-margin">
          <button class="uk-button uk-button-default" @click="$router.push('/newgame')">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
