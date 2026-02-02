-- Create waitlist table
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text not null,
  source text not null,
  created_at timestamptz default now()
);

-- Add index on email for faster lookups
create index idx_waitlist_email on waitlist(email);

-- Add index on created_at for sorting
create index idx_waitlist_created_at on waitlist(created_at desc);

-- Enable RLS
alter table waitlist enable row level security;

-- Allow inserts from anyone (anon users)
create policy "Allow public waitlist signups"
  on waitlist for insert
  to anon
  with check (true);

-- No select/update/delete for public (admin only)
create policy "Only authenticated users can read waitlist"
  on waitlist for select
  to authenticated
  using (true);
