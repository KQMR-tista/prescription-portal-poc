export interface PrescriberTableEntry {
    id?: number,
    prescriberId?: number;
    prescriberName?: string;
    prescriberAddress?: PrescriberAddress;
    prescriberEmail?: string;
    prescriberType?: string;
}

interface PrescriberAddress {
    addressLine?: string;
    city?: string;
    state?: string;
    zipCode?: string;
}