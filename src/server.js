const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
	// host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.36.19',
	const server = Hapi.server({
		port: 5000,
		host: "localhost",
		routes: {
			cors: {
				origin: ["*"],
			},
		},
	});

	server.route(routes);

	await server.start();

	console.log(`Server jalan di ${server.info.uri}`);
};

init();
