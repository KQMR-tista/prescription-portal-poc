import React, {useState} from 'react';
import {Card, CardContent, FormControl, MenuItem, Select, TextField} from '@mui/material';
import '../../styleSheets/topBar.css'
import Button from "@mui/material/Button";
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import stateList from "../../interfaces/states";
import {useDispatch, useSelector} from "react-redux";
import {addPrescriber, PrescriberTableEntry} from "../../store/prescriberTableSlice/prescriberSlice";

import {AppDispatch} from '../../store/store'

const prescriptionTypeList = ['GENERAL PRACTITIONER', 'NURSE PRACTITIONER', 'SPECIALIST'];

const textFiledCss = {
    paddingBottom: '20px;',
};

const padding = {
    paddingLeft: '40px',
};

let fileInputRef = React.createRef();

function AddPrescriberForm({closeModal}: any) {
    const [prescriberId, setPrescriberId] = useState("");
    const [prescriberType, setPrescriberType] = useState("");
    const [prescriberName, setPrescriberName] = useState("");
    const [prescriberEmail, setPrescriberEmail] = useState("");
    const [prescriberAddressLine, setPrescriberAddressLine] = useState("");
    const [prescriberCity, setPrescriberCity] = useState("");
    const [prescriberState, setPrescriberState] = useState("");
    const [prescriberZip, setPrescriberZip] = useState("");
    const [licenseFile, setLicenseFile] = useState(null);

    const dispatch = useDispatch<AppDispatch>();

    function submitPractitioner() {
        let addPrescriberPayload: PrescriberTableEntry = {
            'id': Math.random() * (10000 - 0),
            'prescriberId': parseInt(prescriberId),
            'prescriberType': prescriberType,
            'prescriberName': prescriberName,
            'prescriberEmail': prescriberEmail,
            'prescriberAddress': {
                'addressLine': prescriberAddressLine,
                'city': prescriberCity,
                'state': prescriberState,
                'zipCode': prescriberZip,
            }
        };

        // @ts-ignore
        dispatch(addPrescriber(addPrescriberPayload));
        closeModal();
    }

    const setFieldValue = (e: any) => {
        switch (e.target.id) {
            case 'prescriberId':
                setPrescriberId(e.target.value);
                break;
            case 'prescriberType':
                setPrescriberType(e.target.value);
                break;
            case 'prescriberName':
                setPrescriberName(e.target.value);
                break;
            case 'prescriberEmail':
                setPrescriberEmail(e.target.value);
                break;
            case 'prescriberAddressLine':
                setPrescriberAddressLine(e.target.value);
                break;
            case 'prescriberCity':
                setPrescriberCity(e.target.value);
                break;
            case 'prescriberZip':
                setPrescriberZip(e.target.value);
                break;
        }
    };

    const setStateSelectValue = (e: any) => {
        setPrescriberState(e.target.value);
    };

    const setPrescriberTypeValue = (e: any) => {
        setPrescriberType(e.target.value);
    };

    const addLicenseFile = (e: any) => {
        setLicenseFile(e.target.files[0]);
    };

    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <form autoComplete={"false"}>
                        <FormControl fullWidth={true}>
                            <TextField id="prescriberId" value={prescriberId} label="Prescriber ID" color={"secondary"}
                                       size="small"
                                       type="number"
                                       variant="outlined"
                                       disabled={false}
                                       sx={textFiledCss} onChange={setFieldValue}/>
                        </FormControl>

                        <FormControl fullWidth={true} size="small" sx={textFiledCss}>
                            <Select id="prescriberType"
                                    displayEmpty
                                    value={prescriberType}
                                    label="Prescriber Type"
                                    color={"secondary"}
                                    variant="outlined"
                                    disabled={false}
                                    MenuProps={{PaperProps: {sx: {maxHeight: 200, maxWidth: 100}}}}
                                    onChange={setPrescriberTypeValue}>

                                <MenuItem value="">Prescriber Type</MenuItem>
                                {prescriptionTypeList.map((p: string, i: number) => (
                                    <MenuItem key={p} value={p}>{p}</MenuItem>
                                ))};

                            </Select>
                        </FormControl>


                        <FormControl fullWidth={true}>
                            <TextField id="prescriberName" value={prescriberName} label="Prescriber Name"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={false}
                                       sx={textFiledCss} onChange={setFieldValue}/>
                        </FormControl>

                        <FormControl fullWidth={true}>
                            <TextField id="prescriberEmail" value={prescriberEmail} label="Prescriber Email"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={false}
                                       sx={textFiledCss} onChange={setFieldValue}/>
                        </FormControl>

                        <FormControl fullWidth={true}>
                            <TextField id="prescriberAddressLine" value={prescriberAddressLine} label="Address Line"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={false}
                                       sx={textFiledCss} onChange={setFieldValue}/>
                        </FormControl>

                        <FormControl fullWidth={true} aria-autocomplete={'none'}>
                            <TextField id="prescriberCity" value={prescriberCity} label="City" color={"secondary"}
                                       size="small"
                                       variant="outlined"
                                       disabled={false}
                                       sx={textFiledCss} onChange={setFieldValue}/>
                        </FormControl>

                        <div id="container">
                            <div className="cellContainer">
                                <FormControl sx={{minWidth: 120}} size="small">
                                    <Select id="prescriberState"
                                            displayEmpty
                                            value={prescriberState}
                                            label="State"
                                            color={"secondary"}
                                            variant="outlined"
                                            disabled={false}
                                            MenuProps={{PaperProps: {sx: {maxHeight: 200, maxWidth: 100}}}}
                                            onChange={setStateSelectValue}>

                                        <MenuItem value="">State</MenuItem>

                                        {stateList.map((state: string, i: number) => (
                                            <MenuItem key={state} value={state}>{state}</MenuItem>
                                        ))};

                                    </Select>
                                </FormControl>


                            </div>

                            <div className="cellContainer">
                                <FormControl>
                                    <TextField id="prescriberZip" value={prescriberZip} label="Zip Code"
                                               color={"secondary"} size="small"
                                               variant="outlined"
                                               disabled={false}
                                               sx={textFiledCss} onChange={setFieldValue}/>
                                </FormControl>
                            </div>

                            <div style={{paddingBottom: '20px'}}>
                                <Button
                                    sx={{backgroundColor: 'purple'}}
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    startIcon={<CloudUploadIcon/>}
                                >
                                    Upload License
                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        onChange={addLicenseFile}
                                        hidden
                                    />
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className={'add-provider-modal-submit'}>
                <div style={padding}>
                    <Button color={'secondary'} variant="outlined" onClick={closeModal}>
                        Cancel
                    </Button>
                </div>

                <div className={'pl'}>
                    <Button color={'secondary'} variant="outlined" onClick={submitPractitioner}>
                        Add Practitioner
                    </Button>
                </div>


            </div>


        </div>
    )

}

export default AddPrescriberForm;