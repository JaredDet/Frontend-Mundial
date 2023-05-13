<template>
  <v-container>
    <v-row class="justify-center">
      <v-col>
        <div>
          <span
            :class="'flag-icon fi fi-' + local.bandera"
            class="bandera-tecnicos separar-titulos"
          ></span>
        </div>
        <div>
            {{local.tecnico}}
        </div>
      </v-col>
      <v-col class="text-center">
        <div class="titulo">
          <span>{{ titulo.nombre }}</span>
        </div>
      </v-col>
      <v-col class="text-right">
        <div>
          <span
            :class="'flag-icon flag-icon-squared fi fi-' + visita.bandera"
            class="bandera-tecnicos separar-titulos"
          ></span>
        </div>
         <div>
            {{visita.tecnico}}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      local: {
        bandera: "br",
        tecnico: "L. Scolari",
      },
      titulo: { nombre: "Director Técnico" },
      visita: {
        bandera: "nl",
        tecnico: "L. van Gaal",
      },
    };
  },
};
</script>

<style>
.bandera-tecnicos {
  border: 0.1rem solid white;
  font-size: 1.2rem;
  box-sizing: content-box;
  padding: 0.05rem;
}

.titulo {
  letter-spacing: 0.05rem;
  white-space: nowrap;
  font-size: 1.2rem;
}

.separar-titulos {
  margin-bottom: 0.55rem;
}

</style>