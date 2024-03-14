module.exports = {
    apps: [{
        name: "milvus-docker",
        script: "sudo docker compose",
        args: "up",
        watch: false,
        autorestart: false,
    }]
}
