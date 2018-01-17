// 复制路径配置 输入与输出需要对应
const sourceFiles = [
    `${config.src}controller/**/*`,
    `${config.src}${config.static}images/**/*`
]
const resourceFiles = [
    `${config.dist}controller`,
    `${config.dist_static}images`
]

module.exports = cfg = {
    sourceFiles:sourceFiles,
    resourceFiles:resourceFiles
}