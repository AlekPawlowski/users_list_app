export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            users: {
                Row: {
                    city: string | null
                    created_at: string
                    email: string | null
                    id: number
                    name: string | null
                    username: string | null
                }
                Insert: {
                    city?: string | null
                    created_at?: string
                    email?: string | null
                    id?: number
                    name?: string | null
                    username?: string | null
                }
                Update: {
                    city?: string | null
                    created_at?: string
                    email?: string | null
                    id?: number
                    name?: string | null
                    username?: string | null
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
