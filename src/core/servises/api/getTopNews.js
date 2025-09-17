import Http from '../interceptor/interceptor';

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetTopNews =async () => {
    try{
        const result=await Http.get(`${MainUrl}news/topNews`);
        return result.data.result;
    }catch(error){
        return [];
    }
}
 
export {GetTopNews};