import { RouterLink, RouterView } from "vue-router";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner.vue";
import NavBar from "@/components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    LoadingSpinner,
    NavBar,
  },
  created() {
    function storeTheme(themeName: any) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    }

    if (localStorage.getItem("theme") === "light") {
      storeTheme("light");
    } else {
      storeTheme("dark");
    }
  },
};
