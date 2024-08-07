import ora from 'ora'
const Loading = async (fn, ...args) => {
    const spinner = ora('Executing......')
    spinner.start()
    try {
        const result = await fn(...args)
        spinner.succeed()
        return result
    } catch (e) {
        spinner.fail('Failed, please try again later...')
        return e
    }
}

export default Loading