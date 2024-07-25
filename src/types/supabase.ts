export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      chat_sessions: {
        Row: {
          ai_type: string | null
          created_at: string
          messages: Json | null
          session_id: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          ai_type?: string | null
          created_at?: string
          messages?: Json | null
          session_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          ai_type?: string | null
          created_at?: string
          messages?: Json | null
          session_id?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      diaries: {
        Row: {
          content: Json | null
          created_at: string
          diary_id: string
          isFetching_todo: boolean | null
          user_id: string | null
        }
        Insert: {
          content?: Json | null
          created_at?: string
          diary_id?: string
          isFetching_todo?: boolean | null
          user_id?: string | null
        }
        Update: {
          content?: Json | null
          created_at?: string
          diary_id?: string
          isFetching_todo?: boolean | null
          user_id?: string | null
        }
        Relationships: []
      }
      messages_assistant: {
        Row: {
          content: string | null
          created_at: string
          message_id: string
          role: string | null
          todo_title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          message_id?: string
          role?: string | null
          todo_title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          message_id?: string
          role?: string | null
          todo_title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      messages_friend: {
        Row: {
          content: string | null
          created_at: string
          message_id: string
          role: string | null
          todo_title: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          message_id?: string
          role?: string | null
          todo_title?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          message_id?: string
          role?: string | null
          todo_title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      todos: {
        Row: {
          address: Json | null
          created_at: string
          event_datetime: string | null
          is_done: boolean | null
          todo_description: string | null
          todo_id: string
          todo_title: string | null
          user_id: string | null
        }
        Insert: {
          address?: Json | null
          created_at?: string
          event_datetime?: string | null
          is_done?: boolean | null
          todo_description?: string | null
          todo_id?: string
          todo_title?: string | null
          user_id?: string | null
        }
        Update: {
          address?: Json | null
          created_at?: string
          event_datetime?: string | null
          is_done?: boolean | null
          todo_description?: string | null
          todo_id?: string
          todo_title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          ai_type: string | null
          created_at: string
          email: string | null
          nickname: string | null
          user_id: string
        }
        Insert: {
          ai_type?: string | null
          created_at?: string
          email?: string | null
          nickname?: string | null
          user_id: string
        }
        Update: {
          ai_type?: string | null
          created_at?: string
          email?: string | null
          nickname?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
