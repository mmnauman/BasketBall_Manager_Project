export const Reducer = (
  state = { team: [], message: {} },
  { type, payload }
) => {
  switch (type) {
    case "ADD_PLAYER":
      console.log("hello");
      let Same = state.team.find(
        (player) => player.firstName === payload.firstName
      );
      if (!state.team.includes(Same)) {
        return {
          ...state,
          team: [...state.team, payload],
          message: "",
          report: false,
        };
      } else {
        return {
          ...state,
          message: { error: "Player With This Name is Already Exists" },
          report: true,
        };
      }
    case "UPDATE_ARRAY_REUEST":
      let similar = state.team.find((player) => {
        return Number(player.id) === Number(payload.id);
      });

      if (!state.team.includes(similar)) {
        return {
          ...state,
          team: [...state.team, payload],
          message: "",
          report: false,
        };
      } else {
        return {
          ...state,
          message: { error: "Player With This Name is Already Exists" },
          report: true,
        };
      }

    default:
      return state;
  }
};
