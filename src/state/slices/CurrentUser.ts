// import { db, FirestoreCollections } from "@/hooks/useFirebase";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "firebase/auth";
// import { doc, onSnapshot } from "firebase/firestore";

let initialState: InitialCurrentUserState = {
  currentUser: null,
};

const CurrentUserSlice = createSlice({
  name: 'Current User',
  initialState,
  reducers: {
    fetchUser : (state, action: PayloadAction<User["uid"]>) => {
      // const unsub = onSnapshot(doc(db, FirestoreCollections.USERS, action.payload), (doc) => {
      //   const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      //   console.log(source, " data: ", doc.data());

      //   return {
      //     ...state,
      //     currentUser : doc.data()
      //   };
      // });
    } 
  },
}
);

export const { fetchUser } = CurrentUserSlice.actions;
export default CurrentUserSlice.reducer; 
