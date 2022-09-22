import json from "@/assets/data/data.json";

export default {
  name: "CardTile",
  components: {},
  props: ["card"],
  data() {
    return {
      data: json,
    };
  },
};
