export interface Register {
    username: string;
    password: string;
    phone: string;
    email: string;
    address: string;
    root?: Boolean;
}

export interface Login {
    username: string;
    password: string;
}