import './UpdateHunt.css';



export default function UpdateHunt() {
    const updateHunt = (e) => {
        e.preventDefault();
        console.log("Submit clicked")
    };

    return (
        <>
                <h1>Update Your Hunt</h1>
            <div className='update nes-container'>
                <div className="nes-field is-inline updatedMethod">
                    <label for="name_field">Updated Method</label>
                    <input type="text" id="method_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline  updatedCounter">
                    <label for="name_field">Updated Counter</label>
                    <input type="text" id="counter_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline updatedPhase">
                    <label for="name_field">Updated Phase</label>
                    <input type="text" id="phase_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline updatedGame">
                    <label for="name_field">Updated Game</label>
                    <input type="text" id="game_field" className="nes-input" />
                </div>
                <div className="nes-field is-inline updatedComplete">
                    <label for="name_field">Put Completion Date </label>
                    <input type="date" id="completed_field" className="nes-input" />
                </div>
                <div className= "update-btn">
                <button type="button" className ="nes-btn is-warning" onClick={updateHunt}>Submit</button>
                </div>
            </div>
        </>
    )
} 