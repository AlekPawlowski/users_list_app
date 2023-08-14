import { sortUsers } from "@/redux/userSlice";
import { SortSelect } from "@/styles/SMain";
import { ChangeEvent } from "react"
import { useDispatch } from "react-redux";

export const SortList = () => {
    const dispatch = useDispatch();
    const sortOptionChange = (event:ChangeEvent<HTMLSelectElement>) => {
        dispatch(sortUsers(event.target.value));
    }
    return <SortSelect onChange={sortOptionChange}>
        <option value="id">Sort by id</option>
        <option value="username">Sort by username</option>
    </SortSelect>
}