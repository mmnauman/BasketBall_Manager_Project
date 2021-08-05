import React, {useContext} from 'react'
import { Context } from './../Store';

function FirstQuarter() {

const [state, dispatch] = useContext(Context);

console.log(state.team);


return (
<div>
    <select name="" id="">
        {state.team.map((player, i) => {
        return(
        <div key={i}>
            <select name="" id="">
                <option value={player.firstName}>{player.firstName} {player.lastName}</option>
            </select>

            <select name="" id="">
                <option value={player.position}>{player.position}</option>
            </select>
        </div>
        )
        })}

    </select>
</div>
)
}

export default FirstQuarter;
