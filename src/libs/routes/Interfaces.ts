type access = {
    all: string[];
    read: string[];
    write: string[];
    Delete: string[];
};

export interface  IPermission {
    getUsers: access ;
    
}