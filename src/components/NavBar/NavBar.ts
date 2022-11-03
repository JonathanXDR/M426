import LogoIcon from "@/components/Icons/LogoIcon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  emits: ["updateAnimations"],
  components: {
    LogoIcon,
  },
  data() {
    return {
      items: [
        { name: "Home", route: "/" },
        { name: "Scoreboard", route: "/scoreboard" },
      ],
      themeDark: false,
      navOpen: false,
      navDisabled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    // get prefered theme from settings, if local storage is empty
    if (localStorage.getItem("theme") === null) {
      const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)");

      if (preferedTheme.matches) {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
    } else {
      if (localStorage.getItem("theme") === "dark") {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
    }
  },
  methods: {
    // update theme
    toggleTheme() {
      this.themeDark = !this.themeDark;
      if (this.themeDark) {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
      this.updateAnimations();
    },

    // store theme in local storage
    storeTheme(themeName: string): void {
      this.themeDark = themeName === "dark";
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    },

    // open the navbar
    toggleNav(): void {
      this.navOpen = !this.navOpen;
      this.checkboxTimeout();
    },

    // disable the navbar
    checkboxTimeout(): void {
      this.navDisabled = true;
      setTimeout(() => {
        this.navDisabled = false;
      }, 1000);
    },

    // close navbar if user is scrolling
    handleScroll(): void {
      if ((this.navOpen = true && window.scrollY > 0)) {
        this.navOpen = false;
      }
    },
  },
});
