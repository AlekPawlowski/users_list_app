"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react"

// const Edit = () => {
//     const router = usePathname();
//     console.log(router);
//     return <Fragment>
//         <Link href="/home">home</Link>
//     </Fragment>
// }
const  Edit = ({ params }: { params: { id: string } }) =>{
    console.log(params.id);
    return <div>My Post: {params.id}</div>
  }

export default Edit;