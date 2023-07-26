import * as actions from './actionTypes';

const setStoryDetails = data => {
  return {
    type: actions.SET_STORY_DETAILS,
    data: data,
    isSideFrameVisible: true
  };
};

const setMiniProfileDetails = data => {
  return {
    type: actions.SET_MINI_PROFILE_DETAILS,
    data: data,
    isSideFrameVisible: true
  }
}

const setSidePostDetails = data => {
  return {
    type: actions.SET_SIDE_POST_DETAILS,
    data: data,
    isSideFrameVisible: true
  }
}


const toggleSideFrame = bool => {
    return {
        type: actions.TOGGLE_SIDE_FRAME,
        isSideFrameVisible: bool,
    }
}

const toggleMessageFrame = bool => {
  return {
      type: actions.TOGGLE_MESSAGE_FRAME,
      isMessageFrameVisible: bool,
  }
}

export const setStory = data => {
  return setStoryDetails(data);
};

export const setMiniProfile = data => {
  return setMiniProfileDetails(data);
}

export const setSidePost = data => {
  return setSidePostDetails(data);
}

export const toggleSide = bool => {
    return toggleSideFrame(bool);
}

export const toggleMessage = bool => {
  return toggleMessageFrame(bool);
}
