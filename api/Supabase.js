require("dotenv").config();

import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://vcgsefcqohxdwugdgktu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjZ3NlZmNxb2h4ZHd1Z2Rna3R1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMzkzMzI4NywiZXhwIjoyMDE5NTA5Mjg3fQ.OCaPCsT8zl1xxI_sHVp9-Ud4vM4FX3AOzMk50gYTF_c";

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
