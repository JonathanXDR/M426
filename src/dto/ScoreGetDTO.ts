import type { ScoreBaseDTO } from "./ScoreBaseDTO";

export interface ScoreGetDTO extends ScoreBaseDTO {
  id: string;
  timestamp: string;
}
