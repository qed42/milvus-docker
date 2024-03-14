module.exports = {
    apps: [{
        name: "milvus-docker",
        script: "docker-compose",
        args: "up",
        watch: false,
        autorestart: false,
    }]
}
