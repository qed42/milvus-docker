module.exports = {
    apps: [{
        name: "milvus-docker",
        script: "sudo docker compose up",
        watch: false,
        autorestart: false,
    }]
}
