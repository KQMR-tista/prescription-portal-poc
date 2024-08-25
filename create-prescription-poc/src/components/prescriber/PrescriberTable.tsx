import React, {useEffect, useState} from 'react';
import {DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';
import {AddPrescriberModel, PrescriberAddress} from "../../interfaces/addPrescriberModel";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddPrescriberDialog from "./AddPrescriberDialog";
import ViewPrescriberDialog from "./ViewPrescriberDialog";
import {useDispatch, useSelector} from "react-redux";
import {getAllPrescribers, PrescriberTableEntry} from "../../store/prescriberTableSlice/prescriberSlice";
import {AppDispatch} from '../../store/store'

const temp = {
    id: 1,
    prescriberId: 1,
    prescriberName: 'Ajith Test Prescriber',
    prescriberType: 'GENERAL PRACTITIONER',
    prescriberEmail: 'testPrescriber@yopmail.com',
    prescriberAddress: {
        addressLine: '1 test street',
        city: 'Catonsville',
        state: 'Maryland',
        zipCode: '21228',
    }
} as PrescriberTableEntry;

const tableDivStyle = {
    height: 400,
    width: '90%',
    paddingTop: '3%',
    paddingLeft: "5%",
    paddingRight: "5%"
};

let paginationState = {
    pagination: {
        paginationModel: {page: 0, pageSize: 5},
    }
}

function PrescriberTable() {
    /* Fetching the table data from Redux state store */
    const tableRows = useSelector((state: any) => state?.prescriberTableData.getPrescriberData);
    const dispatch = useDispatch<AppDispatch>();

    const [rowData, setRowData] = useState({});
    const [openViewDialog, setOpenViewDialog] = useState(false);

    const handleOpenViewDialog = (e: any, data: any) => {
        setRowData(data);
        setOpenViewDialog(true);
    };

    const handleCloseViewDialog = () => setOpenViewDialog(false);

    useEffect(() => {
        dispatch(getAllPrescribers());
    }, []);

    const columns: GridColDef[] = [
        {field: 'prescriberId', headerName: 'Prescriber ID', width: 100, sortable: true},
        {field: 'prescriberName', headerName: 'Prescriber Name', width: 200, sortable: true},
        {field: 'prescriberType', headerName: 'Prescriber Type', width: 200, sortable: true},
        {field: 'prescriberEmail', headerName: 'Prescriber Email', width: 250, sortable: true},
        {
            field: 'prescriberAddress', headerName: 'Prescriber Address', width: 400,
            valueGetter: (value: AddPrescriberModel, row: {
                prescriberAddress: PrescriberAddress
            }) => `${row.prescriberAddress.addressLine || ''} , ${row.prescriberAddress.city || ''}, ${row.prescriberAddress.state || ''}, ${row.prescriberAddress.zipCode || ''}`,
            sortable: true
        },
        {
            field: 'viewDetails',
            headerName: 'Actions',
            width: 120,
            sortable: false,
            renderCell: (params: GridRenderCellParams<any>) => {
                return <Button
                    color={'secondary'}
                    variant="outlined"
                    startIcon={<VisibilityIcon/>}
                    onClick={(event: React.MouseEvent) => handleOpenViewDialog(event, {...params})}
                >
                    View
                </Button>
            }
        },
    ];

    return (
        <>

            <div style={tableDivStyle}>
                <div>
                    <AddPrescriberDialog/>
                </div>

                <DataGrid
                    rows={tableRows}
                    columns={columns}
                    autoHeight={true}
                    initialState={paginationState}
                    pageSizeOptions={[10, 20, 50]}
                    sx={{
                        boxShadow: 4,
                        border: 2,
                        borderColor: 'purple',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                />
            </div>

            <ViewPrescriberDialog openDialog={openViewDialog} prescriberData={rowData}
                                  closeDialog={handleCloseViewDialog}></ViewPrescriberDialog>
        </>
    );
}

export default PrescriberTable;