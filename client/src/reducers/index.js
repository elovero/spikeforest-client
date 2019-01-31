import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import recordings from "./recordings";
import selectedRecording from "./selectedRecording";
import selectedStudy from "./selectedStudy";
import sorters from "./sorters";
import studies from "./studies";
import units from "./units";
import loading from "./loading";

const rootReducer = history =>
  combineReducers({
    recordings,
    selectedRecording,
    selectedStudy,
    sorters,
    studies,
    units,
    loading,
    router: connectRouter(history)
  });

export default rootReducer;
