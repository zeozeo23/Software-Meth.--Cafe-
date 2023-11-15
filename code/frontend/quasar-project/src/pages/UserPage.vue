<template>
  <div id="q-app">
    <div class="q-pa-sm q-gutter-sm">
      <q-table
        title="List of Users"
        :rows="data"
        :columns="columns"
        :filter="filter"
        :pagination="pagination"
        :sorting="sorting"
      >
        <template v-slot:top-right>
          <q-btn
            no-caps
            flat
            outline
            dense
            color="primary"
            label="Create new user"
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
      data: [],

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
          name: "email",
          align: "center",
          label: "Email",
          field: "email",
          sortable: true,
        },
       
      ],
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
      this.$router.push("/userForm");
    },
    fetchData() {
      api
        .get("http://xx")
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch((error) => {
          console.error("Error fetching JSON data:", error);
        });
    },
  },
};
</script>
<style lang="sass">
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
