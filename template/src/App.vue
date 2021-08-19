<template>
  <div id="app">
    <div id="nav">
      {{#router}}
      <router-link to="/">Home</router-link>
      {{/router}}
    </div>
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<style scoped {{#if_eq cssPreprocessor "Do not use"}}{{else}}lang="{{cssPreprocessor}}"{{/if_eq}}>
</style>
