export interface Register {
    Username: string;
    Password: string;
    Phone: string;
    Email: string;
    Address: string;
    root?: Boolean;
}

export interface Login {
    user: string;
    password: string;
}