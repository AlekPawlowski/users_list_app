import { createClient } from '@supabase/supabase-js'
import { Database } from "../../supabaseType/database.types";

if (!process.env.SUPABASE_KEY) {
    throw new Error("nie ma supabase");
}

const supabaseUrl = 'https://ipkwavwtqxxedcziqhvc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);