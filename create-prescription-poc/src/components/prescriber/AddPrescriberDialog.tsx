import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import {DialogContent, DialogTitle} from "@mui/material";
import AddPrescriberForm from "./AddPrescriberForm";
import Dialog from '@mui/material/Dialog';

const addButtonStyle = {
    paddingLeft: '0px',
    paddingBottom: '15px',
    display: 'flex',
    justifyContent: 'flex-end',
};


function AddPrescriberDialog() {
    const [open, setOpen] = React.useState(false);
    const openAddPrescriberModal = () => {
        setOpen(true);
    };
    const closeAddPrescriberModal = () => {
        setOpen(false);
    };
    return (
        <>
            <div style={addButtonStyle}>
                <Button color={'secondary'} variant="outlined" startIcon={<AddIcon/>}
                        onClick={openAddPrescriberModal}>
                    ADD PRACTITIONER
                </Button>
            </div>

            <Dialog
                open={open}
                onClose={closeAddPrescriberModal}>
                <DialogTitle sx={{textAlign: 'center'}}>ADD PRACTITIONER</DialogTitle>
                <DialogContent>
                    <AddPrescriberForm closeModal={closeAddPrescriberModal}/>
                </DialogContent>
            </Dialog>
        </>

    );
}

export default AddPrescriberDialog;