import ora from "ora";
import util from "util";
import downloadGitRepo from "download-git-repo";

const cloneRepo = async (url, targetDir) => {
    const spinner = ora('Downloading......\n')
    spinner.start()
    const downPromise = util.promisify(downloadGitRepo)
    await downPromise(url, targetDir)
        .then(() => {
            spinner.succeed('Download success')
        })
        .catch(() => {
            spinner.fail('Download failed, please try again later...')
        })
}

export default cloneRepo