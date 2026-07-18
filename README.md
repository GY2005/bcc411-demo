# BCC411 site — static demo (mock deployment)

A static preview of the BCC411 church site for review purposes. This is the
compiled front-end plus a frozen JSON snapshot of the seed content standing
in for the real API — the actual project runs a Node/Fastify + Postgres
backend that is not deployed here.

Known demo limitations (not bugs in the real site):
- Log in / register / account / admin do nothing (no backend).
- The Articles and Testimonies pages each show all posts (static hosting
  ignores the `?kind=` filter the real API applies).
- Content is fixed seed/placeholder data.
