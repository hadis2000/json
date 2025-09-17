import Http from '../interceptor/interceptor';

const MainUrl=process.env.REACT_APP_PUBLIC_PATH;

const GetTopArticle =async () => {
    try{
        const result=await Http.get(`${MainUrl}news/topArticles`);
        return result.data.result;
    }catch(error){
        return [];
    }
}
 
export {GetTopArticle};