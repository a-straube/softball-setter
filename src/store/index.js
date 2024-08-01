import { configureStore, createSlice } from '@reduxjs/toolkit';

const playersSlice = createSlice({
    name: "player",
    initialState: [],
    reducers: {
        addPlayer(state, action) {
            state.push(action.payload);
        }
    }
});

const store = configureStore({
    reducer: {
        players: playersSlice.reducer
    }
});

export { store };