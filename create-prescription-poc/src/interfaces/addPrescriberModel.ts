export interface AddPrescriberModel {
    prescriberId: number;
    prescriberName: string;
    prescriberAddress: PrescriberAddress;
    prescriberEmail: string;
    prescriberType: string;
}

export interface PrescriberAddress {
    addressLine: string;
    city: string;
    state: string;
    zipCode: string;
}