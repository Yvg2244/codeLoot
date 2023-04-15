
const userInfo =
  localStorage.getItem("userData") !== "undefined"
    ? JSON.parse(localStorage.getItem("userData"))
    : localStorage.clear();


const apiQuestionDataUrl="https://levelup.gitconnected.com/fetch-api-data-with-axios-and-display-it-in-a-react-app-with-hooks-3f9c8fa89e7b"

export const initialState = {
  user: userInfo,
  newRoom:[],
  questions:[],
  activeQuestion:0,
  outputStatus:false,
  joinRoomFlag:false,
  joinedRoom:null
};
const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NEW_ROOM":
        return {
          ...state,
          newRoom: action.newRoom,
        };
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          };
          case "SET_QUESTIONS":
          return {
            ...state,
            questions: action.questions,
          };
          case "SET_ACTIVE_QUESTION":
          return {
            ...state,
            activeQuestion: action.activeQuestion,
          };
          case "SET_OUTPUT_STATUS":
          return {
            ...state,
            outputStatus: action.outputStatus,
          };
          case "SET_JOINROOM_FLAG":
          return {
            ...state,
            joinRoomFlag: action.joinRoomFlag,
          };
          case "SET_JOINED_ROOM":
          return {
            ...state,
            joinedRoom: action.joinedRoom,
          };
      default:
        return state;
    }
  };
  export default reducer;