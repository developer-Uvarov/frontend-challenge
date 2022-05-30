import axiosInstance from "@/api/index";

export const catRequests = {
    moreCats: async () => {
        try {
            return await axiosInstance.get('',{
                params: {
                    api_key: '4d2b5ad6-e7a1-420c-8f3b-02e1cb11dc72',
                    limit: 20
                }
            })
        } catch (e) {
            console.log(e)
        }
    }
}