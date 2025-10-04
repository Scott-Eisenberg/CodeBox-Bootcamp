import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "https://supabase.com/dashboard/project/qdlkcbpwmniqwmvrjiai/settings/api-keys",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbGtjYnB3bW5pcXdtdnJqaWFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1MzcwNjcsImV4cCI6MjA3NTExMzA2N30.Xc7f_P5uYPfy_WEQI-8EpEsQJtPU9meg0D0yHxve5F4"
)

export default supabase