INSERT INTO projects (title, description, tags, github_url, live_url, image_url)
VALUES
  (
    'Chautari',
    'A community discussion and content-sharing platform inspired by traditional Nepali gathering spaces, enabling real-time conversations and multimedia posts.',
    ARRAY['react', 'node', 'mongodb', 'express'],
    'https://github.com/SammSubedi/chautari',
    NULL,
    NULL
  ),
  (
    'JobBridge',
    'A full-stack job portal that bridges employers and job seekers with listing, search, and application management features.',
    ARRAY['react', 'node', 'mongodb', 'express'],
    'https://github.com/SammSubedi/jobbridge',
    NULL,
    NULL
  ),
  (
    'Assignment Management System',
    'A web-based system for managing and tracking academic assignments, built with a RESTful API backend and React frontend.',
    ARRAY['react', 'node', 'rest-api'],
    'https://github.com/SammSubedi/ams',
    NULL,
    NULL
  ),
  (
    'ProjectAssassin',
    'A 3D action game featuring a fully animated character controller with combat, HP & stamina systems, vaulting, climbing, and a lock-on targeting system.',
    ARRAY['unreal-engine', 'game-dev'],
    'https://github.com/SammSubedi/projectassassin',
    NULL,
    NULL
  );