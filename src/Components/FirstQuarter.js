import React, {useContext} from 'react'
import { Context } from './../Store';

function FirstQuarter() {

   const [state, dispatch] = useContext(Context);

   console.log(state.team);


    return (
        <div>
                               <select name="" id="">
            {state.team.map((player) => {
                return(
                    <>

                       <option value={player.firstName}>{player.firstName} {player.lastName}</option>
                       <option value={player.position}>{player.position}</option>

             
               </>
                )
            })}
         
         </select>
        </div>
    )
}

export default FirstQuarter;
