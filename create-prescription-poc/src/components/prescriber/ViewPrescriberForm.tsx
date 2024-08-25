import React from 'react';
import {Card, CardContent, FormControl, MenuItem, Select, TextField} from '@mui/material';
import '../../styleSheets/topBar.css'
import stateList from "../../interfaces/states";
import Button from "@mui/material/Button";

const prescriptionTypeList = ['GENERAL PRACTITIONER', 'NURSE PRACTITIONER', 'SPECIALIST'];

const textFiledCss = {
    paddingBottom: '20px;',
};

const padding = {
    paddingLeft: '40px',
};


function ViewPrescriberForm(props: any) {
    let prescriberData = props.prescriberData.row;

    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <form autoComplete={"false"}>
                        <FormControl fullWidth={true}>
                            <TextField id="prescriberId" value={prescriberData.prescriberId} label="Prescriber ID"
                                       color={"secondary"}
                                       size="small"
                                       type="number"
                                       variant="outlined"
                                       disabled={true}
                                       sx={textFiledCss}/>
                        </FormControl>

                        <FormControl fullWidth={true} size="small" sx={textFiledCss}>
                            <Select id="prescriberType"
                                    displayEmpty
                                    value={prescriberData.prescriberType}
                                    label="Prescriber Type"
                                    color={"secondary"}
                                    variant="outlined"
                                    disabled={true}
                                    MenuProps={{PaperProps: {sx: {maxHeight: 200, maxWidth: 100}}}}
                            >

                                <MenuItem value="">Prescriber Type</MenuItem>
                                {prescriptionTypeList.map((p: string, i: number) => (
                                    <MenuItem key={p} value={p}>{p}</MenuItem>
                                ))};

                            </Select>
                        </FormControl>


                        <FormControl fullWidth={true}>
                            <TextField id="prescriberName" value={prescriberData.prescriberName} label="Prescriber Name"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={true}
                                       sx={textFiledCss}/>
                        </FormControl>

                        <FormControl fullWidth={true}>
                            <TextField id="prescriberEmail" value={prescriberData.prescriberEmail}
                                       label="Prescriber Email"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={true}
                                       sx={textFiledCss}/>
                        </FormControl>

                        <FormControl fullWidth={true}>
                            <TextField id="prescriberAddressLine"
                                       value={prescriberData.prescriberAddress.addressLine}
                                       label="Address Line"
                                       color={"secondary"} size="small"
                                       variant="outlined"
                                       disabled={true}
                                       sx={textFiledCss}/>
                        </FormControl>

                        <FormControl fullWidth={true} aria-autocomplete={'none'}>
                            <TextField id="prescriberCity" value={prescriberData.prescriberAddress.city}
                                       label="City"
                                       color={"secondary"}
                                       size="small"
                                       variant="outlined"
                                       disabled={true}
                                       sx={textFiledCss}/>
                        </FormControl>

                        <div id="container">
                            <div className="cellContainer">
                                <FormControl sx={{minWidth: 120}} size="small">
                                    <Select id="prescriberState"
                                            displayEmpty
                                            value={prescriberData.prescriberAddress.state}
                                            label="State"
                                            color={"secondary"}
                                            variant="outlined"
                                            disabled={true}
                                            MenuProps={{PaperProps: {sx: {maxHeight: 200, maxWidth: 100}}}}
                                    >

                                        <MenuItem value="">State</MenuItem>

                                        {stateList.map((state: string, i: number) => (
                                            <MenuItem key={prescriberData.prescriberAddress.state}
                                                      value={prescriberData.prescriberAddress.state}>{prescriberData.prescriberAddress.state}</MenuItem>
                                        ))};

                                    </Select>
                                </FormControl>


                            </div>

                            <div className="cellContainer">
                                <FormControl>
                                    <TextField id="prescriberZip"
                                               value={prescriberData.prescriberAddress.zipCode}
                                               label="Zip Code"
                                               color={"secondary"} size="small"
                                               variant="outlined"
                                               disabled={true}
                                               sx={textFiledCss}/>
                                </FormControl>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>

            <div className={'add-provider-modal-submit'}>
                <div style={padding}>
                    <Button color={'secondary'} variant="outlined" onClick={props.closeDialog}>
                        Close
                    </Button>
                </div>

            </div>

        </div>
    )

}

export default ViewPrescriberForm;