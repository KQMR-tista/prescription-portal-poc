import React from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import PrescriberTable from "./components/prescriber/PrescriberTable";
import PrescriptionTable from "./components/prescription/PrescriptionTable";

function App() {
    let [navSelection, setNavSelection] = React.useState('PRESCRIBER');

    const getSelectedTabName = (selection: string) => {
        setNavSelection(selection);
    }

    return (
        <div className="App">
            <TopBar onSelectionChange={getSelectedTabName}/>
            {navSelection === 'PRESCRIBER' ? <PrescriberTable/> : <PrescriptionTable/>}
        </div>
    );
}

export default App;
