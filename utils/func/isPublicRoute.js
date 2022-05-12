export default function isPublicRoute(route){
    let status = false ;

    if(route==='/'||route==='/auth/signup'||route==='/auth/verify'||route==='/auth/signin'){
        status=true;
    }
    return status;
}