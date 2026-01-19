<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = 'https://avyloxwyfkotoubhylfb.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2eWxveHd5ZmtvdG91Ymh5bGZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1MTE2NjEsImV4cCI6MjA4NDA4NzY2MX0.Idogg7kMIBLhdcGP3r0k3unP1BNqe8v_DCep0mji5xM';

  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );
</script>

