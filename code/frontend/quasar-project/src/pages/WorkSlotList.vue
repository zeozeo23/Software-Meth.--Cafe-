<template>
  <!--
  Forked from:
  https://quasar.dev/vue-components/table#Example--Popup-editing
-->
  <div id="q-app">
    <div class="q-pa-sm q-gutter-sm">
      <q-table
        style="font-size: 18px"
        title="Work Slot List"
        :rows="data"
        :columns="columns"
      >
        <template v-slot:top-right>
          <q-btn
            no-caps
            flat
            outline
            dense
            color="primary"
            label="Create Slot"
            @click="page()"
          ></q-btn>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td v-for="col in columns" :key="col.name" :props="props">{{
              props.row[col.name]
            }}</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { api } from "boot/axios";

export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "slotDate",
          align: "center",
          label: "SlotDate",
          field: "slotDate",
          sortable: true,
        },
      
      ],
      data: [],
      filter: "",
      pagination: {
        rowsPerPage: 10,
      },
      sorting: {
        sortBy: "name",
        descending: false,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    page() {
      this.$router.push("/slot");
    },
    fetchData() {
      api
        .get("http://xx")
        .then((response) => {
          this.data = response.data;
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
<style lang="sass">
.q-table__title
  font-size: 25px
.my-sticky-header-column-table
  height: 310px
  max-width: 600px

  td:first-child
    background-color: #c1f4cd !important

  tr th
    position: sticky
    z-index: 2
    background: #fff

  thead tr:last-child th
    top: 48px
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0
</style>
