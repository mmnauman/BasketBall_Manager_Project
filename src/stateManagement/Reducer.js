export const Reducer = (state={team: [], message: {}}, {type, payload}) => {
    switch(type){
        case 'ADD_PLAYER':
          let Same = state.team.find((player) => player.firstName === payload.firstName);
          if(!state.team.includes(Same)){
            return{
              ...state, team: [...state.team, payload], message: "", report: false,
            }
          }else{
            return {...state, message: {error: "Player With This Name is Already Exists"}, report: true}
          }
          
    default: 
        return state

    }
}