export async function insertOrder(payload) {
  const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eHB0eXdyZWVwbWhrdWNwYm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDkzODQsImV4cCI6MTk4NDA4NTM4NH0.SbfVqNtXvJeewq6LmWgdkdU8BmG6Nz57s0qC6kr3dkM`;
  const url = "https://qvxptywreepmhkucpbmh.supabase.co/rest/v1/simpleshop";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eHB0eXdyZWVwbWhrdWNwYm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDkzODQsImV4cCI6MTk4NDA4NTM4NH0.SbfVqNtXvJeewq6LmWgdkdU8BmG6Nz57s0qC6kr3dkM",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },

    body: JSON.stringify(payload),
  });
  return await res.json();
}

/*


const options = {
  method: 'POST',
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eHB0eXdyZWVwbWhrdWNwYm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDkzODQsImV4cCI6MTk4NDA4NTM4NH0.SbfVqNtXvJeewq6LmWgdkdU8BmG6Nz57s0qC6kr3dkM',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2eHB0eXdyZWVwbWhrdWNwYm1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MDkzODQsImV4cCI6MTk4NDA4NTM4NH0.SbfVqNtXvJeewq6LmWgdkdU8BmG6Nz57s0qC6kr3dkM',
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  },
  body: '{}'
};

fetch('https://qvxptywreepmhkucpbmh.supabase.co/rest/v1/simpleshop', options)
  .then(response => response.json())
  .then(response => console.log(response))

*/
