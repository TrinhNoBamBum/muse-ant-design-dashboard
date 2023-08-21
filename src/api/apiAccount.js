import baseAxios from "./baseAxios";
export const login= async(username,pass)=>{
    const res=await baseAxios({
        method:'GET',
        url:`Login/GetUserByUser/${username}&${pass}`
    })
    return res.data
}
export const ChangePass=async(data)=>{
    const res=await baseAxios({
        method:'PUT',
        url:`Login/ChangePass`,
        data:data

    })
    return res
}
export const getListUser=async()=>{
    const res=await baseAxios({
        method:'GET',
        url:'Account/GetAllAccount'
    })
    return res.data
}
export const register=async(data)=>{
    const res=await baseAxios({
        method:'POST',
        url:'Account/Register',
        data:data
    })
    return res
}
