import { IUsers } from "@/interface/IUsers";
import { supabase } from "./config";

export const getUserData = async () => {
    let { data: users, error } = await supabase
        .from('users')
        .select('*')
    if (users) {
        // initally array is sorted by ID
        const usersSortedList: IUsers[] = users.sort((user, nextUser) => user.id - nextUser.id)
        return usersSortedList
    }
    return null;
}