import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"
import 'react-native-url-polyfill/auto'

const supabaseUrl = 'https://mspzkfqppokjihfmlbcv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcHprZnFwcG9ramloZm1sYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3OTY0NjksImV4cCI6MTk4NTM3MjQ2OX0.H1hGkqJdInwl4tlDXk8E5kbhBOtm3vHhAzp9U4DcIKY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    }
})