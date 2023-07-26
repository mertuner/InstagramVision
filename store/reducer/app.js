import * as actionTypes from '../actions/actionTypes';

const initialState = {
  storyData: null,
  miniProfileData: null,
  isSideFrameVisible: false,
  isMessageFrameVisible: false,
  sidePostData: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STORY_DETAILS:
      return {
        ...state,
        storyData: action.data,
        miniProfileData: null,
        sidePostData: null,
        isSideFrameVisible: action.isSideFrameVisible,
      };
    case actionTypes.SET_MINI_PROFILE_DETAILS:
      return {
        ...state,
        storyData: null,
        sidePostData: null,
        miniProfileData: action.data,
        isSideFrameVisible: action.isSideFrameVisible,
      };
      case actionTypes.SET_SIDE_POST_DETAILS:
        return {
          ...state,
          storyData: null,
          miniProfileData: null,
          sidePostData: action.data,
          isSideFrameVisible: action.isSideFrameVisible,
        };
    case actionTypes.TOGGLE_SIDE_FRAME: {
      return {
        ...state,
        isSideFrameVisible: action.isSideFrameVisible,
      };
    }
    case actionTypes.TOGGLE_MESSAGE_FRAME: {
      return {
        ...state,
        isMessageFrameVisible: action.isMessageFrameVisible,
      };
    }
    default:
      return state;
  }
};

export default reducer;
