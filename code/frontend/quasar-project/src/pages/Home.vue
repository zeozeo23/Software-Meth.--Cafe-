<template>
  <q-page padding>
    <q-uploader
      style="max-width: 300px"
      :factory="uploadImage"
      accept="image/jpeg, image/png"
      label="Max number of files (2)"
      multiple
      max-files="2"
      @uploaded="onUploaded"
      @failed="onFailed"
      @rejected="onRejected"
    />
  </q-page>
</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
      data: [],
      columns: [
        {
          name: "name",
          label: "Name",
          field: "name",
        },
      ],
    };
  },
  methods: {
    uploadImage(file) {
      return {
        url: "http://localhost:5000/api/upload",
        method: "POST",
      };
    },
    onUploaded(info) {
      let files = info.files;
      files.forEach((item) => {
        this.$q.notify({
          type: "positive",
          message: `${item.name} successfully uploaded`,
        });
      });
    },
    onFailed(info) {
      let err = JSON.parse(info.xhr.response);
      console.log(err);
      let files = info.files;
      files.forEach((item) => {
        this.$q.notify({
          type: "negative",
          message: `${item.name} - ${err.error} Error ${err.message}`,
        });
      });
    },
    onRejected(rejectedEntries) {
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
  },
};
</script>
