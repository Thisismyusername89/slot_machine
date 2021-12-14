import React from 'react'
import Machine from './components/Machine';
function App(){
    const fruits =["🍌","🍑","🍒"];
    return (
    <>
        <h2>Try tour luck 🍀</h2>
        <Machine fruits={fruits}/>
    </>
    )
}
export default App;