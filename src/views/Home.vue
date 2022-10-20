<template>
  <Luisa :design="design" v-model="viewModel"/>

  

</template>


<script>
import app from './app.json'
import selectFile from './components/SimpleUpload'
import sendFile from './components/SimpleUpload'


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

  },
  methods: {
    selectFile,
    sendFile
  }
}
</script>