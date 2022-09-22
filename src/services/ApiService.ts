import type { CardDTO } from "@/dto/CardDTO";
import type { ScoreBaseDTO } from "@/dto/ScoreBaseDTO";
import type { ScoreGetDTO } from "@/dto/ScoreGetDTO";
import HttpService from "@/services/HttpService";

const ApiService = {
  async getCards(): Promise<CardDTO[]> {
    const { data } = await HttpService.get<CardDTO[]>("/cards");
    return data;
  },

  async getScores(): Promise<ScoreGetDTO[]> {
    const { data } = await HttpService.get<ScoreGetDTO[]>("/scores");
    return data;
  },

  async addScore(score: ScoreBaseDTO): Promise<ScoreGetDTO> {
    const { data } = await HttpService.post<ScoreGetDTO>("/scores", score);
    return data;
  },
};

export default ApiService;
