/** @type {import('next').NextConfig} */

const path = require('path');

const { bindClassnames } = require('./scripts/bindClassnames');

const nextConfig = {
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
