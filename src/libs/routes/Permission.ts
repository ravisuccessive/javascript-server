export default function hasPermission1( moduleName , role , permissionType ) {
    let type ;
    console.log('Module Name is', moduleName);
    console.log('permission type is',permissionType);
    console.log('role is',role);
    const { all , read , write , Delete } = moduleName ;
    if ( permissionType === 'all' )
        type = all ;
    if ( permissionType === 'read' )
        type = read ;
    if ( permissionType === 'write' )
        type = write ;
    if ( permissionType === 'Delete' )
        type = Delete ;

    if ( role === 'head-trainer' ) {
        return true ;
    }
    else {
        if ( type.includes (role) )
            return true;
        else
            return false;
    }
}