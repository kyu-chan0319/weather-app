import { atomWithStorage } from "jotai/utils";
import { Weather } from "../api/weather";

export const weatherInfoState = atomWithStorage<Weather[]>("weather", []);
