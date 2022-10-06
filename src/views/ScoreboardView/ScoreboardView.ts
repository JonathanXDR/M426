import type { ScoreBaseDTO } from "@/dto/ScoreBaseDTO";
import ApiService from "@/services/ApiService";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScoreboardView",
  components: {},
  data() {
    return {
      scores: [] as ScoreBaseDTO[],
    };
  },
  async created() {
    await this.loadScores();
  },
  methods: {
    async loadScores() {
      const scores = await ApiService.getScores();
      this.scores = scores
        .sort((a, b) => (a.score < b.score ? -1 : 1))
        .map((score, index) => {
          score.rank = index + 1;
          return score;
        });
    },
  },
});
