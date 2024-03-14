module.exports = {
    apps: [{
        name: "milvus-docker",
        script: "docker-compose",
        args: "up",
        watch: false,
        max_memory_restart: "1000M",
        autorestart: true,
        max_restarts: 10,
    }]
}
