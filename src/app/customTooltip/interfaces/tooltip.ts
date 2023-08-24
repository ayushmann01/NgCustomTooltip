export type InputData = {
  name: string;
  city: string;
};

export interface Tooltip {
  data?: InputData;
  left: number;
  top: number;
}
