<template>
  
  <section class="page-section">
    <b-container>
      <HeaderPage title="Adicionar Expert"/>
     
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
            <div class="form-group">
              <input
                v-model="name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="Nome do Expert"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="classe"
                type="text"
                class="form-control form-control-lg"
                id="txtClasse"
                placeholder="Classe"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="tipoexpert"
                type="text"
                class="form-control form-control-lg"
                id="txtTipoExpert"
                placeholder="Tipo de Expert"
                required
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-plus-square"></i> ADICIONAR
            </button>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            >
            <i class="fas fa-window-close"></i> CANCELAR
            </router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { ADD_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddExpert",
   components: {
    HeaderPage
  },
  data: () => {
    return {
      name: "",
      classe: "",
      tipoexpert: ""
    };
  },
  computed: {
     ...mapGetters("expert", ["getMessage"]),
  },
  methods: {
    add() {
      
        this.$store.dispatch(`expert/${ADD_EXPERT}`, this.$data).then(
          () => {
            this.$alert(
              this.getMessage,
              "Perito adicionado!",
              "success"
            );
            router.push({name: 'listExperts'});
          },
          err => {
            this.$alert(`${err.message}`, "Erro", "error");
          }
        );
      
    }
  }
};
</script>