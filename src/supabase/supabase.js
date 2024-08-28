import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jkticsaygllkxmcixern.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
console.log(supabaseKey)

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;