import React from "react";
import {DialogContent, DialogTitle} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import ViewPrescriberForm from "./ViewPrescriberForm";

function ViewPrescriberDialog(props: any) {
    return (
        <>
            <Dialog
                open={props.openDialog}
                onClose={props.closeDialog}>
                <DialogTitle sx={{textAlign: 'center'}}>VIEW PRACTITIONER</DialogTitle>
                <DialogContent>
                    <ViewPrescriberForm closeDialog={props.closeDialog} prescriberData={props.prescriberData}/>
                </DialogContent>
            </Dialog>
        </>

    );
}

export default ViewPrescriberDialog;