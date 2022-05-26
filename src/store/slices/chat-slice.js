/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
  messages: [],
  currentChannelId: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    replaceData(state, action) {
      const { channels, messages, currentChannelId } = action.payload;
      state.channels = channels;
      state.messages = messages;
      state.currentChannelId = currentChannelId;
    },
  },
});

export const chatActions = chatSlice.actions;
export default chatSlice.reducer;
