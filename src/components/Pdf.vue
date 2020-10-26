<template>
    <div class="Pdf">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          
        </div>
        <div class="col-4"></div>
      </div>
      <button @click="shipMate">

      </button>
    </div>
</template>

<script>
// import fillForm from '@sparticuz/pdffiller';
// fillForm = require("@sparticuz/pdffiller").default;
// import { generateFDFTemplate } from '@sparticuz/pdffiller';
// const generateFDFTemplate = require('@sparticuz/pdffiller').default;
// const sourcePDF = "@/assets/pdf-templates/contract.pdf";
// const { fields } = require('pdf-form-fill');
import { PDFDocument } from 'pdf-lib';
export default {
  name: 'Pdf',
  props: {
    msg: String
  },
  methods: {
    shipMate() {

    },
  },
  created() {
    this.shipMate();
  },
}
</script>

<style>

</style>