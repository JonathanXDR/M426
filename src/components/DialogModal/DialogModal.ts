import { defineComponent } from "vue";
import ExclamationmarkCircle from "@/components/Icons/ExclamationmarkCircle.vue";
import json from "@/assets/data/data.json";

export default defineComponent({
  name: "DialogModal",
  props: ["score"],
  emits: ["submitResults"],
  components: {
    ExclamationmarkCircle,
  },
  data() {
    return {
      data: json.components[0].data[2].data,
      modalOpen: false,
      userName: "",
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
  },
  computed: {
    formValid: function () {
      return this.userName;
    },
  },
});
