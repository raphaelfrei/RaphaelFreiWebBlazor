-- Inserir o aplicativo Qube na tabela Apps do SQLite
-- Seguindo a estrutura e campos utilizados pelo Pastory

INSERT INTO "Apps" (
    "Name",
    "Slug",
    "Description",
    "IconUrl",
    "WebsiteUrl",
    "GooglePlayUrl",
    "AppStoreUrl",
    "MicrosoftStoreUrl",
    "Tags",
    "Screenshots",
    "Company",
    "ReleaseDate",
    "IsFeatured",
    "Order"
) VALUES (
    'Qube - 3D Cube Solver & Game',
    'qube',
    'Twist, Scramble & Solve 2x2 and 3x3 cubes with intuitive swipe gestures and real-life cube solver algorithms.',
    '/images/qube-icon.png',
    'https://raphaelfrei.com.br/Qube',
    NULL,
    'https://apps.apple.com/br/app/qube-studio-3d-cubo-m%C3%A1gico/id6808970842',
    NULL,
    '["C#", "MonoGame"]',
    '[]',
    NULL,
    NULL,
    1,
    5
);
