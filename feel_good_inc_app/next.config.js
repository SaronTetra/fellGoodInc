const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flowbite.com",],
    remotePatterns:[{
      hostname: 'img.freepik.com',
      port:''
      ,protocol:"https"
      },
      {
        hostname: 'drive.google.com',
        port:''
        ,protocol:"https"
        },    {
          hostname: 'freeimage.host',
          port:''
          ,protocol:"https"
          }   ,
          {
            hostname: 'photos.google.com',
            port:''
            ,protocol:"https"
            },
            {
              hostname: 'ibb.co',
              port:''
              ,protocol:"https"
              }      ]
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
