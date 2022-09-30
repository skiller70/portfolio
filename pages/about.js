import axios from "axios";
export async function getServerSideProps(context) {
    
    const {data} = await axios.get("https://dummyjson.com/products")
    
      return {
        props: {data}, // will be passed to the page component as props
      }
    } 
  

const about = ({data}) => {
    console.log(data)
    return (
        <div>
            this is about page
        </div>
    );
};

export default about;