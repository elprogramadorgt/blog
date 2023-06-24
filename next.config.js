/** @type {import('next').NextConfig} */

//THE MDX IS NOT WORKING PLEASE HELP XDDDD

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: '@mdx-js/react',
    },
});

// module.exports = nextConfig

module.exports = withMDX({
    ...nextConfig,
    // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
