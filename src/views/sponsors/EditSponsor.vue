<template>
  <section class="page-section">
     <b-container>
      <HeaderPage title="Editar Sponsor"/>
   
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="sponsor.name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="sponsor.percentagem"
                type="text"
                class="form-control form-control-lg"
                id="txtPercentagem"
                placeholder="Percentagem"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="sponsor.tiposponsor"
                type="text"
                class="form-control form-control-lg"
                id="txtTipoSponsor"
                placeholder="Tipo de Sponsor"
                required
              />
            </div>

            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-edit"></i> ATUALIZAR</button>
            <router-link
              :to="{name: 'listSponsors'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
     </b-container>
  </section>
</template>

<script>
import { EDIT_SPONSOR } from "@/store/sponsors/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditSponsor",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      sponsor: {}
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getSponsorsById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`user/${EDIT_SPONSOR}`, this.$data.sponsor).then(
        () => {
          this.$alert(
            this.getMessage,
            "Sponsor atualizado!",
            "success"
          );
          router.push({name: 'listSponsors'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.sponsor = this.getSponsorsById(this.$route.params.sponsorId);
  }
};
</script>
