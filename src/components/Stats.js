import React, { useState } from 'react'

function Stats() {
    const [stats, setStats] = useState([
        {name:"fuerza",base:0, modificador: 0},
        {name: "destreza", base:0, modificador: 0},
        {name: "constitucion", base:0, modificador: 0},
        {name: "inteligencia", base:0, modificador: 0},
        {name: "sabiduria", base:0, modificador: 0},
        {name: "carisma", base:0, modificador: 0}
    ])

    return (
        <div style={{textAlign:"right"}}>
            <h1>Stats</h1>
            {stats.map((s) => {
                return (
                <div key={s.name}>
                    title={s.name} base={s.base} modificador={s.modificador}
                </div>
                )
            })}
        </div>
    )
}

export default Stats