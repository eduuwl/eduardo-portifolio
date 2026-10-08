import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro: bem mais leve que WebP para ilustrações com gradiente/brilho
    // suave (o emblema da marca, por exemplo), sem perda visível. WebP fica como
    // fallback para navegadores sem suporte a AVIF.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
