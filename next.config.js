/** @type {import('next').NextConfig} */

const path = require('path');

const { bindClassnames } = require('./scripts/bindClassnames');

const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		loader: 'default',
		domains: [`${process.env.API_HOST}`, 'res.cloudinary.com'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, '/src/styles/')],
		additionalData: '@use "global" as *;',
	},
	webpack(config) {
		bindClassnames(config);

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = nextConfig;
