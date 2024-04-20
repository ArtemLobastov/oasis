import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://pcpoitkvjbphjlejpfdk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcG9pdGt2amJwaGpsZWpwZmRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0MjkwMzAsImV4cCI6MjAyODAwNTAzMH0.uz-K9EwL8QkBMh0qaYc_AEnoRMmV4UZ6CPLYnQCDou8';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
