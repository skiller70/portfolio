import {useRouter} from "next/router"
import Head from "next/head";





const index = (props) => {
    
    const router = useRouter();
    const params = router.query.test;
  
    return (
        <>
     <Head> 
        <title>{params}</title>
     </Head>
        <div>
            hello this is test route {params}
        </div>
        </>
    );
};

export default index;