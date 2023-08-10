/**
 * Main intreface that handle user element, based on supabase database
 * @param id -> id of user in database
 * @param created_at -> date when user was created
 * @param city -> city of user where he live
 * @param email -> email of user
 * @param name -> name of the user (ex. Jhon Snow)
 * @param username -> nickname of the user (ex. Wolf for Jhon Snow)
 */
export interface IUsers {
    id: number;
    created_at: string;
    city: string | null;
    email: string | null;
    name: string | null;
    username: string | null;
}