import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IEpisode {
    id: number;
    name: string;
}
export interface IControllerState {
    play: boolean;
    episodes: IEpisode[];
    selected: IEpisode;
}

const initialState: IControllerState = {
    play: true,
    episodes: init(),
    selected: init()[0],
};

export const controllerSlice = createSlice({
    name: "controller",
    initialState,
    reducers: {
        setTogglePlay: (state, action: PayloadAction<boolean>) => {
            state.play = !state.play;
        },
        setSeletedEpisode: (state, action: PayloadAction<string>) => {
            state.selected = state.episodes.filter(
                (ele) => ele.name === action.payload
            )[0];
        },
        next: (state) => {
            const currentIndex = state.selected.id + 1;
            const lastestIndex = state.episodes.length;
            if (currentIndex == lastestIndex) {
                state.selected = state.episodes[0];
            } else {
                state.selected = state.episodes[currentIndex];
            }
        },
        prev: (state) => {
            const currentIndex = state.selected.id - 1;
            const lastestIndex = state.episodes.length;
            if (currentIndex < 0) {
                state.selected = state.episodes[lastestIndex - 1];
            } else {
                state.selected = state.episodes[currentIndex];
            }
        },
    },
});
function init(): IEpisode[] {
    const emptArr: number[] = Array.apply(null, Array(20)).map(function (_, i) {
        return i;
    });
    const episodes: IEpisode[] = emptArr.map((ele, i) => {
        return {
            id: i,
            name: `vids/spongebob_ss2_${i}.mp4`,
        };
    });
    return episodes;
}
export const { setTogglePlay, next, setSeletedEpisode, prev } =
    controllerSlice.actions;
export const controllerReducer = controllerSlice.reducer;
