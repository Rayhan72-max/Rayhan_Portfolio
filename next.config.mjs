/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
        { source: '/api/:path*',
          headers:[{key:"Access-Control-Allow-Origin",value:"https://rayhan-portfolio-cyan-chi-38.vercel.app/"},
            {key:"Access-Control-Allow-Origin",value:"GET,DELETE,POST"},
            {key:"Access-Control-Allow-Headers",value:"*"}
          ] }
        ]
      },
};

export default nextConfig;
