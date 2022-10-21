<template>

  <SimpleUpload/>

</template>


<script>
import app from './app.json'
import SimpleUpload from './components/SimpleUpload.vue'


export default {
  name: 'Home',
  data: function() {
    return {
      design: app,
      viewModel: {
        
      },
      config: {

      }
    }
  },
  components: {
    SimpleUpload
  },
  
  methods: {
  },
}
</script>