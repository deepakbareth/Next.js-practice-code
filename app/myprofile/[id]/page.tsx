
import MyTestApi from "@/app/Components/apifolder/myTestApi";
import ProfileApi from "@/app/Components/profileApiFolder/ProfileApi";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: PageProps) {

 const { id } = await params;

  return(
<>
<h1 className="pl-10 text-2xl">Profile ID: {id}</h1>

<ProfileApi id={id}/>

{/* <MyTestApi id={id}/> */}
</>
  
  )

}
