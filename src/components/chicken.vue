<template>
  <div class="test">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <h1>Hola Mundo!</h1>
      </div>
      <div class="col-4"></div>
    </div>
    <button @click="show"></button>
  </div>
</template>

<script>
import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
export default {
  name: 'test', 
  methods: {
    async show() {
      // const srcPdf = '@/assets/pdf-templates/contract.pdf';
      // These should be Uint8Arrays or ArrayBuffers
      // This data can be obtained in a number of different ways
      // If your running in a Node environment, you could use fs.readFile()
      // In the browser, you could make a fetch() call and use res.arrayBuffer()
      // const formPdfBytes = ...
      // const marioImageBytes = ...
      // const emblemImageBytes = ...
      const srcPdf = '@/assets/pdf-templates/vital_signs_log.pdf';
      let samplePdf = fs.readFile(srcPdf);
      
      // Load a PDF with form fields
      // const pdfDoc = await PDFDocument.load(formPdfBytes)
      const pdfDoc = await PDFDocument.load(samplePdf);
      
      // Embed the Mario and emblem images
      // const marioImage = await pdfDoc.embedPng(marioImageBytes)
      // const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
      
      // Get the form containing all the fields
      const form = pdfDoc.getForm()
      console.log('contract fields: '+JSON.stringify(form));
    },
  },
}
</script>

<style scoped>

</style>