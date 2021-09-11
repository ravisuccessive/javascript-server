type access = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

export interface  IPermissions {
    getUsers: access ;
    
}