// /api/accounts
// /api/accounts/:id

{
  id, email, name, created_at, updated_at;
}

// /api/threads
// /api/threads/:id
{
  id, title, description, location, account_id, created_at, updated_at;
}

// /api/threads/:id/posts
{
  id, title, description, location, account_id, created_at, updated_at;
  posts;
}

// /api/posts
// /api/posts/:id
{
  id, posts, thread_id, account_id, created_at, updated_at;
}

// /api/events
// /api/events/:id
{
  id,
    title,
    description,
    location,
    eventDate,
    eventTime,
    account_id,
    thread_id,
    created_at,
    updated_at;
}

// /api/volunteers
// /api/volunteers/:id
{
  id, account_id, event_id;
}
